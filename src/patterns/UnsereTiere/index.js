import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase";

const UnsereTiere = () => {
  const [animals, setAnimals] = useState([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const predefinedUsers = ["Kathi", "Bob", "Jana"];

  const [username, setUsername] = useState(() => {
    return localStorage.getItem("username") || "";
  });
  const [showNameInput, setShowNameInput] = useState(!username);

  useEffect(() => {
    const fetchAnimals = async () => {
      const { data, error } = await supabase
        .from("unsere-tiere-db")
        .select("name, added_by")
        .order("name", { ascending: true });

      if (!error) setAnimals(data);
    };

    fetchAnimals();

    const subscription = supabase
      .channel("unsere-tiere-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "unsere-tiere-db",
        },
        (payload) => {
          console.log("🔄 Realtime update:", payload);

          if (payload.eventType === "INSERT") {
            const newAnimal = payload.new;
            setAnimals((prev) =>
              [...prev, newAnimal].sort((a, b) => a.name.localeCompare(b.name))
            );
          }

          if (payload.eventType === "DELETE") {
            const deletedName = payload.old.name;
            setAnimals((prev) => prev.filter((a) => a.name !== deletedName));
          }
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
      (animal) => animal.name.toLowerCase() === trimmed
    );

    if (duplicate) {
      setMessage("Diese Tierart wurde schon hinzugefügt 🐾");
    } else {
      const { error } = await supabase.from("unsere-tiere-db").insert({
        name: input,
        added_by: username,
      });

      if (!error) {
        setMessage("");
      } else {
        setMessage("Fehler beim Speichern 😿");
      }
    }

    setInput("");
  };

  return (
    <div className="unsere-tiere__container">
      {showNameInput && (
        <div className="unsere-tiere__name-dialog">
          <p>Wer bist du?</p>
          <div className="unsere-tiere__name-options">
            {predefinedUsers.map((user) => (
              <button
                key={user}
                className={`unsere-tiere__name-button name-${user.toLowerCase()}`}
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
          <h1 className="unsere-tiere__title">🐾 Unsere Tierarten</h1>

          <div className="unsere-tiere__input-group">
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (message) setMessage(""); // ← hier wird gelöscht
              }}
              onFocus={() => {
                if (message) setMessage(""); // ← optional zusätzlich
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
            {animals.map((animal, index) => (
              <li className="unsere-tiere__list-item" key={index}>
                <span className="unsere-tiere__name">
                  {animal.name.charAt(0).toUpperCase() +
                    animal.name.slice(1).toLowerCase()}
                </span>
                {animal.added_by && (
                  <span
                    className={`unsere-tiere__tag ${animal.added_by.toLowerCase()}`}
                  >
                    {animal.added_by}
                  </span>
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
