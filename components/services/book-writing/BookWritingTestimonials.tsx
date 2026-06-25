const authors = [
  {
    name: "Laura Rocca",
    sub: "Italy | Romance",
    quote: "Becoming a kindle direct publishing house author allowed me to finally live my childhood dream. The writer captured my voice and helped me launch a polished romance novel in months.",
    avatar: "https://m.media-amazon.com/images/G/01/Kindle/dp/design/author/img_author_LauraRocca_v1.png",
    href: "https://www.amazon.com/Laura-Rocca/e/B00FU7NTEA",
  },
  {
    name: "Sundari Venkatraman",
    sub: "India | Romance",
    quote: "My memoir was in pieces until the ghostwriter organized my story and made it feel true. I now have a book I can proudly share.",
    avatar: "https://m.media-amazon.com/images/G/01/Kindle/dp/design/author/img_author_SundariVenkatraman_v1.png",
    href: "https://www.amazon.com/Sundari-Venkatraman/e/B00CSPVLFU",
  },
  {
    name: "Marah Woolf",
    sub: "Germany | Fantasy",
    quote: "I had no idea where to start. The team turned my idea into a real book and guided me all the way from outline to final manuscript.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    href: "/contact",
  },
];

export default function BookWritingTestimonials() {
  return (
    <section className="py-12 bg-[#f0f2f2]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-8">
          <p className="text-[#008296] text-xs font-semibold uppercase tracking-widest mb-2">Real author stories</p>
          <h2 className="text-2xl md:text-3xl font-serif text-[#131a22]">Authors who trusted us with their story</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {authors.map((author) => (
            <div key={author.name} className="bg-white border border-[#d5d9d9] rounded p-6">
              <div className="flex items-center gap-3 mb-4">
                <img src={author.avatar} alt={author.name} className="h-12 w-12 rounded-full object-cover border border-[#d5d9d9]" />
                <div>
                  <p className="text-[#131a22] font-semibold text-sm">{author.name}</p>
                  <p className="text-[#565959] text-xs">{author.sub}</p>
                </div>
              </div>
              <p className="text-[#565959] text-sm leading-relaxed italic mb-4">&ldquo;{author.quote}&rdquo;</p>
              <a href={author.href} className="text-[#008296] text-xs hover:underline" target="_blank" rel="noopener noreferrer">
                Visit {author.name}&apos;s author page →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
