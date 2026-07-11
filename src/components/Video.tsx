"use client";

import { useState } from "react";
import SplitLines from "@/components/SplitLines";
import Reveal from "@/components/Reveal";

type Clip = { id: string; titolo: string };

const video: Clip[] = [
  { id: "hATu8wDk0WU", titolo: "Hallelujah - Cohen" },
  { id: "F6M7C71i2Sg", titolo: "La Bella e la Bestia" },
  { id: "hbBZVuI5p3k", titolo: "Amazing Grace" },
  { id: "jII_N70qhTM", titolo: "Piazzolla - Invierno Porteño (finale)" },
  { id: "lldoV0D_tIQ", titolo: "Šostakovič - Trio n. 1" },
  { id: "OeQhzNNrM6E", titolo: "Piazzolla - Invierno Porteño" },
];

function VideoCard({ id, titolo }: Clip) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group relative aspect-video overflow-hidden rounded-sm border border-ivory/10 bg-ebony">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={titolo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Riproduci: ${titolo}`}
          className="absolute inset-0 h-full w-full cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt={titolo}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
            }}
            className="absolute inset-0 h-full w-full scale-[1.02] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
          />
          {/* Velatura per leggibilità e coerenza cromatica */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ebony/85 via-ebony/25 to-ebony/10 transition-opacity duration-500 group-hover:from-ebony/75" />

          {/* Pulsante play dorato */}
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-ebony/40 backdrop-blur-sm transition-all duration-500 group-hover:border-gold group-hover:bg-gold/15 md:h-[4.5rem] md:w-[4.5rem]">
            <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-gold-soft" />
          </span>

          {/* Titolo del brano */}
          <span className="absolute inset-x-0 bottom-0 p-6 text-left">
            <span className="font-display text-xl font-light text-ivory md:text-2xl">
              {titolo}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

export default function Video() {
  return (
    <section
      id="video"
      className="relative mx-auto max-w-7xl px-6 py-(--spacing-section) md:px-10"
    >
      <div className="mb-16 max-w-3xl md:mb-20">
        <Reveal as="p" className="overline mb-8">
          Ascolta un estratto
        </Reveal>
        <SplitLines
          as="h2"
          className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[1.05] text-ivory text-balance"
        >
          La nostra musica,
          <br />
          dal vivo.
        </SplitLines>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {video.map((v, i) => (
          <Reveal key={v.id} delay={(i % 3) * 0.08}>
            <VideoCard {...v} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
