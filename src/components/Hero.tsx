"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, EASE, prefersReducedMotion } from "@/lib/gsap";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = prefersReducedMotion();
      const title = root.current?.querySelector<HTMLElement>("[data-title]");

      // Parallax lento del glow allo scroll.
      if (!reduce) {
        gsap.to("[data-glow]", {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (reduce || !title) {
        gsap.set("[data-fade]", { autoAlpha: 1, y: 0 });
        if (title) gsap.set(title, { autoAlpha: 1 });
        return;
      }

      const split = new SplitText(title, {
        type: "chars",
        charsClass: "char",
      });
      gsap.set(title, { autoAlpha: 1 });

      const tl = gsap.timeline({ delay: 0.35 });
      tl.from("[data-overline]", { autoAlpha: 0, y: 20, duration: 1 })
        .from(
          split.chars,
          {
            yPercent: 130,
            autoAlpha: 0,
            duration: 1.25,
            ease: EASE,
            stagger: 0.045,
          },
          "-=0.5",
        )
        .from(
          "[data-sub]",
          { autoAlpha: 0, y: 24, duration: 1.2 },
          "-=0.7",
        )
        .fromTo(
          "[data-rule]",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.4, ease: EASE },
          "-=0.9",
        )
        .from(
          "[data-hint]",
          { autoAlpha: 0, y: 12, duration: 1 },
          "-=0.5",
        );

      return () => split.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      {/* Glow a lume di candela */}
      <div
        data-glow
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[42%] -z-10 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(198,161,91,0.16) 0%, rgba(107,43,58,0.08) 40%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      {/* Vignettatura sui bordi */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 30%, transparent 40%, rgba(11,10,8,0.9) 100%)",
        }}
      />

      <div className="relative z-10 px-6 text-center">
        <p
          data-overline
          data-fade
          className="overline mb-8"
        >
          Pianoforte · Violino · Violoncello
        </p>

        <h1
          data-title
          className="reveal-init font-display text-[clamp(3.5rem,15vw,12rem)] font-light leading-[0.95] tracking-tight text-ivory"
        >
          Trio <span className="italic text-gold-soft">Clelia</span>
        </h1>

        <div
          data-rule
          className="mx-auto my-10 h-px w-40 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
        />

        <p
          data-sub
          data-fade
          className="mx-auto max-w-xl font-display text-[clamp(1.25rem,2.4vw,1.9rem)] font-light italic leading-snug text-pearl/90 text-balance"
        >
          La colonna sonora del vostro giorno più importante.
        </p>
      </div>

      {/* Invito allo scorrimento */}
      <div
        data-hint
        data-fade
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
      >
        <span className="mb-3 block text-[0.62rem] uppercase tracking-[0.4em] text-mist">
          Scorri
        </span>
        <span className="mx-auto block h-12 w-px bg-gradient-to-b from-gold/70 to-transparent" />
      </div>
    </section>
  );
}
