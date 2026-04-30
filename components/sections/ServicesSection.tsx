import {
  PenLine,
  FileEdit,
  Layers,
  BookOpen,
  TrendingUp,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    num: "01",
    icon: PenLine,
    title: "Ghostwriting",
    desc: "Professional ghostwriters in every genre craft your story with your voice, vision, and tone — delivered chapter by chapter.",
    tags: ["Fiction", "Non-Fiction", "Memoir", "Business"],
  },
  {
    num: "02",
    icon: FileEdit,
    title: "Editing & Proofreading",
    desc: "From developmental edits to final proofread, our editors ensure your manuscript is polished, compelling, and error-free.",
    tags: ["Developmental", "Copy Editing", "Line Edit"],
  },
  {
    num: "03",
    icon: Layers,
    title: "Book Cover Design",
    desc: "Eye-catching, genre-appropriate covers that stop the scroll — designed to convert browsers into buyers on Amazon.",
    tags: ["eBook", "Paperback", "Hardcover"],
  },
  {
    num: "04",
    icon: BookOpen,
    title: "Publishing & Distribution",
    desc: "We handle KDP setup, metadata optimization, ISBN assignment, and distribution to 40+ global marketplaces.",
    tags: ["KDP", "IngramSpark", "Global"],
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Book Marketing",
    desc: "Amazon Ads, ARC campaigns, social media launch kits, and BookTok outreach strategies that drive real sales.",
    tags: ["Amazon Ads", "ARC", "Launch Strategy"],
  },
  {
    num: "06",
    icon: Headphones,
    title: "Audiobook Production",
    desc: "Studio-quality narration, ACX/Findaway distribution, and mastering that meets Audible's strict standards.",
    tags: ["ACX", "Findaway", "Narration"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-10 md:py-15 bg-amazon-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Publishing Services That
              <br />
              <span className="text-amazon-orange">Cover Every Step</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-sm leading-relaxed">
            A complete suite of publishing services so you never need to
            coordinate multiple vendors again.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="group relative bg-amazon-navy/50 hover:bg-amazon-navy border border-white/5 hover:border-amazon-orange/30 rounded-2xl p-6 transition-all duration-300 cursor-pointer"
              >
                {/* Number */}
                <span className="absolute top-5 right-5 text-5xl font-black text-white/5 group-hover:text-amazon-orange/10 transition-colors leading-none select-none">
                  {s.num}
                </span>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-amazon-orange/10 border border-amazon-orange/20 flex items-center justify-center mb-4 group-hover:bg-amazon-orange group-hover:border-amazon-orange transition-all">
                  <Icon
                    size={20}
                    className="text-amazon-orange group-hover:text-amazon-dark transition-colors"
                  />
                </div>

                <h3 className="text-white font-bold text-base mb-2 group-hover:text-amazon-orange transition-colors">
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold text-white/40 border border-white/10 px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-amazon-orange text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowUpRight size={13} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-white/40 text-sm mb-4">
            Need something custom? We build bespoke packages too.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-bold px-8 py-3 rounded text-sm transition-colors"
          >
            Get a Custom Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
