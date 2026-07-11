import SplitLines from "@/components/SplitLines";
import Reveal from "@/components/Reveal";

const momenti = [
  {
    fase: "Preludio",
    titolo: "L'attesa degli ospiti",
    testo:
      "Un tappeto sonoro delicato mentre gli invitati prendono posto: l'emozione che sale, nota dopo nota.",
  },
  {
    fase: "Ingresso",
    titolo: "L'entrata della sposa",
    testo:
      "Il momento che tutti aspettano. La musica che avete scelto, dal vivo, esattamente sul vostro passo.",
  },
  {
    fase: "Rito",
    titolo: "Le promesse",
    testo:
      "Accompagniamo con discrezione i momenti più intimi della cerimonia, lasciando spazio alle vostre parole.",
  },
  {
    fase: "Firma",
    titolo: "La firma dei registri",
    testo:
      "Un intermezzo raffinato che trasforma un passaggio formale in un istante di grazia.",
  },
  {
    fase: "Uscita",
    titolo: "Il primo passo insieme",
    testo:
      "Un finale luminoso e festoso, mentre uscite come sposi tra gli applausi.",
  },
  {
    fase: "Ricevimento",
    titolo: "Aperitivo & brindisi",
    testo:
      "Dal classico al pop d'atmosfera: la giusta eleganza per accompagnare calici e sorrisi.",
  },
];

export default function Esperienza() {
  return (
    <section
      id="esperienza"
      className="relative border-y border-ivory/10 bg-night/60 py-(--spacing-section)"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-20 max-w-3xl">
          <Reveal as="p" className="overline mb-8">
            L&apos;esperienza
          </Reveal>
          <SplitLines
            as="h2"
            className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1.05] text-ivory text-balance"
          >
            Ogni momento
            <br />
            ha la sua musica.
          </SplitLines>
        </div>

        {/* Momenti */}
        <div className="grid gap-x-14 gap-y-2 md:grid-cols-2">
          {momenti.map((m, i) => (
            <Reveal
              key={m.fase}
              delay={(i % 2) * 0.08}
              className="group border-t border-ivory/10 py-8"
            >
              <div className="flex items-start gap-6">
                <span className="mt-1 w-24 shrink-0 text-[0.66rem] uppercase tracking-[0.28em] text-gold/80">
                  {m.fase}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-light text-ivory transition-colors duration-500 group-hover:text-gold-soft md:text-3xl">
                    {m.titolo}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-pearl/70">
                    {m.testo}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Le vostre richieste - blocco in evidenza */}
        <Reveal
          delay={0.1}
          className="relative mt-20 overflow-hidden rounded-sm border border-gold/25 px-8 py-14 md:px-16 md:py-20"
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
            Dalla colonna sonora del vostro primo film insieme al brano del
            primo ballo: portateci le vostre idee e le trasformeremo in un
            arrangiamento pensato solo per voi.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
