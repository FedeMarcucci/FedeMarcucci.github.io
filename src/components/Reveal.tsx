"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, EASE, prefersReducedMotion } from "@/lib/gsap";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Ritardo in secondi */
  delay?: number;
  /** Spostamento verticale iniziale in px */
  y?: number;
  /** Durata */
  duration?: number;
  as?: React.ElementType;
};

/**
 * Rivela un blocco con un fade + risalita morbida quando entra nel viewport.
 * Usato per paragrafi, immagini, card.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 40,
  duration = 1.1,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: EASE,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={`reveal-init ${className}`}>
      {children}
    </Tag>
  );
}
