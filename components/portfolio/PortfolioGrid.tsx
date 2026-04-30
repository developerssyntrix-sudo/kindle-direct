"use client";
import { useState } from "react";
import { Star, ExternalLink } from "lucide-react";

const books = [
  { title: "Echoes of Tomorrow", author: "Sarah M.", genre: "Sci-Fi", rating: "4.8", color: "from-indigo-900 to-purple-900", accent: "bg-purple-400", year: "2024" },
  { title: "The Last Harbor", author: "James K.", genre: "Thriller", rating: "4.9", color: "from-slate-900 to-zinc-800", accent: "bg-red-400", year: "2024" },
  { title: "Bloom & Ashes", author: "Priya R.", genre: "Romance", rating: "4.7", color: "from-rose-900 to-pink-800", accent: "bg-rose-300", year: "2023" },
  { title: "Zero to Seven Figures", author: "David L.", genre: "Business", rating: "5.0", color: "from-amber-900 to-yellow-800", accent: "bg-amber-400", year: "2024" },
  { title: "The Quiet Mind", author: "Aisha B.", genre: "Self-Help", rating: "4.9", color: "from-teal-900 to-emerald-800", accent: "bg-teal-400", year: "2023" },
  { title: "Storm & Stone", author: "Marcus T.", genre: "Fantasy", rating: "4.8", color: "from-blue-900 to-cyan-900", accent: "bg-cyan-400", year: "2024" },
  { title: "Between Two Worlds", author: "Lin C.", genre: "Literary Fiction", rating: "4.7", color: "from-orange-900 to-red-900", accent: "bg-orange-300", year: "2023" },
  { title: "The Founders Playbook", author: "Ryan O.", genre: "Business", rating: "4.9", color: "from-gray-900 to-gray-700", accent: "bg-green-400", year: "2024" },
  { title: "Still Water", author: "Mei L.", genre: "Poetry", rating: "4.8", color: "from-sky-900 to-blue-900", accent: "bg-sky-300", year: "2023" },
  { title: "The Dragon Who Couldn't Roar", author: "Rebecca O.", genre: "Children's", rating: "5.0", color: "from-lime-900 to-green-900", accent: "bg-lime-400", year: "2024" },
  { title: "Concrete & Grace", author: "Jordan E.", genre: "Poetry", rating: "4.7", color: "from-violet-900 to-purple-900", accent: "bg-violet-400", year: "2023" },
  { title: "The Healing Path", author: "Fatima A.", genre: "Self-Help", rating: "4.9", color: "from-emerald-900 to-teal-900", accent: "bg-emerald-400", year: "2024" },
  { title: "Ama and the Market Day", author: "Samuel O.", genre: "Children's", rating: "5.0", color: "from-yellow-900 to-amber-900", accent: "bg-yellow-400", year: "2023" },
  { title: "Built From Scratch", author: "Amara J.", genre: "Business", rating: "4.8", color: "from-zinc-900 to-slate-900", accent: "bg-orange-400", year: "2024" },
  { title: "The Crimson Cipher", author: "Nadia S.", genre: "Thriller", rating: "4.9", color: "from-red-900 to-rose-900", accent: "bg-red-300", year: "2024" },
  { title: "Starfall Chronicles", author: "Alex B.", genre: "Fantasy", rating: "4.8", color: "from-fuchsia-900 to-pink-900", accent: "bg-fuchsia-400", year: "2023" },
];

const filters = ["All", "Business", "Children's", "Fantasy", "Literary Fiction", "Poetry", "Romance", "Sci-Fi", "Self-Help", "Thriller"];

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? books : books.filter((b) => b.genre === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((book) => (
          <div key={book.title} className="group relative rounded-xl overflow-hidden cursor-pointer">
            <div className={`relative bg-gradient-to-br ${book.color} aspect-[2/3] flex flex-col justify-between p-4`}>
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${book.accent} opacity-80`} />
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest border border-white/15 px-2 py-0.5 rounded-full">
                  {book.genre}
                </span>
                <span className="text-[10px] text-white/30">{book.year}</span>
              </div>
              <div>
                <h3 className="text-white font-extrabold text-sm leading-snug mb-1">{book.title}</h3>
                <p className="text-white/50 text-xs">{book.author}</p>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-amazon-dark/92 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-amazon-orange fill-amazon-orange" />
                ))}
              </div>
              <p className="text-white font-bold text-sm text-center leading-snug">{book.title}</p>
              <p className="text-amazon-orange font-bold text-sm">★ {book.rating} on Amazon</p>
              <div className="flex items-center gap-1.5 text-white/70 text-xs font-semibold border border-white/20 px-3 py-1.5 rounded-full hover:border-amazon-orange hover:text-amazon-orange transition-colors">
                <ExternalLink size={10} /> View on Amazon
              </div>
            </div>
          </div>
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
