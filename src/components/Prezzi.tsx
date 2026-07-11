import SplitLines from "@/components/SplitLines";
import Reveal from "@/components/Reveal";
import { LISTINO, euro } from "@/lib/prezzi";

const inclusi = [
  {
    titolo: "Prove dedicate",
    testo: "Studio e prove del repertorio concordato insieme a voi.",
  },
  {
    titolo: "Sopralluogo",
    testo:
      "Sul luogo dell'evento, entro 30 km da Milano; oltre, con un semplice rimborso spese.",
  },
  {
    titolo: "Attrezzatura",
    testo:
      "Impianto e strumenti professionali, con montaggio e smontaggio a nostro carico.",
  },
  {
    titolo: "Soundcheck",
    testo: "Prova audio sul posto per un suono equilibrato e impeccabile.",
  },
  
  {
    titolo: "Microfoni per gli sposi",
    testo: "Per discorsi, promesse e ogni parola della cerimonia.",
  },
];

export default function Prezzi() {
  return (
    <section
      id="prezzi"
      className="relative mx-auto max-w-7xl px-6 py-(--spacing-section) md:px-10"
    >
      <div className="mb-16 max-w-3xl md:mb-20">
        <Reveal as="p" className="overline mb-8">
          Cachet
        </Reveal>
        <SplitLines
          as="h2"
          className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1.05] text-ivory text-balance"
        >
          Un cachet chiaro,
          <br />
          tutto compreso.
        </SplitLines>
        <Reveal
          as="p"
          delay={0.15}
          className="mt-8 max-w-xl text-base leading-relaxed text-mist md:text-lg"
        >
          Una tariffa unica per la cerimonia, indipendente dalla durata. <br/>
          Per aperitivo, ricevimento o richieste particolari, prepariamo un
          preventivo dedicato.
        </Reveal>
      </div>

      {/* Cachet cerimonia — tariffa unica */}
      <Reveal
        delay={0.1}
        className="overflow-hidden rounded-sm border border-gold/25"
      >
        <div className="grid md:grid-cols-[0.85fr_1.15fr]">
          {/* Prezzo */}
          <div className="relative flex flex-col justify-center gap-4 border-b border-ivory/10 p-10 md:border-b-0 md:border-r md:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(120% 140% at 15% 0%, rgba(107,43,58,0.30) 0%, transparent 55%), radial-gradient(90% 120% at 100% 100%, rgba(198,161,91,0.14) 0%, transparent 55%)",
              }}
            />
            <span className="text-[0.6rem] uppercase tracking-[0.26em] text-gold-soft">
              La cerimonia
            </span>
            <div>
              <span className="text-[0.66rem] uppercase tracking-[0.24em] text-mist">
                a partire da
              </span>
              <p className="mt-1 font-display text-5xl font-light text-gold-soft md:text-6xl">
                {euro(LISTINO.cachetBase)}
              </p>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-pearl/70">
              Pianoforte, violino e violoncello dal vivo, con arrangiamenti su
              misura già inclusi.
            </p>
          </div>

          {/* Cosa è compreso */}
          <div className="p-10 md:p-14">
            <p className="mb-8 text-[0.66rem] uppercase tracking-[0.28em] text-gold/80">
              Tutto questo è compreso
            </p>
            <ul className="space-y-6">
              {inclusi.map((v) => (
                <li key={v.titolo} className="flex items-start gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                  <div>
                    <p className="font-display text-lg font-light text-ivory md:text-xl">
                      {v.titolo}
                    </p>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-pearl/70">
                      {v.testo}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      {/* Calcolatore dei prezzi — disattivato
      <Reveal
        delay={0.1}
        className="mt-14 flex flex-col items-start justify-between gap-8 border-t border-ivory/10 pt-14 md:flex-row md:items-center"
      >
        <p className="max-w-xl font-display text-[clamp(1.4rem,3vw,2.2rem)] font-light italic text-ivory text-balance">
          Curiosi di un&apos;idea di spesa? Provate il calcolatore.
        </p>
        <Link
          href="/preventivo"
          className="group inline-flex shrink-0 items-center gap-4 rounded-full border border-gold/50 px-8 py-4 text-[0.72rem] uppercase tracking-[0.26em] text-gold-soft transition-all duration-500 hover:bg-gold hover:text-ebony"
        >
          Calcola il tuo preventivo
          <span className="transition-transform duration-500 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </Reveal>
      */}

      <p className="mt-8 text-xs text-mist/70">
        Prezzi indicativi, IVA esclusa. Il preventivo definitivo viene
        concordato in base alle vostre esigenze. Le tasse SIAE sono a carico del cliente.
      </p>
    </section>
  );
}
