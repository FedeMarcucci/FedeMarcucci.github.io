"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Segnala che JS è attivo: sblocca gli stati "reveal-init" via CSS.
    document.documentElement.classList.add("js");

    // Gestione dei link interni (#sezione): scorrimento fluido con offset navbar.
    const NAV_OFFSET = -84;

    if (prefersReducedMotion()) {
      // Senza animazioni: salto immediato ma pur sempre gestito.
      const onClickReduced = (e: MouseEvent) => {
        const a = (e.target as HTMLElement).closest<HTMLAnchorElement>(
          'a[href^="#"]',
        );
        if (!a) return;
        const hash = a.getAttribute("href");
        if (!hash || hash === "#") return;
        e.preventDefault();
        const el =
          hash === "#top"
            ? document.body
            : document.getElementById(hash.slice(1));
        el?.scrollIntoView();
      };
      document.addEventListener("click", onClickReduced);
      return () => document.removeEventListener("click", onClickReduced);
    }

    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.09,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    // Espone l'istanza per eventuali usi futuri (debug, controlli, ecc.).
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    // Sincronizza Lenis con lo scrub di ScrollTrigger.
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Click sui link interni → scorrimento fluido.
    const onClick = (e: MouseEvent) => {
      // Ignora click con modificatori (apri in nuova scheda, ecc.).
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!a) return;
      const hash = a.getAttribute("href");
      if (!hash || hash === "#") return;
      e.preventDefault();

      if (hash === "#top") {
        lenis.scrollTo(0, { duration: 1.4 });
      } else {
        const el = document.getElementById(hash.slice(1));
        if (el) lenis.scrollTo(el, { offset: NAV_OFFSET, duration: 1.4 });
      }
      // Aggiorna l'URL senza far saltare la pagina.
      history.pushState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    // Aggiorna le misure dopo il primo layout completo.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 400);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.removeEventListener("load", refresh);
      clearTimeout(t);
    };
  }, []);

  return <>{children}</>;
}
