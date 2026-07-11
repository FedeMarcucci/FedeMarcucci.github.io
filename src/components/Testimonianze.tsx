import SplitLines from "@/components/SplitLines";
import Reveal from "@/components/Reveal";

const testimonianze = [
  {
    testo:
      "Tanto giovani quanto professionali, fanno musica con naturalezza e dedizione. Sono stati molto disponibili a pensare insieme a noi un repertorio che si attagliasse perfettamente all'evento, e con la loro vitalità e comunicativa hanno animato i momenti più solenni come quelli più divertiti, lasciandoci un ricordo meraviglioso. Consigliatissimi!",
    autori: "Estia P.",
    luogo: "Matrimonio",
  },
  {
    testo:
      "Il trio è stato fantastico! Hanno reso il nostro matrimonio ancora più speciale con un programma dedicato e coinvolgente, spaziando dal classico al pop con eleganza. Molto disponibili e professionali.",
    autori: "Francesca M.",
    luogo: "Matrimonio",
  },
];

export default function Testimonianze() {
  return (
    <section className="relative border-y border-ivory/10 bg-night/60 py-(--spacing-section)">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal as="p" className="overline mb-14 text-center">
          Le parole degli sposi
        </Reveal>

        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          {testimonianze.map((t, i) => (
            <Reveal key={t.autori} delay={i * 0.1} className="flex flex-col">
              <span
                aria-hidden
                className="font-display text-6xl leading-none text-gold/40"
              >
                &ldquo;
              </span>
              <SplitLines
                as="blockquote"
                className="mt-4 font-display text-[clamp(1.4rem,3vw,2rem)] font-light italic leading-snug text-ivory"
              >
                {t.testo}
              </SplitLines>
              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-8 bg-gold/60" />
                <span className="text-sm uppercase tracking-[0.2em] text-pearl">
                  {t.autori}
                </span>
                <span className="text-xs text-mist">· {t.luogo}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
