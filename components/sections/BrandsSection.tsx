"use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import amazonKdpLogo from "@/app/assets/svgs/brands/Amazon-KDP.svg";
import googleBooksLogo from "@/app/assets/svgs/brands/Google-Books.svg";
import ingramSparkLogo from "@/app/assets/svgs/brands/Ingram-Spark.webp";
import draft2digitalLogo from "@/app/assets/svgs/brands/Draft2Digital.svg";
import scribdLogo from "@/app/assets/svgs/brands/Scribd.svg";
import barnesNobleLogo from "@/app/assets/svgs/brands/Barnes&Noble.svg";
import appleBooksLogo from "@/app/assets/svgs/brands/Apple-Books.svg";
import luluPressLogo from "@/app/assets/svgs/brands/Lulu-Press.svg";
import koboLogo from "@/app/assets/svgs/brands/Kobo.svg";

const brands: { name: string; src: string }[] = [
  { name: "Amazon KDP",     src: amazonKdpLogo.src },
  { name: "Google Books",   src: googleBooksLogo.src },
  { name: "IngramSpark",    src: ingramSparkLogo.src },
  { name: "Draft2Digital",  src: draft2digitalLogo.src },
  { name: "Scribd",         src: scribdLogo.src },
  { name: "Barnes & Noble", src: barnesNobleLogo.src },
  { name: "Apple Books",    src: appleBooksLogo.src },
  { name: "Lulu Press",     src: luluPressLogo.src },
  { name: "Kobo",           src: koboLogo.src },
];

// Card geometry (must match the className values below)
const CARD_W    = 176; // w-44
const CARD_GAP  = 12;  // gap-3
const CARD_STEP = CARD_W + CARD_GAP; // 188 px per slot
const SPEED     = 0.8; // px per animation frame (~48 px/s at 60 fps)

// Scroll distance that equals exactly one full set of brands.
// Jumping by this amount is invisible because set 2 == set 1 == set 3.
const SINGLE_WIDTH = brands.length * CARD_STEP; // 9 × 188 = 1692 px

export default function BrandsSection() {
  const trackRef        = useRef<HTMLDivElement>(null);
  const rafRef          = useRef<number>(0);
  const hoverPausedRef  = useRef(false); // paused while the mouse is over the strip
  const manualPausedRef = useRef(false); // paused briefly after a button click

  // Triple the list so we always have a full set on each side of the visible area.
  const tripled = [...brands, ...brands, ...brands];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Start in the middle set so scrolling backward is immediately possible.
    el.scrollLeft = SINGLE_WIDTH;

    const tick = () => {
      if (el && !hoverPausedRef.current && !manualPausedRef.current) {
        el.scrollLeft += SPEED;

        // Seamlessly jump when we cross into the third set → back to second set.
        if (el.scrollLeft >= SINGLE_WIDTH * 2) el.scrollLeft -= SINGLE_WIDTH;

        // Seamlessly jump when we cross below the first set → back to second set.
        if (el.scrollLeft <= 0) el.scrollLeft += SINGLE_WIDTH;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;

    // Pause auto-scroll while the smooth scroll animation plays, then resume.
    manualPausedRef.current = true;
    el.scrollBy({ left: dir === "next" ? CARD_STEP : -CARD_STEP, behavior: "smooth" });
    setTimeout(() => { manualPausedRef.current = false; }, 1500);
  };

  return (
    <section
      className="py-4 md:py-6 bg-amazon-surface border-y border-border"
      onMouseEnter={() => { hoverPausedRef.current = true; }}
      onMouseLeave={() => { hoverPausedRef.current = false; }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Label */}
        <p className="text-center text-muted-foreground text-[10px] font-bold uppercase tracking-[0.18em] mb-4">
          Distributed Across Leading Platforms
        </p>

        {/* Carousel row */}
        <div className="flex items-center gap-3">
          {/* Prev */}
          <button
            onClick={() => scroll("prev")}
            aria-label="Scroll left"
            className="flex-shrink-0 w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center text-muted-foreground hover:text-amazon-dark hover:border-amazon-orange/50 hover:shadow-sm transition-all"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Scrollable track — edge fade via CSS mask so no overflow-hidden wrapper needed */}
          <div
            ref={trackRef}
            className="flex-1 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: "none",
              maskImage:
                "linear-gradient(to right, transparent, black 48px, black calc(100% - 48px), transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 48px, black calc(100% - 48px), transparent)",
            }}
          >
            {tripled.map((b, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center px-5 rounded-md bg-white border border-border hover:border-amazon-orange/30 hover:shadow-md transition-all h-24 w-44"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={b.src}
                  alt={b.name}
                  className="h-20 w-auto max-w-[140px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => scroll("next")}
            aria-label="Scroll right"
            className="flex-shrink-0 w-9 h-9 rounded-full border border-border bg-white flex items-center justify-center text-muted-foreground hover:text-amazon-dark hover:border-amazon-orange/50 hover:shadow-sm transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
