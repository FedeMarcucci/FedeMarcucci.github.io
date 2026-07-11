"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import SplitLines from "@/components/SplitLines";
import Reveal from "@/components/Reveal";
import { asset } from "@/lib/asset";

type Slide = {
  src: string;
  fase: string;
  titolo: string;
  /** Cornice larga (per scatti orizzontali / d'insieme). */
  wide?: boolean;
  /** Punto di messa a fuoco del ritaglio (object-position). */
  pos?: string;
};

const slide: Slide[] = [
  {
    src: "/img2.jpeg",
    fase: "Emozione",
    titolo: "L'anima del violino",
    pos: "42% center",
  },
  {
    src: "/img4.jpeg",
    fase: "Profondità",
    titolo: "La voce del violoncello",
    pos: "62% center",
  },
  {
    src: "/photo_2026-06-23_15-08-20.jpg",
    fase: "Intensità",
    titolo: "Il tocco del pianoforte",
    pos: "center 35%",
  },
  {
    src: "/photo_2025-08-02_23-10-49.jpg",
    fase: "Intesa",
    titolo: "Due archi, un respiro",
    wide: true,
    pos: "center 40%",
  },
  {
    src: "/img3.jpeg",
    fase: "Insieme",
    titolo: "La magia del trio",
    wide: true,
  },
];

export default function Galleria() {
  const root = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // - Desktop: scroll verticale → scorrimento orizzontale con pin -
      mm.add("(min-width: 768px)", () => {
        const trackEl = track.current!;
        const viewportEl = viewport.current!;

        // Il pin parte all'altezza della navbar fissa: così ingrana prima
        // e le foto non finiscono mai sotto la barra.
        const NAV = 96;
        const distance = () => trackEl.scrollWidth - viewportEl.clientWidth;

        const tween = gsap.to(trackEl, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: viewportEl,
            start: `top ${NAV}px`,
            end: () => "+=" + distance(),
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
            // Barra d'avanzamento dorata legata al progresso della galleria.
            onUpdate: (self) => {
              if (bar.current) gsap.set(bar.current, { scaleX: self.progress });
            },
          },
        });

        // Parallax reattivo al puntatore: le immagini seguono il mouse (profondità).
        const imgs = gsap.utils.toArray<HTMLElement>("[data-depth]");
        const setters = imgs.map((img) => ({
          x: gsap.quickTo(img, "x", { duration: 0.9, ease: "power3" }),
          y: gsap.quickTo(img, "y", { duration: 0.9, ease: "power3" }),
        }));

        const onMove = (e: PointerEvent) => {
          const nx = (e.clientX / window.innerWidth - 0.5) * 2; // -1..1
          const ny = (e.clientY / window.innerHeight - 0.5) * 2;
          setters.forEach((s, i) => {
            const depth = 12 + (i % 3) * 8; // profondità variabile per straniamento
            s.x(-nx * depth);
            s.y(-ny * depth);
          });
        };
        viewportEl.addEventListener("pointermove", onMove);

        return () => {
          viewportEl.removeEventListener("pointermove", onMove);
          tween.kill();
        };
      });
    },
    { scope: root },
  );

  return (
    <section id="galleria" ref={root} className="relative py-(--spacing-section)">
      {/* Intestazione */}
      <div className="mx-auto mb-16 max-w-7xl px-6 md:mb-24 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal as="p" className="overline mb-8">
              Galleria
            </Reveal>
            <SplitLines
              as="h2"
              className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1.05] text-ivory text-balance"
            >
              Frammenti
              <br />
              di un giorno speciale.
            </SplitLines>
          </div>
          <Reveal
            as="p"
            delay={0.15}
            className="hidden max-w-xs text-sm uppercase tracking-[0.24em] text-mist md:block"
          >
            Scorri per esplorare →
          </Reveal>
        </div>
      </div>

      {/* Viewport: pin + scorrimento orizzontale (desktop) / swipe (mobile) */}
      <div
        ref={viewport}
        className="relative w-full overflow-x-auto overflow-y-hidden [scrollbar-width:none] md:flex md:h-[calc(100svh-96px)] md:items-center md:overflow-hidden [&::-webkit-scrollbar]:hidden"
      >
        <div
          ref={track}
          className="flex w-max gap-5 px-6 will-change-transform md:gap-8 md:px-10"
        >
          {slide.map((s, i) => (
            <figure
              key={i}
              className={`group relative h-[54vh] w-[92vw] shrink-0 snap-center overflow-hidden rounded-sm sm:h-[62vh] sm:w-[64vw] md:h-[70vh] ${
                s.wide ? "md:w-[60vw]" : "md:w-[40vw]"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                data-depth
                src={asset(s.src)}
                alt={`${s.fase} - ${s.titolo}`}
                draggable={false}
                style={{ objectPosition: s.pos ?? "center" }}
                className="absolute inset-0 h-full w-full scale-[1.02] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.18] md:scale-[1.15]"
              />
              {/* Velatura per leggibilità della didascalia */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ebony/80 via-ebony/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <span className="text-[0.66rem] uppercase tracking-[0.3em] text-gold-soft">
                  {s.fase}
                </span>
                <p className="mt-2 font-display text-3xl font-light text-ivory md:text-4xl">
                  {s.titolo}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Barra d'avanzamento (solo desktop, dove c'è il pin) */}
        <div className="pointer-events-none absolute inset-x-10 bottom-10 hidden h-px bg-ivory/10 md:block">
          <div
            ref={bar}
            className="h-full origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-soft to-gold"
          />
        </div>
      </div>
    </section>
  );
}
