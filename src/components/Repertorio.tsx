import SplitLines from "@/components/SplitLines";
import Reveal from "@/components/Reveal";

const categorie = [
  {
    titolo: "Classico & Sacro",
    esempi: [
      "Pachelbel - Canone", 
      "Cohen - Hallelujah", 
      "Schubert - Ave Maria",
      "Newton - Amazing Grace"
    ],
  },
  {
    titolo: "Colonne sonore",
    esempi: [
      "Morricone - Nuovo Cinema Paradiso",
      // "Morricone - Gabriel's Oboe",
      "Celine Dion - My Heart Will Go On (Titanic)",
      "Enya - May it be (Lord Of The Rings)",
      "Zimmer - Now We Are Free (Il Gladiatore)"
    ],
  },
  {
    titolo: "Pop & moderno",
    esempi: [
      "Ed Sheeran - Perfect",
      "Christina Perri - A Thousand Years",
      "Coldplay - Yellow",
      "Elvis Presley - Can't Help Falling in Love"
    ],
  },
  {
    titolo: "Classici Disney",
    esempi: [
      "La Bella e la Bestia",
      "Can You Feel the Love Tonight (Re Leone)",
      "Il Mondo è Mio (Aladdin)",
      "Married Life (Up)"
    ],
  },
];

export default function Repertorio() {
  return (
    <section
      id="repertorio"
      className="relative mx-auto max-w-7xl px-6 py-(--spacing-section) md:px-10"
    >
      <div className="grid gap-16 md:grid-cols-[0.9fr_1.4fr] md:gap-24">
        <div className="md:sticky md:top-32 md:self-start">
          <Reveal as="p" className="overline mb-8">
            Repertorio
          </Reveal>
          <SplitLines
            as="h2"
            className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1.05] text-ivory text-balance"
          >
            Dai capolavori del passato
            <br />
            ai successi dei giorni nostri.
          </SplitLines>
          <Reveal
            as="p"
            delay={0.15}
            className="mt-10 max-w-md text-base leading-relaxed text-mist md:text-lg"
          >
            Un repertorio ampio, sempre curato nei dettagli.<br/>Ecco
            un&apos;anteprima di ciò che possiamo suonare per voi.
          </Reveal>

          {/* Predisposizione per estratti audio */}
          <Reveal delay={0.25} className="mt-10">
            <a
              href="#video"
              className="group inline-flex items-center gap-4 text-sm uppercase tracking-[0.22em] text-gold-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 transition-colors duration-500 group-hover:border-gold group-hover:bg-gold/10">
                <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-gold-soft" />
              </span>
              Ascolta un estratto
            </a>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-sm bg-ivory/10 sm:grid-cols-2">
          {categorie.map((c, i) => (
            <Reveal
              key={c.titolo}
              delay={i * 0.08}
              className={`bg-ebony p-10 md:p-6 ${
                i === categorie.length - 1 && categorie.length % 2 === 1
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <h3 className="font-display text-2xl font-light text-gold-soft">
                {c.titolo}
              </h3>
              <ul className="mt-6 space-y-3">
                {c.esempi.map((e) => (
                  <li
                    key={e}
                    className="flex items-center gap-3 text-sm text-pearl/70"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold/70" />
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Le vostre richieste - blocco in evidenza */}
      <Reveal
        delay={0.1}
        className="relative mt-20 overflow-hidden rounded-sm border border-gold/25 px-8 py-14 md:mt-24 md:px-16 md:py-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(120% 140% at 15% 0%, rgba(107,43,58,0.35) 0%, transparent 55%), radial-gradient(90% 120% at 100% 100%, rgba(198,161,91,0.14) 0%, transparent 55%)",
          }}
        />
        <p className="overline mb-6">Le vostre richieste</p>
        <p className="max-w-3xl font-display text-[clamp(1.6rem,4vw,2.8rem)] font-light italic leading-tight text-ivory text-balance">
          La vostra canzone del cuore, arrangiata su misura per pianoforte,
          violino e violoncello.
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-pearl/80 md:text-lg">
          Dalle melodie che hanno accompagnato i vostri momenti più belli fino
          alla magia del vostro primo ballo: portateci le vostre idee e le
          trasformeremo in un arrangiamento pensato solo per voi.
        </p>
      </Reveal>
    </section>
  );
}
