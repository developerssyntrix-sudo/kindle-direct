"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { books } from "@/data/books";

// ── Arch geometry ──────────────────────────────────────────────────────────
//
//  We place an imaginary circle whose centre is far below the visible section.
//  Only the top arc of that circle is visible, giving the rainbow / arch shape.
//
//  Circle centre: (cx, CIRCLE_CY)   — cx is computed live from container width
//
//  For a card at horizontal distance dx from cx:
//    angle = asin(dx / RADIUS)          — angle from the upward vertical
//    screenY = CIRCLE_CY - RADIUS * cos(angle)   — y of card centre
//    rotation = angle (rad → deg)       — card tilts to follow the arc tangent
//
const CARD_W = 200;                          // card width  px
const CARD_H = 300;                        // card height px  (≈ 2:3 portrait)
const CARD_GAP = 50;                          // horizontal gap between cards
const CARD_STEP = CARD_W + CARD_GAP;           // 136 px per slot

const RADIUS = 1400;                        // large radius → gentle, shallow arch
const PEAK_TOP = 20;                          // y (from container top) of the arch-peak card's top edge
const CIRCLE_CY = PEAK_TOP + CARD_H / 2 + RADIUS;  // y of circle centre from container top

const CONTAINER_H = 350;                       // container height px (compact)
const FADE_W = 180;                         // fade zone at each horizontal edge
const SPEED = 1;                         // px per RAF frame  (~48 px/s @ 60 fps)

export default function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);

  // Triple the list so there is always a full set on each side for seamless looping
  const tripled = [...books, ...books, ...books];
  const singleWidth = books.length * CARD_STEP;

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const cards = Array.from(track.children) as HTMLElement[];

    const update = () => {
      const W = container.offsetWidth;
      const cx = W / 2;

      cards.forEach((card, i) => {
        // Horizontal distance of this card's centre from the section centre
        // Middle set (indices books.length … 2*books.length-1) starts centred
        const dx = (i - books.length) * CARD_STEP + offsetRef.current;

        // Cards outside the circle radius have no valid arc position — hide them
        if (Math.abs(dx) >= RADIUS) {
          card.style.opacity = "0";
          return;
        }

        // ── Arc maths ──────────────────────────────────────────────────────
        const angle = Math.asin(dx / RADIUS);          // radians from vertical
        const angleDeg = angle * (180 / Math.PI);

        // Screen-space position of the card's centre
        const cardCY = CIRCLE_CY - RADIUS * Math.cos(angle);
        const left = cx + dx - CARD_W / 2;
        const top = cardCY - CARD_H / 2;

        // Single transform: translate to arc position + rotate to follow tangent
        card.style.transform = `translate(${left}px, ${top}px) rotate(${angleDeg}deg)`;

        // ── Edge fade ──────────────────────────────────────────────────────
        const cardScreenCX = left + CARD_W / 2;
        const fade = Math.min(
          1,
          Math.min(cardScreenCX / FADE_W, (W - cardScreenCX) / FADE_W)
        );
        card.style.opacity = String(Math.max(0, fade));
      });
    };

    const tick = () => {
      if (!pausedRef.current) {
        offsetRef.current += SPEED;
        // Seamless reset: when we've scrolled exactly one set worth, the visuals are identical
        if (offsetRef.current >= singleWidth) offsetRef.current -= singleWidth;
      }
      update();
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [singleWidth]);

  return (
    <section
      id="portfolio"
      className="pt-10 bg-white"
    >
      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
          Our Work
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-amazon-dark tracking-tight mb-3">
          Published &amp;{" "}
          <span className="text-amazon-orange">Bestselling Titles</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          A glimpse at the books we&apos;ve brought to market — across every genre,
          every platform.
        </p>
      </div>

      {/* ── Arc stage ── */}

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ height: CONTAINER_H }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {/* Soft edge fades so cards dissolve cleanly */}
        <div className="absolute left-0 inset-y-0 w-40 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-40 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* All cards sit at top-left (0,0); their transform moves them onto the arch */}
        <div ref={trackRef} className="absolute inset-0">
          {tripled.map((book, i) => (
            <a
              key={i}
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`${book.title} — ${book.author}  ★ ${book.rating}`}
              className="absolute top-0 left-0 group"
              style={{ width: CARD_W, height: CARD_H, willChange: "transform, opacity" }}
            >
              {/*
                Inner div handles CSS hover effects (scale, shadow, ring).
                Keeping them on a child means the RAF transform on the parent
                is never overwritten by CSS hover transforms.
              */}
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg
                              transition-all duration-300
                              group-hover:scale-110 group-hover:shadow-2xl
                              group-hover:ring-2 group-hover:ring-amazon-orange group-hover:ring-offset-2">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
                {/* Hover info strip */}
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-amazon-dark/90 to-transparent
                                pt-6 pb-2 px-2
                                opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <p className="text-white text-[9px] font-bold leading-tight truncate">{book.title}</p>
                  <p className="text-amazon-orange text-[8px] font-semibold mt-0.5">★ {book.rating}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
