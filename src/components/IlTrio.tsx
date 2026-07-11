import SplitLines from "@/components/SplitLines";
import Reveal from "@/components/Reveal";
import { asset } from "@/lib/asset";

const membri = [
  { n: "01", strumento: "Pianoforte", nome: "Federico Marcucci" },
  { n: "02", strumento: "Violino", nome: "Alessio Santagata" },
  { n: "03", strumento: "Violoncello", nome: "Matilda Sasselli" },
];

const credenziali = [
  {
    titolo: "Diplomati in conservatorio",
    testo: "Un percorso accademico che garantisce professionalità e rigore.",
  },
  {
    titolo: "Oltre 15 anni di dedizione allo strumento",
    testo:
      "Ogni componente del trio possiede una maturità artistica e una padronanza tecnica che permettono di interpretare ogni brano con naturalezza.",
  },
  {
    titolo: "Un'intensa attività tra concerti ed eventi",
    testo:
      "Il bagaglio di esperienze live necessario per gestire i tempi e le dinamiche del vostro giorno in totale sicurezza.",
  },
];

export default function IlTrio() {
  return (
    <section
      id="trio"
      className="relative mx-auto max-w-7xl px-6 py-(--spacing-section) md:px-10"
    >
      <div className="grid gap-16 md:grid-cols-2 md:gap-24">
        {/* Colonna testo */}
        <div>
          <Reveal as="p" className="overline mb-8">
            Il Trio
          </Reveal>
          <SplitLines
            as="h2"
            className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1.05] text-ivory text-balance"
          >
            Dove le emozioni
            <br />
            diventano musica.
          </SplitLines>

          <Reveal
            as="p"
            delay={0.15}
            className="mt-10 max-w-md text-base leading-relaxed text-mist md:text-lg"
          >
            Pianoforte, violino e violoncello. Un trio che accompagna ogni
            momento del vostro matrimonio con eleganza, sensibilità e un
            repertorio costruito intorno alla vostra storia.
          </Reveal>

          <Reveal as="div" delay={0.25} className="mt-12 space-y-8">
            {credenziali.map((c) => (
              <div key={c.titolo} className="border-l border-gold/40 pl-5">
                <p className="text-sm uppercase tracking-[0.18em] text-pearl">
                  {c.titolo}
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-mist">
                  {c.testo}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Ritratto del trio */}
        <Reveal className="group overflow-hidden rounded-sm md:self-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/FOTO%20TRIO%201.png")}
            alt="Trio Clelia - Matilda Sasselli, Alessio Santagata e Federico Marcucci"
            className="aspect-square w-full object-cover object-center transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
          />
        </Reveal>
      </div>

      {/* Strumenti e nomi - in orizzontale */}
      <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-ivory/10 sm:grid-cols-3 md:mt-24">
        {membri.map((m, i) => (
          <Reveal
            key={m.n}
            delay={i * 0.08}
            className="group flex flex-col gap-3 bg-ebony p-8 md:p-10"
          >
            <h3 className="font-display text-3xl font-light text-gold-soft md:text-4xl">
              {m.strumento}
            </h3>
            <p className="text-sm uppercase tracking-[0.22em] text-mist">
              {m.nome}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
