import React, { useCallback, useMemo, useState, useEffect } from "react";

export default function PistachioHouse() {
  const [copiedKey, setCopiedKey] = useState(null);

  useEffect(() => {
    document.body.classList.add("theme-pistachio");
    return () => document.body.classList.remove("theme-pistachio");
  }, []);

  const metaPills = useMemo(
    () => [
      { label: "Geburtstag", value: "So 18.10.2026" },
      { label: "Check-in", value: "Fr 16.10. · 15:00" },
      { label: "Check-out", value: "Mo 19.10. · 11:00" },
      { label: "Festessen", value: "Sa 17.10. · 19:30" },
    ],
    []
  );

  const quickItems = useMemo(
    () => [
      { label: "Anreise", value: "ATH → Piräus → Aegina" },
      { label: "Fähren", value: "via Ferryhopper buchen" },
      { label: "Optional", value: "Yoga/Pilates 10:00" },
    ],
    []
  );

  const copyButtons = useMemo(
    () => [
      {
        key: "wa",
        label: "📋 WhatsApp-Gruppe",
        text: "Kathis 40 | Aegean Pistachio House 💚",
      },
      {
        key: "house",
        label: "🏠 Haus",
        text: "https://airbnb.de/rooms/944138955364529212",
      },
      {
        key: "ferry",
        label: "⛴️ Ferryhopper",
        text: "https://www.ferryhopper.com/",
      },
    ],
    []
  );

  const flights = useMemo(
    () => [
      {
        date: "Mo 12.10.",
        who: "Jana & Bob",
        route: "FRA → ATH",
        dep: "11:10",
        arr: "14:55",
        note: "Verlängern auf Agistri",
      },
      {
        date: "Di 13.10.",
        who: "Lydia",
        route: "CGN → ATH",
        dep: "07:00",
        arr: "11:00",
        note: "",
      },
      {
        date: "Di 13.10.",
        who: "Simona & Moni",
        route: "DUS → ATH",
        dep: "12:55",
        arr: "16:55",
        note: "",
      },
      {
        date: "Do 15.10.",
        who: "(Anne)",
        route: "DUS → ATH (via MUC)",
        dep: "06:20",
        arr: "11:50",
        note: "",
      },
      {
        date: "Fr 16.10.",
        who: "Heinrich & Jolanta",
        route: "KTW → ATH",
        dep: "08:00",
        arr: "11:25",
        note: "",
      },
      {
        date: "So 18.10.",
        who: "Jana & Bob",
        route: "ATH → FRA",
        dep: "15:55",
        arr: "18:00",
        note: "",
      },
      {
        date: "Mo 19.10.",
        who: "Anne",
        route: "ATH → DUS (via MUC)",
        dep: "15:45",
        arr: "19:40",
        note: "",
      },
      {
        date: "Mo 19.10.",
        who: "Lydia",
        route: "ATH → DUS",
        dep: "16:00",
        arr: "18:15",
        note: "",
      },
      {
        date: "Di 20.10.",
        who: "Simona & Moni",
        route: "ATH → DUS",
        dep: "09:45",
        arr: "11:55",
        note: "",
      },
    ],
    []
  );

  const rooms = useMemo(
    () => [
      {
        room: "Bedroom 1",
        beds: "1× Doppelbett + Schlafcouch",
        space: "2–4 Personen",
      },
      {
        room: "Bedroom 2",
        beds: "1× Doppelbett + Schlafcouch",
        space: "2–4 Personen",
      },
      {
        room: "Bedroom 3",
        beds: "1× Doppelbett + kleine Schlafcouch",
        space: "2–3 Personen",
      },
      { room: "Bedroom 4", beds: "1× Doppelbett", space: "2 Personen" },
      { room: "Bedroom 5", beds: "1× Doppelbett", space: "2 Personen" },
      { room: "Bedroom 6", beds: "1× Doppelbett", space: "2 Personen" },
      { room: "Guest Room", beds: "1× Doppelbett", space: "2 Personen" },
      { room: "Wohnzimmer", beds: "3 Sofas", space: "3 Personen" },
    ],
    []
  );

  const copyToClipboard = useCallback(async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 1500);
    } catch {
      window.prompt("Kopieren:", text);
    }
  }, []);

  const scrollToId = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="pistachio-house">
      <header>
        <div className="header-content">
          <div className="brand">Kathis 40. Geburtstag 🌿</div>

          <nav className="nav-links" aria-label="Inhaltsnavigation">
            <a href="#info" onClick={(e) => scrollToId(e, "info")}>
              Info
            </a>
            <a href="#whatsapp" onClick={(e) => scrollToId(e, "whatsapp")}>
              WhatsApp
            </a>
            <a href="#anreise" onClick={(e) => scrollToId(e, "anreise")}>
              Anreise
            </a>
            <a href="#programm" onClick={(e) => scrollToId(e, "programm")}>
              Programm
            </a>
            <a href="#fluege" onClick={(e) => scrollToId(e, "fluege")}>
              Flüge
            </a>
            <a
              href="#verlaengern"
              onClick={(e) => scrollToId(e, "verlaengern")}
            >
              Verlängern
            </a>
            <a href="#haus" onClick={(e) => scrollToId(e, "haus")}>
              Haus
            </a>
            <a href="#zimmer" onClick={(e) => scrollToId(e, "zimmer")}>
              Zimmer
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1>Mein 40. Geburtstag auf Aegina 🎉</h1>

          <p className="subtitle">
            Hallo ihr Lieben! Ich freue mich so sehr, dass ihr dabei seid. Hier
            findet ihr alle Infos für unsere gemeinsame Zeit auf Aegina. Das
            Highlight wird unser Samstagabend mit privatem Chef sein, aber auch
            die anderen Tage werden entspannt und schön. Lasst uns zusammen
            Sonne, Meer und gutes Essen genießen!
          </p>

          <div className="meta-pills" aria-label="Eckdaten">
            {metaPills.map((p) => (
              <span className="pill" key={p.label}>
                <strong>{p.label}</strong> {p.value}
              </span>
            ))}
          </div>

          <div className="button-group" aria-label="Schnellaktionen">
            {copyButtons.map((b) => (
              <button
                key={b.key}
                className="btn btnAction"
                type="button"
                onClick={() => copyToClipboard(b.key, b.text)}
              >
                {copiedKey === b.key ? "✓ Kopiert!" : b.label}
              </button>
            ))}

            <button
              className="btn btnPrimary"
              type="button"
              onClick={() => window.print()}
            >
              🖨️ Drucken
            </button>
          </div>

          <div className="quick-box">
            <h3>Auf einen Blick</h3>
            <div className="quick-items">
              {quickItems.map((it) => (
                <div className="quick-item" key={it.label}>
                  <span>{it.label}</span>
                  <span>{it.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="note">
            <strong>Übrigens:</strong> Ich wohne auf Agistri in Megalochori.
            Falls ihr früher kommen möchtet, freue ich mich sehr!
          </div>
        </section>

        <section id="info">
          <h2>Was euch erwartet</h2>

          <p>
            Hier findet ihr alle wichtigen Infos für unsere gemeinsame Zeit auf
            einen Blick. Ich möchte, dass wir eine wunderbare Zeit zusammen
            verbringen und jetzt schonmal die Vorfreude genießen können!
          </p>

          <ul>
            <li>
              <strong>Samstag</strong> ist unser großer Abend mit privatem Chef.
              Start um 19:30. Freut euch auf griechische Küche, BBQ und viele
              Leckereien!
            </li>
            <li>
              <strong>Freitag und Sonntag</strong> halten wir entspannt.
              Vielleicht ein Ausflug oder ein gemütliches Dinner, wir
              entscheiden spontan.
            </li>
            <li>
              <strong>Verlängern?</strong> Wer früher kommt, findet unten alle
              Infos.
            </li>
          </ul>

          <div className="callout">
            <strong>🥗 Allergien oder vegetarisch/vegan?</strong> Schreibt mir
            gerne kurz in der WhatsApp-Gruppe, damit wir beim Essen alles
            perfekt für euch vorbereiten können.
          </div>

          <div className="note">
            <strong>Dresscode:</strong> Kommt einfach so, wie ihr euch
            wohlfühlt! Wir sind auf einer griechischen Insel, alles kann, nichts
            muss 🌸
          </div>
        </section>

        <section id="whatsapp">
          <h2>WhatsApp-Gruppe</h2>

          <p>
            Damit wir alle gut verbunden sind und spontan Pläne machen können:
          </p>

          <div className="callout">
            <div className="wa-title">
              Kathis 40 | Aegean Pistachio House 💚
            </div>
            <p className="wa-text">
              Hier schreiben wir uns: Wann kommt ihr an? Wer fährt zusammen mit
              der Fähre? Gibt's spontane Pläne? In der Gruppe bleiben wir
              flexibel und können uns easy zusammenschließen, ob schon ab Athen
              oder dann auf der Insel!
            </p>
          </div>
        </section>

        <section id="anreise">
          <h2>Anreise nach Aegina</h2>

          <h3>Flughafen Athen → Piräus</h3>

          <p>
            Von Athen nach Piräus kommt ihr super easy! Hier sind drei
            Möglichkeiten, die gut funktionieren. Die Zeiten und Preise sind
            Richtwerte. Plant am besten ein bisschen Puffer ein, je nachdem wie
            der Verkehr ist.
          </p>

          <ul>
            <li>
              <strong>🚇 Metro</strong> · ca. 58–65 Min · ca. 9 € · Entspannt
              und zuverlässig, ihr seht unterwegs auch ein bisschen von Athen!
            </li>
            <li>
              <strong>🚌 Bus X96</strong> · ca. 60–90 Min · ca. 5,50 € · Fährt
              oft auch nachts, praktisch bei späten Ankünften!
            </li>
            <li>
              <strong>🚕 Taxi</strong> · ca. 40–60 Min · ca. 57 € tagsüber / 72
              € nachts · Perfekt, wenn ihr zu mehreren seid und die Kosten
              teilen könnt!
            </li>
          </ul>

          <div className="divider" />

          <h3>Piräus → Aegina</h3>

          <p>
            Und dann geht&apos;s aufs Wasser! Die Fährfahrt nach Aegina ist
            wunderschön, genießt den Ausblick aufs Meer und lasst den Urlaub
            beginnen. Alle Details zu Abfahrtszeiten und Preisen findet ihr auf{" "}
            <a
              href="https://www.ferryhopper.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ferryhopper
            </a>
            . Teilt eure Fährzeiten gerne in der WhatsApp-Gruppe, falls ihr euch
            zusammentun möchtet!
          </p>

          <ul>
            <li>
              <strong>Wichtig:</strong> Plant genug Zeit zwischen Landung,
              Gepäck abholen, Transfer und Fähre ein. Lieber entspannt als
              gestresst!
            </li>
            <li>
              <strong>Frühe Ankömmlinge:</strong> Check-in im Haus ist erst ab
              15:00, aber Aegina hat viele schöne Cafés und Strände zum
              Überbrücken.
            </li>
            <li>
              <strong>Abreise:</strong> Check-out ist um 11:00. Plant eure Fähre
              entspannt, sodass ihr nicht hetzen müsst.
            </li>
          </ul>
        </section>

        <section id="programm">
          <h2>Unser Programm</h2>

          <p>
            Der Samstag ist unser Highlight! Den Rest der Zeit lassen wir
            bewusst locker und entspannt. Inselmodus eben! 🌴
          </p>

          <h3>Freitag, 16.10.</h3>
          <ul>
            <li>
              <strong>Ab 15:00:</strong> Check-in im Haus
            </li>
            <li>
              Ankommen, durchatmen, die Insel erkunden. Kein festes Programm,
              einfach genießen!
            </li>
          </ul>

          <h3>Samstag, 17.10. (unser großer Abend!)</h3>
          <ul>
            <li>
              <strong>10:00 Uhr:</strong> Yoga im Garten. Wer Lust hat, ist
              herzlich willkommen! 🧘
            </li>
            <li>
              <strong>19:30 Uhr:</strong> Unser privater Chef zaubert uns ein
              Festmahl: griechische Küche, BBQ, frischer Fisch, Meeresfrüchte,
              Fleisch... lasst euch überraschen! 🍽️✨
            </li>
          </ul>

          <h3>Sonntag, 18.10. (mein Geburtstag!)</h3>
          <ul>
            <li>
              <strong>10:00 Uhr:</strong> Pilates im Garten. Auch hier: nur wenn
              ihr mögt!
            </li>
            <li>
              Den Rest des Tages schauen wir einfach nach Lust und Laune:
              Strand, chillen, erkunden...
            </li>
          </ul>

          <h3>Montag, 19.10.</h3>
          <ul>
            <li>
              <strong>11:00 Uhr:</strong> Check-out
            </li>
            <li>Abschied nehmen... aber die Erinnerungen bleiben! 🌊</li>
          </ul>

          <div className="divider" />

          <h3>Spontane Idee: Abend auf Agistri?</h3>

          <p>
            Ich habe eine Idee für einen der Abende: Wir könnten mit einem
            lokalen Wassertaxi rüber nach Agistri fahren und dort essen gehen.
            Das ist aber nur eine Option. Wir entscheiden das gemeinsam und
            spontan in der Gruppe. Kein Stress, kein Muss!
          </p>

          <ul>
            <li>
              <strong>Plan A:</strong> Mit dem Jamaica Water Taxi rüber nach
              Agistri und Dinner im Alkyoni um 20:00 Uhr. Tolles Restaurant
              direkt am Wasser
            </li>
            <li>
              <strong>Plan B:</strong> Entspanntes Dinner auf Aegina in einem
              schönen Restaurant
            </li>
          </ul>

          <div className="note">
            Wie gesagt: Alles kann, nichts muss! Wir schauen einfach, worauf wir
            Lust haben und entscheiden zusammen 🌸
          </div>
        </section>

        <section id="fluege">
          <h2>Eure Flüge</h2>

          <p>
            Hier seht ihr, wer wann ankommt und abfliegt. Perfekt, um euch für
            die Anreise zusammenzuschließen oder um zu schauen, wer vielleicht
            auch vor oder nach dem Wochenende auf Agistri ist!
          </p>

          <div className="table-wrapper" role="region" aria-label="Flugtabelle">
            <table>
              <thead>
                <tr>
                  <th>Datum</th>
                  <th>Wer?</th>
                  <th>Route</th>
                  <th>Abflug</th>
                  <th>Ankunft</th>
                  <th>Besonderes</th>
                </tr>
              </thead>
              <tbody>
                {flights.map((f, idx) => (
                  <tr key={`${f.date}-${f.who}-${idx}`}>
                    <td>
                      <strong>{f.date}</strong>
                    </td>
                    <td>
                      <strong>{f.who}</strong>
                    </td>
                    <td>{f.route}</td>
                    <td>{f.dep}</td>
                    <td>{f.arr}</td>
                    <td>{f.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="note">
            Fehlt noch jemand oder haben sich Zeiten geändert? Schickt mir
            einfach eure Flugdaten, dann update ich die Liste!
          </div>
        </section>

        <section id="verlaengern">
          <h2>Früher kommen oder länger bleiben?</h2>

          <p>
            Einige von euch kommen früher, das ist wunderbar! Gerade Agistri ist
            perfekt für ein paar Extra-Tage. Hier könnt ihr schauen, wer wann wo
            ist und euch vielleicht schon vorab treffen oder gemeinsam anreisen.
          </p>

          <ul>
            <li>
              <strong>Ich lebe auf Agistri</strong> in Megalochori. Falls ihr
              früher kommen möchtet, freue ich mich sehr!{" "}
            </li>
            <li>
              <strong>Plant eure Extra-Tage?</strong> Schreibt in die
              WhatsApp-Gruppe, wo ihr wann seid. Vielleicht ergibt sich ja ein
              spontaner Kaffee oder gemeinsamer Strandtag!
            </li>
            <li>
              <strong>Gemeinsam anreisen?</strong> Teilt eure Flug- und
              Fährzeiten in der Gruppe. Oft ergibt sich, dass man zusammen
              fahren kann.
            </li>
          </ul>
        </section>

        <section id="haus">
          <h2>Unser Haus auf Aegina</h2>

          <p>
            Wir haben ein wunderschönes Haus gemietet, mit Garten, Terrasse und
            genug Platz für uns alle. Hier ist der Link, falls ihr euch das Haus
            mal anschauen möchtet:
          </p>

          <p>
            <a
              href="https://airbnb.de/rooms/944138955364529212"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 600 }}
            >
              → Zum Airbnb-Inserat
            </a>
          </p>

          <ul>
            <li>
              <strong>Check-in:</strong> Freitag ab 15:00 Uhr
            </li>
            <li>
              <strong>Check-out:</strong> Montag um 11:00 Uhr
            </li>
            <li>
              <strong>Unser Highlight:</strong> Der große Garten für unser
              Dinner am Samstagabend! 🌿
            </li>
          </ul>
        </section>

        <section id="zimmer">
          <h2>Zimmer im Haus</h2>

          <p>
            Das Haus hat 6 Schlafzimmer plus einen Guest Room. Wir klären vor
            Ort, wer wo schläft.
          </p>

          <div
            className="table-wrapper"
            role="region"
            aria-label="Zimmertabelle"
          >
            <table>
              <thead>
                <tr>
                  <th>Zimmer</th>
                  <th>Betten</th>
                  <th>Platz für</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((r) => (
                  <tr key={r.room}>
                    <td>
                      <strong>{r.room}</strong>
                    </td>
                    <td>{r.beds}</td>
                    <td>{r.space}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="note">
            <strong>Wichtig zu wissen:</strong> Jedes Schlafzimmer hat ein
            eigenes Bad. Wer im Wohnzimmer schläft, nutzt das gemeinsame WC und
            ein Schlafzimmer-Bad zum Duschen. Das Haus ist für bis zu 21
            Personen ausgelegt.
          </div>
        </section>

        <footer>
          <p>Mit Liebe erstellt im Januar 2025 🌿</p>
          <p style={{ marginTop: 8 }}>Aegina, wir kommen!</p>
        </footer>
      </main>
    </div>
  );
}
