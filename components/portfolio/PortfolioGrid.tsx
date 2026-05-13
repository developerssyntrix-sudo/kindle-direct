"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { books, bookFilters } from "@/data/books";

export default function PortfolioGrid() {
  const searchParams = useSearchParams();
  const sectionRef = useRef<HTMLDivElement>(null);

  const initialGenre = (() => {
    const g = searchParams.get("genre") ?? "All";
    return bookFilters.includes(g) ? g : "All";
  })();

  const [active, setActive] = useState(initialGenre);

  useEffect(() => {
    const g = searchParams.get("genre");
    if (g && bookFilters.includes(g)) {
      setActive(g);
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [searchParams]);

  const filtered = active === "All" ? books : books.filter((b) => b.genre === active);

  return (
    <div ref={sectionRef}>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {bookFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`text-xs px-4 py-1.5 rounded border transition-colors ${
              active === f
                ? "bg-[#008296] text-white border-[#008296]"
                : "bg-white text-[#131a22] border-[#d5d9d9] hover:border-[#008296] hover:text-[#008296]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filtered.map((book) => (
          <a
            key={`${book.title}-${book.author}`}
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            {/* Cover */}
            <div className="relative aspect-2/3 bg-[#f0f2f2] overflow-hidden mb-2 shadow-sm group-hover:shadow-md transition-shadow">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
              />
            </div>

            {/* Meta */}
            <p className="text-[#131a22] text-xs font-semibold leading-snug line-clamp-2 group-hover:text-[#008296] transition-colors">
              {book.title}
            </p>
            <p className="text-[#565959] text-[11px] mt-0.5">{book.author}</p>
            <p className="text-[#c45500] text-[11px] font-medium mt-0.5">★ {book.rating}</p>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-[#565959] text-sm">
          No books found in this category yet.
        </div>
      )}
    </div>
  );
}
