const brands = [
  { name: "Amazon KDP", abbr: "KDP" },
  { name: "Google Books", abbr: "Google" },
  { name: "IngramSpark", abbr: "Ingram" },
  { name: "Draft2Digital", abbr: "D2D" },
  { name: "Apple Books", abbr: "Apple" },
  { name: "Scribd", abbr: "Scribd" },
  { name: "Barnes & Noble", abbr: "B&N" },
  { name: "Lulu Press", abbr: "Lulu" },
  { name: "Kobo", abbr: "Kobo" },
  { name: "Smashwords", abbr: "Smash" },
];

function BrandLogo({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2.5 px-7 py-3 mx-2 rounded-lg bg-white border border-border hover:border-amazon-orange/30 hover:shadow-sm transition-all group">
      <div className="w-7 h-7 rounded bg-amazon-dark flex items-center justify-center flex-shrink-0 group-hover:bg-amazon-orange transition-colors">
        <span className="text-[9px] font-black text-white group-hover:text-amazon-dark transition-colors leading-none">
          {abbr.slice(0, 2)}
        </span>
      </div>
      <span className="text-amazon-dark/70 font-semibold text-sm whitespace-nowrap group-hover:text-amazon-dark transition-colors">
        {name}
      </span>
    </div>
  );
}

export default function BrandsSection() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-8 md:py-10 bg-amazon-surface border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-5 text-center">
        <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
          Trusted & Distributed Across Leading Publishing Platforms
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        {/* Fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-amazon-surface to-transparent z-10 pointer-events-none" />
        {/* Fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-amazon-surface to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {doubled.map((b, i) => (
            <BrandLogo key={`${b.abbr}-${i}`} name={b.name} abbr={b.abbr} />
          ))}
        </div>
      </div>
    </section>
  );
}
