import SplitLines from "@/components/SplitLines";
import Reveal from "@/components/Reveal";

const punti = [
  {
    n: "I",
    titolo: "La ricchezza di un'orchestra, l'intimità di un salotto",
    testo:
      "Il trio ha il potere di riempire lo spazio con la stessa solennità di una piccola orchestra, mantenendo però la delicatezza necessaria per non sovrastare mai le voci e i discorsi dei vostri ospiti. È l'eleganza che si fa sentire, con discrezione.",
  },
  {
    n: "II",
    titolo: "Un repertorio senza confini",
    testo:
      "Grazie a questa formazione, possiamo spaziare con naturalezza dalla musica classica ai brani pop o alle colonne sonore, reinterpretati in chiave acustica.",
  },
  {
    n: "III",
    titolo: "Un'eleganza anche visiva",
    testo:
      "La presenza scenica del trio arricchisce l'estetica del vostro evento. La bellezza degli archi e il fascino del pianoforte comunicano istantaneamente eleganza, arte e uno stile senza tempo.",
  },
];

export default function PercheTrio() {
  return (
    <section className="relative border-y border-ivory/10 bg-night/60 py-(--spacing-section)">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Manifesto della formazione */}
        <div className="max-w-5xl">
          <Reveal as="p" className="overline mb-10">
            Perché un trio
          </Reveal>
          <SplitLines
            as="h2"
            className="font-display text-[clamp(2.6rem,6vw,4.8rem)] font-light leading-[1.05] text-ivory text-balance"
          >
            Tre voci,
            <br />
            un&apos;orchestra.
          </SplitLines>
          <Reveal
            as="p"
            delay={0.15}
            className="mt-10 max-w-3xl text-base leading-relaxed text-pearl/80 md:text-lg"
          >
            Se un singolo strumento offre intimità e un duo un piacevole
            dialogo, il trio - pianoforte, violino e violoncello - è la{" "}
            <span className="italic text-gold-soft">sintesi perfetta</span> tra
            eleganza, ricchezza sonora e versatilità.
          </Reveal>
          <Reveal
            as="p"
            delay={0.2}
            className="mt-8 text-sm uppercase tracking-[0.22em] text-mist"
          >
            Ecco perché è la scelta ideale per il vostro giorno più bello.
          </Reveal>
        </div>

        {/* I tre motivi - in grande, editoriale */}
        <div className="mt-20 md:mt-28">
          {punti.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 0.05}
              className="grid gap-6 border-t border-ivory/10 py-12 md:grid-cols-[7rem_1fr] md:gap-12 md:py-16"
            >
              <span className="font-display text-5xl font-light text-gold/50 md:text-6xl">
                {p.n}
              </span>
              <div className="max-w-3xl">
                <h3 className="font-display text-[clamp(1.7rem,3.4vw,2.8rem)] font-light leading-[1.1] text-ivory text-balance">
                  {p.titolo}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-pearl/80 md:text-lg">
                  {p.testo}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
