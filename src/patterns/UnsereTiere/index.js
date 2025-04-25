import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase";
import kathiImg from "../../assets/UnsereTiere/kathi.png";
import bobImg from "../../assets/UnsereTiere/bob.png";
import janaImg from "../../assets/UnsereTiere/jana.png";
import trashSVG from "../../assets/UnsereTiere/trash-solid.svg";

const UnsereTiere = () => {
  const [animals, setAnimals] = useState([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [posterStats, setPosterStats] = useState([]);

  const predefinedUsers = ["Kathi", "Bob", "Jana"];
  const userImages = {
    Kathi: kathiImg,
    Bob: bobImg,
    Jana: janaImg,
  };
  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || ""
  );
  const [showNameInput, setShowNameInput] = useState(!username);

  const fetchStats = async () => {
    const { data, error } = await supabase
      .from("unsere_tiere_db")
      .select("added_by");
    if (!error) {
      const countMap = {};
      data.forEach(({ added_by }) => {
        if (added_by) countMap[added_by] = (countMap[added_by] || 0) + 1;
      });
      const sorted = Object.entries(countMap)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count);
      setPosterStats(sorted);
    }
  };

  const fetchAnimals = async () => {
    const { data, error } = await supabase
      .from("unsere_tiere_db")
      .select("id, name, added_by")
      .order("name");
    if (!error) {
      setAnimals(
        (data || []).sort((a, b) => (a.name || "").localeCompare(b.name || ""))
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
        { event: "*", schema: "public", table: "unsere_tiere_db" },
        (payload) => {
          if (payload.eventType === "INSERT") fetchAnimals();
          if (payload.eventType === "DELETE") {
            setAnimals((prev) => prev.filter((a) => a.id !== payload.old.id));
          }
          fetchStats();
        }
      )
      .subscribe();

    return () => supabase.removeChannel(subscription);
  }, []);

  const addAnimal = async () => {
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    if (animals.some((a) => a.name?.toLowerCase() === trimmed)) {
      setMessage("Diese Tierart wurde schon hinzugefügt 🐾");
    } else {
      const { error } = await supabase
        .from("unsere_tiere_db")
        .insert({ name: trimmed, added_by: username });
      if (!error) {
        fetchStats();
        setMessage("");
      } else {
        setMessage("Fehler beim Speichern 🐾");
      }
    }
    setInput("");
  };

  const deleteAnimal = async (id, addedBy) => {
    if (addedBy !== username) {
      setMessage("🚫 Du darfst nur deine eigenen Einträge löschen 🛑");
      return;
    }
    const { error } = await supabase
      .from("unsere_tiere_db")
      .delete()
      .eq("id", id);
    if (!error) {
      setMessage("");
      fetchAnimals();
      fetchStats();
    } else {
      setMessage("Fehler beim Löschen 🐾");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
    setShowNameInput(true);
  };

  const maxCount = posterStats[0]?.count || 1;

  return (
    <div className="unsere-tiere__container">
      {username && (
        <div
          className={`unsere-tiere__user-info user-${username.toLowerCase()}`}
        >
          Angemeldet als{"\u00A0"}
          <strong>{username}</strong>
          {"\u00A0"}|{"\u00A0"}
          <button
            onClick={handleLogout}
            className="unsere-tiere__logout-button"
          >
            Benutzer ändern
          </button>
        </div>
      )}

      {showNameInput ? (
        <div className="unsere-tiere__name-dialog">
          <p>Wähle deinen Namen</p>
          <div className="unsere-tiere__name-options">
            {predefinedUsers.map((user) => (
              <div className="unsere-tiere__user-card" key={user}>
                <button
                  className={`unsere-tiere__tag-option tag-${user.toLowerCase()}`}
                  onClick={() => {
                    localStorage.setItem("username", user);
                    setUsername(user);
                    setShowNameInput(false);
                  }}
                >
                  <img
                    src={userImages[user]}
                    alt="user"
                    className={`unsere-tiere__user-image ${
                      user === "Jana"
                        ? "unsere-tiere__user-image--jana"
                        : "" || user === "Kathi"
                        ? "unsere-tiere__user-image--kathi"
                        : "" || user === "Bob"
                        ? "unsere-tiere__user-image--bob"
                        : ""
                    }`}
                  />
                  <span>{user}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="unsere-tiere__stats">
            <h3>🏆 Unsere fleißigsten Tier-Sammler:innen</h3>
            <ul>
              {posterStats.map(({ name, count }, i) => {
                const emoji = ["🥇", "🥈", "🥉"][i] || "🐾";
                const percent = (count / maxCount) * 100;
                return (
                  <li key={name} className="unsere-tiere__stats-item">
                    <div className="unsere-tiere__stats-label">
                      {emoji} {name}: {count}
                    </div>
                    <div className="unsere-tiere__stats-bar">
                      <div
                        className={`unsere-tiere__stats-fill tag-${name.toLowerCase()}`}
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
              onKeyDown={(e) => e.key === "Enter" && addAnimal()}
              placeholder="Tierart hinzufügen..."
              className="unsere-tiere__input"
            />
            <button onClick={addAnimal} className="unsere-tiere__button">
              Hinzufügen
            </button>
          </div>

          {message && <p className="unsere-tiere__message">{message}</p>}

          <div className="unsere-tiere__rules">
            <h3>📘 Spielregeln</h3>
            <ul>
              <li>
                Sammle so viele Tierarten, Rassen oder Spezies, wie du aus dem
                Kopf kennst.
              </li>
              <li>
                <strong>Wichtig:</strong> Kein Googeln, keine KI-Hilfe!
              </li>
              <li>
                Keine Oberbegriffe wie <em>Katze</em>, <em>Hund</em> oder{" "}
                <em>Affe</em>, sondern nur konkrete Bezeichnungen wie{" "}
                <em>Ragdoll</em>, <em>Malteser</em> oder <em>Orang-Utan</em>.
              </li>
            </ul>
          </div>

          <h2 className="unsere-tiere__count">{animals.length} / 1000</h2>

          <ul className="unsere-tiere__list">
            {animals.map((a) => (
              <li key={a.id} className="unsere-tiere__list-item">
                <span className="unsere-tiere__name">
                  {a.name
                    ? a.name.charAt(0).toUpperCase() + a.name.slice(1)
                    : "🐾 (Unbekannt)"}
                </span>
                {a.added_by && (
                  <span
                    className={`unsere-tiere__user-initial tag-${
                      a.added_by.toLowerCase?.() || "unbekannt"
                    }`}
                    title={`Hinzugefügt von ${a.added_by}`}
                  >
                    {a.added_by?.charAt(0).toUpperCase() || "?"}
                  </span>
                )}

                {a.added_by === username ? (
                  <button
                    className="unsere-tiere__delete-btn"
                    onClick={() => deleteAnimal(a.id, a.added_by)}
                  >
                    <img src={trashSVG} alt="trash" />
                  </button>
                ) : (
                  <span className="unsere-tiere__delete-dummy"></span>
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
