"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, EASE, prefersReducedMotion } from "@/lib/gsap";

type SplitLinesProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  /** Ritardo di partenza */
  delay?: number;
  /** Sfalsamento tra le righe */
  stagger?: number;
  /** "top 85%" di default: quando far partire l'animazione */
  start?: string;
};

/**
 * Rivela un titolo riga per riga: ogni riga sale da dentro una maschera.
 * L'effetto "editoriale" tipico dei siti di alta gamma.
 */
export default function SplitLines({
  children,
  className = "",
  as: Tag = "h2",
  delay = 0,
  stagger = 0.12,
  start = "top 85%",
}: SplitLinesProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) {
        gsap.set(el, { autoAlpha: 1 });
        return;
      }

      const split = new SplitText(el, {
        type: "lines",
        linesClass: "split-line",
        mask: "lines",
      });

      gsap.set(el, { autoAlpha: 1 });
      gsap.from(split.lines, {
        yPercent: 120,
        duration: 1.15,
        ease: EASE,
        stagger,
        delay,
        scrollTrigger: {
          trigger: el,
          start,
        },
      });

      return () => split.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={`reveal-init ${className}`}>
      {children}
    </Tag>
  );
}
