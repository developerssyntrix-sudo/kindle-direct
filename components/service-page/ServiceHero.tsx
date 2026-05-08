import { ArrowRight, Star, ChevronRight } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface ServiceHeroProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  stats: Stat[];
  serviceName: string;
  bgImage?: string;
}

export default function ServiceHero({
  badge,
  title,
  highlight,
  description,
  stats,
  serviceName,
  bgImage,
}: ServiceHeroProps) {
  return (
    <section className="bg-amazon-dark py-10 md:py-15 relative overflow-hidden">
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
      )}
      <div className="absolute inset-0 bg-amazon-dark/80 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #FF9900 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amazon-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amazon-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-white/30 mb-7">
          <a href="/" className="hover:text-white/60 transition-colors">Home</a>
          <ChevronRight size={12} />
          <a href="/#services" className="hover:text-white/60 transition-colors">Services</a>
          <ChevronRight size={12} />
          <span className="text-amazon-orange font-medium">{serviceName}</span>
        </nav>

        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 bg-amazon-orange/10 border border-amazon-orange/20 text-amazon-orange text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            <Star size={11} fill="currentColor" />
            {badge}
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-5">
            {title}{" "}
            <span className="text-amazon-orange">{highlight}</span>
          </h1>

          <p className="text-white/55 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            {description}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-bold px-6 py-3 rounded text-sm transition-colors shadow-lg shadow-amazon-orange/20 outline outline-2 outline-offset-2 outline-amazon-orange/60"
            >
              Get Free Consultation <ArrowRight size={15} />
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 border-2 border-white/20 text-white hover:border-amazon-orange hover:text-amazon-orange font-bold px-6 py-3 rounded text-sm transition-colors"
            >
              View Packages
            </a>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-7 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-amazon-orange font-extrabold text-2xl leading-none">
                  {s.value}
                </p>
                <p className="text-white/35 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
