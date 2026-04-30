import { Star, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const books = [
  {
    title: "Rites of the Starling",
    author: "Devney Perry",
    genre: "Fantasy",
    rating: "4.5",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1762603861i/241058997.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FQ6HYW9Z",
  },
  {
    title: "Shadowborne: Reckoning",
    author: "Aimee Lynn",
    genre: "Fantasy",
    rating: "4.5",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1772768275i/249347846.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0GRF8DTDN",
  },
  {
    title: "The Price of Honey",
    author: "Liane Moriarty",
    genre: "Fiction",
    rating: "3.5",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1770321051i/247357777.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0FXBCK15V",
  },
  {
    title: "Knowing",
    author: "Touré Roberts",
    genre: "Self-Help",
    rating: "5.0",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1750947735i/237353655.jpg",
    amazonUrl: "https://www.amazon.com/dp/0310371120",
  },
  {
    title: "This Vast Enterprise",
    author: "Craig Fehrman",
    genre: "Non-Fiction",
    rating: "4.6",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1749394055i/235992948.jpg",
    amazonUrl: "https://www.amazon.com/dp/1982174242",
  },
  {
    title: "The Hybrid Prince",
    author: "Tui T. Sutherland",
    genre: "Children's",
    rating: "4.5",
    cover: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1746381007i/232700898.jpg",
    amazonUrl: "https://www.amazon.com/dp/1546129545",
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
            Published &amp;{" "}
            <span className="text-amazon-orange">Bestselling Titles</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            A glimpse at the books we&apos;ve brought to market — across every genre,
            every platform.
          </p>
        </div>

        {/* Book grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {books.map((book) => (
            <a
              key={book.title}
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

                {/* Genre badge */}
                <span className="absolute top-2 left-2 text-[9px] font-bold text-white uppercase tracking-widest bg-amazon-dark/70 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  {book.genre}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-amazon-dark/88 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="text-amazon-orange fill-amazon-orange" />
                  ))}
                </div>
                <p className="text-white font-bold text-xs text-center leading-snug">{book.title}</p>
                <p className="text-amazon-orange font-bold text-xs">★ {book.rating}</p>
                <p className="text-white/50 text-[10px]">{book.author}</p>
                <div className="flex items-center gap-1 text-white/60 text-[10px] font-semibold border border-white/20 px-2 py-1 rounded-full mt-1 hover:border-amazon-orange hover:text-amazon-orange transition-colors">
                  <ExternalLink size={9} /> View on Amazon
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border-2 border-amazon-dark text-amazon-dark hover:bg-amazon-dark hover:text-white font-bold px-7 py-3 rounded text-sm transition-colors"
          >
            See Full Portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}
