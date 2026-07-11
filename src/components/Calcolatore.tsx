"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import {
  LISTINO,
  calcolaPreventivo,
  euro,
} from "@/lib/prezzi";

// ⚠️ PLACEHOLDER: stessa email di contatto del sito.
const EMAIL = "trioclelia@gmail.com";

/** Numero che si anima da un valore all'altro (effetto "conteggio"). */
function AnimatedEuro({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const prev = useRef(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: prev.current };
    const tween = gsap.to(obj, {
      v: value,
      duration: 0.7,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = euro(Math.round(obj.v));
      },
    });
    prev.current = value;
    return () => {
      tween.kill();
    };
  }, [value]);

  return <span ref={ref}>{euro(value)}</span>;
}

function Riga({
  label,
  value,
  muted = false,
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3">
      <span
        className={`text-sm ${muted ? "text-mist" : "text-pearl/80"}`}
      >
        {label}
      </span>
      <span
        className={`font-display text-lg ${
          muted ? "text-mist" : "text-ivory"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export default function Calcolatore() {
  const [km, setKm] = useState(30);
  const [ore, setOre] = useState(1);
  const [canzoni, setCanzoni] = useState(1);

  const r = calcolaPreventivo({ km, ore, canzoni });

  const mailto = () => {
    const corpo = [
      "Richiesta di preventivo dal calcolatore:",
      "",
      `• Distanza da Monza: ${km} km`,
      `• Ore di prestazione: ${ore}`,
      `• Canzoni su misura: ${canzoni}`,
      "",
      `Stima indicativa (IVA esclusa): ${euro(r.totale)}`,
      "",
      "Vi lascio i dettagli del nostro evento:",
      "Data: ",
      "Luogo: ",
    ].join("\n");
    return `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Preventivo matrimonio · dal calcolatore",
    )}&body=${encodeURIComponent(corpo)}`;
  };

  return (
    <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
      {/* - Controlli - */}
      <div className="flex flex-col gap-14">
        {/* Distanza */}
        <div>
          <div className="mb-5 flex items-baseline justify-between">
            <label className="text-sm uppercase tracking-[0.22em] text-pearl">
              Distanza da Monza
            </label>
            <span className="font-display text-2xl text-gold-soft">
              {km} <span className="text-base text-mist">km</span>
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={200}
            step={5}
            value={km}
            onChange={(e) => setKm(Number(e.target.value))}
          />
          <p className="mt-3 text-xs text-mist/80">
            Primi {LISTINO.kmInclusi} km inclusi · poi{" "}
            {LISTINO.costoKm.toFixed(2).replace(".", ",")} €/km
          </p>
        </div>

        {/* Ore */}
        <div>
          <div className="mb-5 flex items-baseline justify-between">
            <label className="text-sm uppercase tracking-[0.22em] text-pearl">
              Ore di prestazione
            </label>
            <span className="font-display text-2xl text-gold-soft">
              {ore} <span className="text-base text-mist">h</span>
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={8}
            step={1}
            value={ore}
            onChange={(e) => setOre(Number(e.target.value))}
          />
          <p className="mt-3 text-xs text-mist/80">
            Prima ora nel cachet base · ogni ora extra{" "}
            {euro(LISTINO.oraAggiuntiva)}
          </p>
        </div>

        {/* Canzoni */}
        <div>
          <div className="mb-5 flex items-baseline justify-between">
            <label className="text-sm uppercase tracking-[0.22em] text-pearl">
              Richieste di canzoni
            </label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setCanzoni((c) => Math.max(0, c - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 text-lg text-ivory transition-colors hover:border-gold hover:text-gold-soft"
                aria-label="Rimuovi una canzone"
              >
                −
              </button>
              <span className="w-6 text-center font-display text-2xl text-gold-soft">
                {canzoni}
              </span>
              <button
                type="button"
                onClick={() => setCanzoni((c) => Math.min(12, c + 1))}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 text-lg text-ivory transition-colors hover:border-gold hover:text-gold-soft"
                aria-label="Aggiungi una canzone"
              >
                +
              </button>
            </div>
          </div>
          <p className="text-xs text-mist/80">
            {LISTINO.arrangiamentiInclusi} arrangiamento su misura incluso · poi{" "}
            {euro(LISTINO.costoArrangiamento)} a brano
          </p>
        </div>
      </div>

      {/* - Riepilogo - */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="relative overflow-hidden rounded-sm border border-gold/25 p-8 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(120% 120% at 100% 0%, rgba(198,161,91,0.12) 0%, transparent 55%)",
            }}
          />
          <p className="overline mb-8">Stima indicativa</p>

          <div className="border-b border-ivory/10 pb-2">
            <Riga label="Cachet base" value={euro(r.base)} />
            <Riga
              label={`Ore aggiuntive${r.oreOltre ? ` (${r.oreOltre})` : ""}`}
              value={r.oreExtra ? euro(r.oreExtra) : "-"}
              muted={!r.oreExtra}
            />
            <Riga
              label={`Trasferta${r.kmExtra ? ` (${r.kmExtra} km)` : ""}`}
              value={r.trasferta ? euro(r.trasferta) : "inclusa"}
              muted={!r.trasferta}
            />
            <Riga
              label={`Arrangiamenti${
                r.canzoniExtra ? ` (${r.canzoniExtra})` : ""
              }`}
              value={r.arrangiamenti ? euro(r.arrangiamenti) : "-"}
              muted={!r.arrangiamenti}
            />
          </div>

          <div className="mt-6 flex items-end justify-between">
            <div>
              <p className="text-[0.66rem] uppercase tracking-[0.24em] text-mist">
                Totale · IVA esclusa
              </p>
              <p className="mt-1 font-display text-5xl font-light text-ivory md:text-6xl">
                <AnimatedEuro value={r.totale} />
              </p>
            </div>
          </div>

          <a
            href={mailto()}
            className="group mt-8 inline-flex w-full items-center justify-center gap-4 rounded-full bg-gold px-8 py-4 text-[0.72rem] uppercase tracking-[0.26em] text-ebony transition-all duration-500 hover:bg-gold-soft"
          >
            Richiedi questo preventivo
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-mist/80">
          Il risultato è una stima orientativa, IVA esclusa. Il preventivo
          definitivo dipende da data, luogo, tempi tecnici ed eventuali
          richieste particolari, e viene sempre confermato per iscritto.
        </p>
      </div>
    </div>
  );
}
