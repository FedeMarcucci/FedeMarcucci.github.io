import type { Metadata } from "next";
import Link from "next/link";
import SplitLines from "@/components/SplitLines";
import Reveal from "@/components/Reveal";
import Calcolatore from "@/components/Calcolatore";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Calcola il tuo preventivo",
  description:
    "Un'idea di spesa per la musica dal vivo del vostro matrimonio: distanza, ore di prestazione e canzoni su misura. Stima indicativa, IVA esclusa.",
  // Pagina non collegata (calcolatore disattivato): fuori dall'indice.
  robots: { index: false, follow: false },
};

export default function PreventivoPage() {
  return (
    <>
      {/* Intestazione leggera */}
      <header className="fixed inset-x-0 top-0 z-50 bg-ebony/70 py-5 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
          <Link
            href="/"
            className="font-display text-xl tracking-wide text-ivory transition-colors hover:text-gold-soft"
          >
            Trio&nbsp;Clelia
          </Link>
          <Link
            href="/"
            className="link-fine text-[0.7rem] uppercase tracking-[0.24em] text-mist transition-colors hover:text-ivory"
          >
            ← Torna al sito
          </Link>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-40 md:px-10 md:pt-48">
        <div className="mb-16 max-w-3xl md:mb-24">
          <Reveal as="p" className="overline mb-8">
            Calcolatore
          </Reveal>
          <SplitLines
            as="h1"
            className="font-display text-[clamp(2.8rem,7vw,5.5rem)] font-light leading-[1.02] text-ivory text-balance"
          >
            Un&apos;idea di spesa,
            <br />
            in pochi gesti.
          </SplitLines>
          <Reveal
            as="p"
            delay={0.15}
            className="mt-8 max-w-xl text-base leading-relaxed text-mist md:text-lg"
          >
            Muovete i cursori e vedrete aggiornarsi la stima in tempo reale. È
            solo un punto di partenza: il preventivo su misura lo costruiamo
            insieme.
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Calcolatore />
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
