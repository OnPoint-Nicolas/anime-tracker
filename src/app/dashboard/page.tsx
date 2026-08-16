import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="dashboardPage">
      <nav className="navigation">
        <Link href="/" className="logo">
          Ani<span>Track</span>
        </Link>

        <div className="navLinks">
          <Link href="/dashboard" className="activeLink">
            Dashboard
          </Link>
          <a href="#liste">Meine Liste</a>
          <a href="#hinzufuegen">Hinzufügen</a>
        </div>

        <span className="guest">Gast</span>
      </nav>

      <section className="dashboardContent">
        <h1>Willkommen bei AniTrack</h1>
        <p className="subtitle">
          Verwalte deine Anime-Liste, speichere deinen Fortschritt und entdecke
          aktuelle Titel.
        </p>

        <div className="statsGrid">
          <article className="statCard">
            <strong>0</strong>
            <span>Anime gesamt</span>
          </article>
          <article className="statCard">
            <strong>0</strong>
            <span>Läuft gerade</span>
          </article>
          <article className="statCard">
            <strong>0</strong>
            <span>Abgeschlossen</span>
          </article>
          <article className="statCard">
            <strong>0</strong>
            <span>Gesehene Folgen</span>
          </article>
        </div>

        <section className="dashboardSection">
          <div className="sectionHeading">
            <h2>Weiter schauen</h2>
            <a href="#liste">Meine Liste öffnen</a>
          </div>

          <div className="emptyState">
            <h3>Noch kein Anime in Arbeit</h3>
            <p>
              Füge einen Anime hinzu und speichere deinen aktuellen
              Folgenstand.
            </p>
            <a className="primaryButton" href="#hinzufuegen">
              Anime hinzufügen
            </a>
          </div>
        </section>

        <section className="dashboardSection">
          <div className="sectionHeading">
            <h2>Aktuell beliebt</h2>
            <span>Später über AniList-API</span>
          </div>

          <div className="animePreviewGrid">
            <article className="animePreview">
              <span>Fantasy</span>
              <h3>Frieren: Nach dem Ende der Reise</h3>
              <p>Aktuelle Informationen folgen über die API.</p>
            </article>
            <article className="animePreview">
              <span>Action</span>
              <h3>Solo Leveling</h3>
              <p>Aktuelle Informationen folgen über die API.</p>
            </article>
            <article className="animePreview">
              <span>Drama</span>
              <h3>Kaiju No. 8</h3>
              <p>Aktuelle Informationen folgen über die API.</p>
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}