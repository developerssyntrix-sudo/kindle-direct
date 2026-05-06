"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import {
  PenLine,
  FileEdit,
  AlignJustify,
  TrendingUp,
  Palette,
  Film,
  Globe,
  Headphones,
  ShieldCheck,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    num: "01",
    icon: PenLine,
    title: "Ghostwriting",
    desc: "Professional ghostwriters craft your book in your voice — fiction, non-fiction, memoir, or business. You get full credit and 100% of the rights.",
    tags: ["Fiction", "Non-Fiction", "Memoir", "Business"],
    href: "/services/book-writing",
  },
  {
    num: "02",
    icon: FileEdit,
    title: "Book Editing",
    desc: "From developmental editing to line-by-line copy edits and final proofreading, our editors make your manuscript polished and publish-ready.",
    tags: ["Developmental", "Copy Editing", "Proofreading"],
    href: "/services/book-editing-proofreading",
  },
  {
    num: "03",
    icon: AlignJustify,
    title: "Book Formatting",
    desc: "Interior layout designed for KDP, IngramSpark, and Lulu — eBook (EPUB/MOBI) and print-ready PDF. Every genre, every trim size.",
    tags: ["Print Layout", "eBook", "KDP-Ready"],
    href: "/services/book-publishing",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Book Marketing",
    desc: "Amazon Ads, ARC campaigns, BookTok outreach, and launch-day strategy that drive real rankings and sustained sales velocity.",
    tags: ["Amazon Ads", "ARC", "Launch Strategy"],
    href: "/services/book-marketing",
  },
  {
    num: "05",
    icon: Palette,
    title: "Book Cover Design",
    desc: "Eye-catching, genre-appropriate covers built to stop the scroll. Delivered in all formats — eBook, paperback, and hardcover.",
    tags: ["eBook Cover", "Paperback", "Hardcover"],
    href: "/services/book-publishing",
  },
  {
    num: "06",
    icon: Film,
    title: "Video Trailer",
    desc: "Cinematic book trailers produced for Amazon, YouTube, and social media — built to tease your story and drive pre-orders.",
    tags: ["Cinematic", "Social Media", "YouTube"],
    href: "/services/book-trailer",
  },
  {
    num: "07",
    icon: Globe,
    title: "Author Website",
    desc: "Custom-designed author websites with press kits, lead-capture pages, and online stores — your professional home on the web.",
    tags: ["Custom Design", "Lead Capture", "Store"],
    href: "/contact",
  },
  {
    num: "08",
    icon: Headphones,
    title: "Audio Book",
    desc: "Studio-quality narration, professional mastering, and distribution to Audible, ACX, Findaway, and 40+ listening platforms.",
    tags: ["ACX", "Findaway", "Audible"],
    href: "/services/book-trailer",
  },
  {
    num: "09",
    icon: ShieldCheck,
    title: "Copyright Registration",
    desc: "We handle US Copyright Office registration on your behalf — protecting your intellectual property before your book goes live.",
    tags: ["US Copyright", "IP Protection", "Official Filing"],
    href: "/contact",
  },
];

// gap-5 = 20px
const CARD_GAP = 20;

export default function ServicesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const amount = firstCard ? firstCard.offsetWidth + CARD_GAP : 340;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-amazon-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-amazon-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* ── Header row ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-amazon-orange text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-6 h-px bg-amazon-orange" />
              What We Do
              <span className="w-6 h-px bg-amazon-orange" />
            </span>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Our Publishing Services
              <br />
              <span className="text-amazon-orange">Cover Every Step</span>
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-3 sm:flex-shrink-0">
            <button
              onClick={() => scroll("prev")}
              disabled={!canPrev}
              aria-label="Previous services"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-amazon-orange hover:bg-amazon-orange/10 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("next")}
              disabled={!canNext}
              aria-label="Next services"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-amazon-orange hover:bg-amazon-orange/10 disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── Carousel track ── */}
        <div
          ref={trackRef}
          onScroll={updateArrows}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden pb-3"
          style={{ scrollbarWidth: "none" }}
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.num}
                href={s.href}
                className="group relative snap-start flex-shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc((100%-40px)/3)] bg-white border border-gray-200 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-xl hover:border-amazon-orange/40 transition-all duration-300"
              >
                {/* Orange top-edge accent line */}
                <span className="absolute top-0 left-8 right-8 h-[3px] bg-amazon-orange rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Watermark number */}
                <span className="absolute top-4 right-5 text-6xl font-black text-amazon-orange/[0.07] leading-none select-none group-hover:text-amazon-orange/15 transition-colors duration-300">
                  {s.num}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-amazon-orange/10 border border-amazon-orange/25 flex items-center justify-center mb-5 flex-shrink-0 group-hover:bg-amazon-orange group-hover:border-amazon-orange transition-all duration-300">
                  <Icon
                    size={20}
                    className="text-amazon-orange group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-amazon-dark font-bold text-base mb-2 group-hover:text-amazon-orange transition-colors duration-200">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold text-amazon-orange border border-amazon-orange/30 bg-amazon-orange/5 px-2.5 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Learn more */}
                <div className="flex items-center gap-1.5 text-amazon-orange text-xs font-bold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                  Learn More <ArrowUpRight size={13} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/8 pt-10">
          <p className="text-white/35 text-sm text-center sm:text-left">
            Not sure which service you need? Our publishing consultants will map the right path for your book.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-bold px-8 py-3 rounded text-sm transition-colors whitespace-nowrap flex-shrink-0"
          >
            Get a Free Consultation →
          </Link>
        </div>
      </div>
    </section>
  );
}
