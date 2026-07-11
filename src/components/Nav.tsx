"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Il Trio", href: "#trio" },
  { label: "Repertorio", href: "#repertorio" },
  { label: "Galleria", href: "#galleria" },
  { label: "Cachet", href: "#prezzi" },
  { label: "Contatti", href: "#contatti" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu aperto: blocca lo scroll del body e chiudi con Esc.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled ? "bg-ebony/80 py-4 backdrop-blur-md" : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
          <a
            href="#top"
            className="font-display text-xl tracking-wide text-ivory transition-colors hover:text-gold-soft"
          >
            Trio&nbsp;<span className="italic text-gold-soft">Clelia</span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-fine text-[0.7rem] uppercase tracking-[0.28em] text-mist transition-colors hover:text-ivory"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA — solo desktop */}
          <a
            href="#contatti"
            className="hidden rounded-full border border-gold/40 px-5 py-2 text-[0.68rem] uppercase tracking-[0.24em] text-gold-soft transition-all duration-500 hover:border-gold hover:bg-gold hover:text-ebony md:inline-flex md:px-6"
          >
            Richiedi info
          </a>

          {/* Hamburger — solo mobile */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Apri il menu"
            aria-expanded={open}
            className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="flex flex-col items-end gap-[7px]">
              <span className="block h-px w-7 bg-ivory" />
              <span className="block h-px w-5 bg-ivory" />
            </span>
          </button>
        </div>
      </header>

      {/* Menu mobile a tutto schermo — entra da destra */}
      <div
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-[60] flex w-full flex-col bg-ebony transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Grana coerente col resto del sito */}
        <div className="flex items-center justify-between px-6 py-6">
          <span className="font-display text-xl tracking-wide text-ivory">
            Trio&nbsp;<span className="italic text-gold-soft">Clelia</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Chiudi il menu"
            className="relative flex h-10 w-10 items-center justify-center"
          >
            <span className="absolute h-px w-7 rotate-45 bg-ivory" />
            <span className="absolute h-px w-7 -rotate-45 bg-ivory" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-3 px-8">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${180 + i * 70}ms` : "0ms" }}
              className={`font-display text-4xl font-light text-ivory transition-all duration-500 ease-out ${
                open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="px-8 pb-14">
          <a
            href="#contatti"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-full border border-gold/40 px-6 py-4 text-[0.72rem] uppercase tracking-[0.26em] text-gold-soft transition-all duration-500 hover:border-gold hover:bg-gold hover:text-ebony"
          >
            Richiedi info
          </a>
        </div>
      </div>
    </>
  );
}
