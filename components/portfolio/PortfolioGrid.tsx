"use client";
import { useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import Image from "next/image";
import { books, bookFilters } from "@/data/books";

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? books : books.filter((b) => b.genre === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {bookFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`text-xs font-bold px-4 py-2 rounded-full transition-all ${
              active === f
                ? "bg-amazon-orange text-amazon-dark shadow-md shadow-amazon-orange/20"
                : "bg-amazon-surface border border-border text-amazon-dark hover:border-amazon-orange/40"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        {filtered.map((book) => (
          <a
            key={`${book.title}-${book.author}`}
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-xl overflow-hidden cursor-pointer block"
          >
            {/* Book cover */}
            <div className="relative aspect-2/3 bg-amazon-surface rounded-xl overflow-hidden">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />

              {/* Genre + year badges */}
              <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
                <span className="text-[9px] font-bold text-white uppercase tracking-widest bg-amazon-dark/70 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  {book.genre}
                </span>
                <span className="text-[9px] text-white/60 bg-amazon-dark/50 px-1.5 py-0.5 rounded-full">
                  {book.year}
                </span>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-amazon-dark/90 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-amazon-orange fill-amazon-orange" />
                ))}
              </div>
              <p className="text-white font-bold text-sm text-center leading-snug">{book.title}</p>
              <p className="text-amazon-orange font-bold text-sm">★ {book.rating} on Amazon</p>
              <p className="text-white/50 text-xs">{book.author}</p>
              <div className="flex items-center gap-1.5 text-white/70 text-xs font-semibold border border-white/20 px-3 py-1.5 rounded-full hover:border-amazon-orange hover:text-amazon-orange transition-colors mt-1">
                <ExternalLink size={10} /> View on Amazon
              </div>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground text-sm">
          No books found in this category yet.
        </div>
      )}
    </div>
  );
}
