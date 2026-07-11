export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ivory/10 bg-night">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="flex flex-col items-center gap-8 text-center">
          <a
            href="#top"
            className="font-display text-3xl tracking-wide text-ivory"
          >
            Trio Clelia
          </a>
          <p className="overline">Pianoforte · Violino · Violoncello</p>
          <div className="hairline w-40" />
          <p className="max-w-md font-display text-lg font-light italic text-pearl/70">
            La musica giusta, per il giorno più importante.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-xs uppercase tracking-[0.2em] text-mist md:flex-row">
          <span>© {year} Trio Clelia</span>
          <span>Musica dal vivo per matrimoni ed eventi</span>
        </div>
      </div>
    </footer>
  );
}
