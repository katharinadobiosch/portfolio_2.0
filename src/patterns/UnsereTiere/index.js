import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase";

const UnsereTiere = () => {
  const [animals, setAnimals] = useState([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [posterStats, setPosterStats] = useState([]);
  const predefinedUsers = ["Kathi", "Bob", "Jana"];

  const [username, setUsername] = useState(() => {
    return localStorage.getItem("username") || "";
  });
  const [showNameInput, setShowNameInput] = useState(!username);

  const fetchStats = async () => {
    const { data, error } = await supabase
      .from("unsere_tiere_db")
      .select("added_by");

    if (!error) {
      const countMap = {};
      data.forEach((entry) => {
        const name = entry.added_by;
        if (!name) return;
        countMap[name] = (countMap[name] || 0) + 1;
      });

      const sortedStats = Object.entries(countMap)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);

      setPosterStats(sortedStats);
    }
  };

  const fetchAnimals = async () => {
    const { data, error } = await supabase
      .from("unsere_tiere_db")
      .select("id, name, added_by")
      .order("name", { ascending: true });

    if (error) {
      console.error("❌ SELECT error:", error);
    } else {
      setAnimals(
        (data || []).sort((a, b) =>
          (a?.name || "").localeCompare(b?.name || "")
        )
      );
    }
  };

  useEffect(() => {
    fetchStats();
    fetchAnimals();

    const subscription = supabase
      .channel("unsere-tiere-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "unsere_tiere_db",
        },
        (payload) => {
          if (payload.eventType === "INSERT") {
            fetchAnimals(); // ← Holt die echten Daten aus Supabase
          }

          if (payload.eventType === "DELETE") {
            const deletedId = payload.old.id;
            setAnimals((prev) => prev.filter((a) => a.id !== deletedId));
          }
          fetchStats(); // Update stats on any change
        }
      )

      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const addAnimal = async () => {
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    const duplicate = animals.some(
      (animal) => animal.name && animal.name.toLowerCase() === trimmed
    );

    if (duplicate) {
      setMessage("Diese Tierart wurde schon hinzugefügt 🐾");
    } else {

      const { data, error } = await supabase.from("unsere_tiere_db").insert(
        {
          name: trimmed,
          added_by: username,
        },
        { returning: "representation" } // Verhindert extra Payload
      );


      if (!error) {

        fetchStats();
        setMessage("");
      } else {
        console.error("❌ Insert error:", error);

        setMessage("Fehler beim Speichern 🐾");
      }
    }

    setInput("");
  };

  const deleteAnimal = async (id) => {
    const { error } = await supabase
      .from("unsere_tiere_db")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Fehler beim Löschen:", error.message);
      setMessage("Fehler beim Löschen 🐾");
    } else {
      setMessage("");
    }

    fetchStats();
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
    setShowNameInput(true);
  };

  const maxCount = posterStats.length > 0 ? posterStats[0].count : 1;

  return (
    <div className="unsere-tiere__container">
      {username && (
        <div
          className={`unsere-tiere__user-info user-${username.toLowerCase()}`}
        >
          Angemeldet als <strong>{username}</strong>
          <button
            onClick={handleLogout}
            className="unsere-tiere__logout-button"
          >
            Benutzer ändern
          </button>
        </div>
      )}

      {showNameInput && (
        <div className="unsere-tiere__name-dialog">
          <p>Wähle deinen Namen</p>
          <div className="unsere-tiere__name-options">
            {predefinedUsers.map((user) => (
              <button
                key={user}
                className={`unsere-tiere__tag-option tag-${user.toLowerCase()}`}
                onClick={() => {
                  localStorage.setItem("username", user);
                  setUsername(user);
                  setShowNameInput(false);
                }}
              >
                {user}
              </button>
            ))}
          </div>
        </div>
      )}

      {!showNameInput && (
        <>
          <div className="unsere-tiere__stats">
            <h3>🏆 Unsere fleißigsten Tier-Sammler:innen</h3>
            <ul>
              {posterStats.map((poster, index) => {
                const medals = ["🥇", "🥈", "🥉"];
                const emoji = medals[index] || "🐾";
                const percent = (poster.count / maxCount) * 100;

                return (
                  <li key={poster.name} className="unsere-tiere__stats-item">
                    <div className="unsere-tiere__stats-label">
                      {emoji} {poster.name}: {poster.count}
                    </div>
                    <div className="unsere-tiere__stats-bar">
                      <div
                        className={`unsere-tiere__stats-fill tag-${poster.name.toLowerCase()}`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <h1 className="unsere-tiere__title">🐾 Unsere Tierarten</h1>

          <div className="unsere-tiere__input-group">
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (message) setMessage("");
              }}
              onFocus={() => {
                if (message) setMessage("");
              }}
              onKeyDown={(e) => e.key === "Enter" && addAnimal()}
              placeholder="Tierart hinzufügen..."
              className="unsere-tiere__input"
            />
            <button onClick={addAnimal} className="unsere-tiere__button">
              Hinzufügen
            </button>
          </div>

          {message && <p className="unsere-tiere__message">{message}</p>}

          <h2 className="unsere-tiere__count">{animals.length} / 1000</h2>

          <ul className="unsere-tiere__list">
            {animals.map((animal) => (
              <li className="unsere-tiere__list-item" key={animal.id}>
                <span className="unsere-tiere__name">
                  {animal.name
                    ? animal.name.charAt(0).toUpperCase() +
                      animal.name.slice(1).toLowerCase()
                    : "🐾 (Unbekannt)"}
                </span>
                {animal.added_by && (
                  <span
                    className={`unsere-tiere__user-initial tag-${
                      animal.added_by?.toLowerCase?.() || "unbekannt"
                    }`}
                    title={`Hinzugefügt von ${animal.added_by || "Unbekannt"}`}
                  >
                    {animal.added_by?.charAt?.(0).toUpperCase() || "?"}
                  </span>
                )}
                {animal.added_by === username && (
                  <div className="unsere-tiere__actions">
                    <button onClick={() => alert("Editierfunktion kommt noch")}>
                      🖊
                    </button>
                    <button onClick={() => deleteAnimal(animal.id)}>🗑</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UnsereTiere;
