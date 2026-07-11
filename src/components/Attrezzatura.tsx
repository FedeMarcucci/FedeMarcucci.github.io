import SplitLines from "@/components/SplitLines";
import Reveal from "@/components/Reveal";

const dotazione = [
  { voce: "Pianoforte digitale", valore: "Yamaha P-225" },
  { voce: "Violino", valore: "Strumento da liuteria" },
  { voce: "Violoncello", valore: "Strumento da liuteria" },
  { voce: "Microfoni per archi", valore: "Pickup piezoelettrico KNA" },
  { voce: "Diffusori", valore: "dB Technologies ES602 (coppia)" },
  { voce: "Mixer", valore: "Soundcraft EFX8" },
  { voce: "Microfoni per gli sposi", valore: "Radiomicrofoni wireless" },
];

export default function Attrezzatura() {
  return (
    <section
      id="attrezzatura"
      className="relative mx-auto max-w-7xl px-6 py-(--spacing-section) md:px-10"
    >
      <div className="grid gap-16 md:grid-cols-[0.9fr_1.4fr] md:gap-24">
        {/* Colonna testo */}
        <div className="md:sticky md:top-32 md:self-start">
          <Reveal as="p" className="overline mb-8">
            Attrezzatura
          </Reveal>
          <SplitLines
            as="h2"
            className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1.05] text-ivory text-balance"
          >
            Il suono,
            <br />
            fin nei dettagli.
          </SplitLines>
          <Reveal
            as="p"
            delay={0.15}
            className="mt-10 max-w-md text-base leading-relaxed text-mist md:text-lg"
          >
            Strumenti da liuteria e un impianto audio professionale, montato e
            collaudato da noi. Perché la qualità del suono — per chi la sa
            ascoltare — è ciò che trasforma un accompagnamento in un&apos;emozione.
          </Reveal>
        </div>

        {/* Dotazione tecnica — scheda tecnica */}
        <Reveal as="div" delay={0.1} className="grid gap-x-14 md:grid-cols-2">
          {dotazione.map((d) => (
            <div
              key={d.voce}
              className="group border-t border-ivory/10 py-7"
            >
              <div className="flex items-start gap-5">
                <span className="mt-1.5 w-px shrink-0 self-stretch bg-gold/40" />
                <div>
                  <p className="text-[0.66rem] uppercase tracking-[0.26em] text-gold/80">
                    {d.voce}
                  </p>
                  <p className="mt-2 font-display text-xl font-light text-ivory transition-colors duration-500 group-hover:text-gold-soft md:text-2xl">
                    {d.valore}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
