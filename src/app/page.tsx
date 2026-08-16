import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#201634,#0d0e17_55%,#2a180f)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-2xl font-bold text-white">
          Ani<span className="text-orange-400">Track</span>
        </Link>

        <Link
          href="/login"
          className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-orange-400 hover:text-orange-400"
        >
          Anmelden
        </Link>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 text-center">
        <p className="mb-5 text-sm font-bold tracking-[0.2em] text-orange-400">
          DEIN PERSÖNLICHER ANIME-TRACKER
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Behalte den Überblick über{" "}
          <span className="text-orange-400">deine Anime.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
          AniTrack hilft dir, Anime zu entdecken, zu deiner persönlichen Liste
          hinzuzufügen und deinen Folgenstand, Status und Bewertungen zu
          speichern.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/login"
            className="rounded-xl bg-orange-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-orange-300"
          >
            Jetzt starten
          </Link>

          <a
            href="#funktionen"
            className="rounded-xl border border-slate-600 px-6 py-3 font-bold text-slate-100 transition hover:border-orange-400"
          >
            Mehr erfahren
          </a>
        </div>
      </section>

      <section
        id="funktionen"
        className="mx-auto max-w-6xl px-6 pb-20"
      >
        <h2 className="text-3xl font-bold">Was kannst du mit AniTrack machen?</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-7">
            <p className="text-sm font-bold text-orange-400">01</p>
            <h3 className="mt-4 text-xl font-bold">Anime verwalten</h3>
            <p className="mt-3 leading-6 text-slate-300">
              Lege Anime an und sortiere sie nach geplant, laufend oder
              abgeschlossen.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-7">
            <p className="text-sm font-bold text-orange-400">02</p>
            <h3 className="mt-4 text-xl font-bold">Fortschritt speichern</h3>
            <p className="mt-3 leading-6 text-slate-300">
              Halte fest, bei welcher Folge du bist und wo du zuletzt aufgehört
              hast.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-7">
            <p className="text-sm font-bold text-orange-400">03</p>
            <h3 className="mt-4 text-xl font-bold">Titel entdecken</h3>
            <p className="mt-3 leading-6 text-slate-300">
              Später zeigt dir die AniList-API aktuelle und beliebte Anime.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-orange-400">
              VORSCHAU
            </p>
            <h2 className="mt-3 text-3xl font-bold">Aktuell beliebt</h2>
          </div>

          <p className="text-sm text-slate-400">Später über die AniList-API</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-7">
            <p className="text-sm font-bold text-orange-400">Fantasy</p>
            <h3 className="mt-4 text-xl font-bold">
              Frieren: Nach dem Ende der Reise
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Informationen werden später automatisch geladen.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-7">
            <p className="text-sm font-bold text-orange-400">Action</p>
            <h3 className="mt-4 text-xl font-bold">Solo Leveling</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Informationen werden später automatisch geladen.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-7">
            <p className="text-sm font-bold text-orange-400">Drama</p>
            <h3 className="mt-4 text-xl font-bold">Kaiju No. 8</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Informationen werden später automatisch geladen.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}