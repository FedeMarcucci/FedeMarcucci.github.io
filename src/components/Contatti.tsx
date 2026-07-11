"use client";

import { useState } from "react";
import SplitLines from "@/components/SplitLines";
import Reveal from "@/components/Reveal";

// ⚠️ PLACEHOLDER: sostituire con i recapiti reali del trio.
const EMAIL = "trioclelia@gmail.com";
const TEL = "+39 334 583 3275";

const campi = [
  { name: "nome", label: "Nome e cognome", type: "text", full: false },
  { name: "email", label: "Email", type: "email", full: false },
  { name: "data", label: "Data dell'evento", type: "text", full: false },
  { name: "luogo", label: "Luogo", type: "text", full: false },
];

export default function Contatti() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const corpo = [
      `Nome: ${data.get("nome") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Data evento: ${data.get("data") || ""}`,
      `Luogo: ${data.get("luogo") || ""}`,
      "",
      `${data.get("messaggio") || ""}`,
    ].join("\n");
    const subject = encodeURIComponent("Richiesta di informazioni · Matrimonio");
    // TODO: sostituire con un vero endpoint (API route / Formspree) per non dipendere dal client di posta.
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(
      corpo,
    )}`;
    setSent(true);
  }

  return (
    <section
      id="contatti"
      className="relative mx-auto max-w-7xl px-6 py-(--spacing-section) md:px-10"
    >
      <div className="grid gap-16 md:grid-cols-2 md:gap-24">
        {/* Invito */}
        <div>
          <Reveal as="p" className="overline mb-8">
            Contatti
          </Reveal>
          <SplitLines
            as="h2"
            className="font-display text-[clamp(2.6rem,6.5vw,5rem)] font-light leading-[1.02] text-ivory text-balance"
          >
            Raccontateci
            <br />
            il vostro giorno.
          </SplitLines>
          <Reveal
            as="p"
            delay={0.15}
            className="mt-10 max-w-md text-base leading-relaxed text-mist md:text-lg"
          >
            Ogni matrimonio è unico. Scriveteci data, luogo e ciò che sognate:
            vi risponderemo con una proposta pensata su misura.
          </Reveal>

          <Reveal delay={0.25} className="mt-12 space-y-5">
            <a
              href={`mailto:${EMAIL}`}
              className="link-fine block font-display text-2xl text-ivory md:text-3xl"
            >
              {EMAIL}
            </a>
            <a
              href={`tel:${TEL.replace(/\s/g, "")}`}
              className="block text-sm uppercase tracking-[0.22em] text-pearl"
            >
              {TEL}
            </a>
            
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid gap-8 sm:grid-cols-2">
              {campi.map((c) => (
                <label key={c.name} className="group flex flex-col gap-3">
                  <span className="text-[0.66rem] uppercase tracking-[0.28em] text-mist">
                    {c.label}
                  </span>
                  <input
                    name={c.name}
                    type={c.type}
                    required={c.name === "nome" || c.name === "email"}
                    className="border-b border-ivory/20 bg-transparent pb-3 text-ivory outline-none transition-colors duration-500 placeholder:text-mist/40 focus:border-gold"
                  />
                </label>
              ))}
            </div>

            <label className="group flex flex-col gap-3">
              <span className="text-[0.66rem] uppercase tracking-[0.28em] text-mist">
                Il vostro messaggio
              </span>
              <textarea
                name="messaggio"
                rows={4}
                placeholder="Parlateci del vostro matrimonio, dell'atmosfera che immaginate, dei brani a cui tenete…"
                className="resize-none border-b border-ivory/20 bg-transparent pb-3 text-ivory outline-none transition-colors duration-500 placeholder:text-mist/40 focus:border-gold"
              />
            </label>

            <button
              type="submit"
              className="group mt-2 inline-flex w-fit items-center gap-4 rounded-full border border-gold/50 px-8 py-4 text-[0.72rem] uppercase tracking-[0.26em] text-gold-soft transition-all duration-500 hover:bg-gold hover:text-ebony"
            >
              {sent ? "Grazie!" : "Invia la richiesta"}
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </button>
            {sent && (
              <p className="text-sm text-mist">
                Si aprirà il vostro client di posta con il messaggio già
                pronto. A presto!
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
