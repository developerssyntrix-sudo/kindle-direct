import { Star, ExternalLink } from "lucide-react";

const books = [
  {
    title: "Echoes of Tomorrow",
    author: "Sarah M.",
    genre: "Sci-Fi",
    rating: "4.8",
    color: "from-indigo-900 to-purple-900",
    accent: "bg-purple-400",
  },
  {
    title: "The Last Harbor",
    author: "James K.",
    genre: "Thriller",
    rating: "4.9",
    color: "from-slate-900 to-zinc-800",
    accent: "bg-red-400",
  },
  {
    title: "Bloom & Ashes",
    author: "Priya R.",
    genre: "Romance",
    rating: "4.7",
    color: "from-rose-900 to-pink-800",
    accent: "bg-rose-300",
  },
  {
    title: "Zero to Seven Figures",
    author: "David L.",
    genre: "Business",
    rating: "5.0",
    color: "from-amber-900 to-yellow-800",
    accent: "bg-amber-400",
  },
  {
    title: "The Quiet Mind",
    author: "Aisha B.",
    genre: "Self-Help",
    rating: "4.9",
    color: "from-teal-900 to-emerald-800",
    accent: "bg-teal-400",
  },
  {
    title: "Storm & Stone",
    author: "Marcus T.",
    genre: "Fantasy",
    rating: "4.8",
    color: "from-blue-900 to-cyan-900",
    accent: "bg-cyan-400",
  },
  {
    title: "Between Two Worlds",
    author: "Lin C.",
    genre: "Literary",
    rating: "4.7",
    color: "from-orange-900 to-red-900",
    accent: "bg-orange-300",
  },
  {
    title: "The Founders Playbook",
    author: "Ryan O.",
    genre: "Entrepreneurship",
    rating: "4.9",
    color: "from-gray-900 to-gray-700",
    accent: "bg-green-400",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-10 md:py-15 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-amazon-dark tracking-tight mb-3">
            Published &{" "}
            <span className="text-amazon-orange">Bestselling Titles</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            A glimpse at the books we've brought to market — across every genre,
            every platform.
          </p>
        </div>

        {/* Book grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <div
              key={book.title}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Book cover */}
              <div
                className={`relative bg-gradient-to-br ${book.color} aspect-[2/3] flex flex-col justify-between p-4`}
              >
                {/* Accent stripe */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 ${book.accent} opacity-80`}
                />

                {/* Genre badge */}
                <span className="self-start text-[10px] font-bold text-white/50 uppercase tracking-widest border border-white/15 px-2 py-0.5 rounded-full">
                  {book.genre}
                </span>

                {/* Title */}
                <div>
                  <h3 className="text-white font-extrabold text-sm leading-snug mb-1">
                    {book.title}
                  </h3>
                  <p className="text-white/50 text-xs">{book.author}</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-amazon-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="text-amazon-orange fill-amazon-orange"
                    />
                  ))}
                </div>
                <p className="text-white font-bold text-sm text-center leading-tight">
                  {book.title}
                </p>
                <p className="text-amazon-orange font-bold text-sm">
                  ★ {book.rating} on Amazon
                </p>
                <div className="flex items-center gap-1.5 text-white/70 text-xs font-semibold border border-white/20 px-3 py-1.5 rounded-full hover:border-amazon-orange hover:text-amazon-orange transition-colors">
                  <ExternalLink size={11} /> View on Amazon
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-amazon-dark text-amazon-dark hover:bg-amazon-dark hover:text-white font-bold px-7 py-3 rounded text-sm transition-colors"
          >
            See Full Portfolio →
          </a>
        </div>
      </div>
    </section>
  );
}
