import SplitLines from "@/components/SplitLines";
import Reveal from "@/components/Reveal";

export default function Manifesto() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-(--spacing-section) text-center md:px-10">
      <Reveal as="p" className="overline mb-10">
        Il nostro credo
      </Reveal>

      <SplitLines
        as="p"
        className="font-display text-[clamp(1.8rem,5vw,3.6rem)] font-light leading-[1.15] text-ivory text-balance"
      >
        Ogni grande storia d&apos;amore merita una{" "}
        <span className="italic text-gold-soft">colonna sonora</span>{" "}
        indimenticabile.
      </SplitLines>

      <Reveal
        as="p"
        delay={0.2}
        className="mx-auto mt-12 max-w-2xl text-base leading-relaxed text-mist md:text-lg"
      >
        Dall&apos;emozione del primo ingresso alla gioia dell&apos;ultimo
        brindisi: creiamo l&apos;atmosfera perfetta per ogni momento del vostro
        matrimonio. Una colonna sonora interamente dal vivo, pensata e cucita
        sui vostri desideri.
      </Reveal>
    </section>
  );
}
