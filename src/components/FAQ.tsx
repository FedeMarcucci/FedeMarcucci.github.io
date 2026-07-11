import SplitLines from "@/components/SplitLines";
import Reveal from "@/components/Reveal";
import { CONTACT_EMAIL, CONTACT_TEL } from "@/lib/site";
import { LISTINO, euro } from "@/lib/prezzi";

/**
 * Domande e risposte pensate per GEO: ogni risposta è autoconsistente,
 * fattuale e citabile dai motori generativi (chi, dove, quanto, cosa).
 */
const faq = [
  {
    q: "Chi è il Trio Clelia?",
    a: "Il Trio Clelia è un ensemble di pianoforte, violino e violoncello formato da musicisti diplomati al conservatorio, specializzato in musica dal vivo per matrimoni ed eventi a Milano e in Lombardia.",
  },
  {
    q: "In quali zone suona il Trio Clelia?",
    a: "Il trio suona a Milano e in tutta la Lombardia. Il sopralluogo è incluso entro 30 km da Milano; per distanze maggiori è previsto un rimborso spese.",
  },
  {
    q: "Quanto costa il Trio Clelia per un matrimonio?",
    a: `Il cachet per la cerimonia parte da ${euro(
      LISTINO.cachetBase,
    )} (IVA esclusa), con una tariffa unica non calcolata a ore. Include sopralluogo, attrezzatura, soundcheck, prove sul repertorio concordato e microfoni per gli sposi.`,
  },
  {
    q: "Cosa è incluso nel cachet della cerimonia?",
    a: "Sono compresi: sopralluogo, attrezzatura professionale con montaggio e smontaggio, soundcheck, prove dedicate al repertorio concordato e microfoni per gli sposi.",
  },
  {
    q: "Che repertorio propone il trio?",
    a: "Il repertorio spazia dalla musica classica e sacra alle colonne sonore fino al pop moderno, con arrangiamenti su misura per pianoforte, violino e violoncello.",
  },
  {
    q: "Il trio può suonare una canzone scelta da noi?",
    a: "Sì. Il Trio Clelia arrangia su misura la canzone del cuore degli sposi per pianoforte, violino e violoncello, dal brano del primo ballo alla colonna sonora preferita.",
  },
  {
    q: "Che strumenti e attrezzatura usa il trio?",
    a: "Il trio utilizza un pianoforte digitale Yamaha P-225, violino e violoncello da liuteria, pickup piezoelettrici KNA per gli archi, diffusori dB Technologies ES602, mixer Soundcraft EFX8 e radiomicrofoni wireless per gli sposi.",
  },
  {
    q: "Come si contatta o si prenota il Trio Clelia?",
    a: `Si può contattare il Trio Clelia via email (${CONTACT_EMAIL}) o telefono (${CONTACT_TEL}), oppure tramite il modulo sul sito indicando data e luogo dell'evento.`,
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative mx-auto max-w-7xl px-6 py-(--spacing-section) md:px-10"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="grid gap-16 md:grid-cols-[0.9fr_1.4fr] md:gap-24">
        <div className="md:sticky md:top-32 md:self-start">
          <Reveal as="p" className="overline mb-8">
            Domande frequenti
          </Reveal>
          <SplitLines
            as="h2"
            className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1.05] text-ivory text-balance"
          >
            Tutto quello
            <br />
            che c&apos;è da sapere.
          </SplitLines>
        </div>

        <Reveal as="div" delay={0.1} className="border-t border-ivory/10">
          {faq.map((f) => (
            <details
              key={f.q}
              className="group border-b border-ivory/10 py-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-xl font-light text-ivory transition-colors duration-500 group-hover:text-gold-soft md:text-2xl">
                  {f.q}
                </h3>
                <span
                  aria-hidden
                  className="relative h-4 w-4 shrink-0 text-gold/80 transition-transform duration-500 group-open:rotate-45"
                >
                  <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-pearl/70">
                {f.a}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
