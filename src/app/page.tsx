export default function Home() {
  return (
    <main className="loginPage">
      <section className="loginCard">
        <h1>
          Ani<span>Track</span>
        </h1>

        <p>Dein privater Anime-Tracker.</p>

        <form>
          <label htmlFor="email">E-Mail</label>
          <input id="email" type="email" placeholder="du@beispiel.de" />

          <label htmlFor="password">Passwort</label>
          <input
            id="password"
            type="password"
            placeholder="Mindestens 6 Zeichen"
          />

          <button type="button">Anmelden</button>
        </form>

        <small>Demo-Anmeldung – noch ohne echte Benutzerkonten.</small>
      </section>
    </main>
  );
}