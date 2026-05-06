import { Star, Quote } from "lucide-react";

export interface ServiceTestimonial {
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  rating: number;
  quote: string;
}

interface ServiceTestimonialsProps {
  testimonials: ServiceTestimonial[];
  heading?: string;
}

const cardAccents = [
  { border: "border-l-indigo-400", star: "text-indigo-400 fill-indigo-400", quote: "text-indigo-200/30" },
  { border: "border-l-amazon-orange", star: "text-amazon-orange fill-amazon-orange", quote: "text-amazon-orange/20" },
  { border: "border-l-teal-400", star: "text-teal-400 fill-teal-400", quote: "text-teal-200/30" },
];

export default function ServiceTestimonials({
  testimonials,
  heading = "What Our Authors Say",
}: ServiceTestimonialsProps) {
  return (
    <section className="py-10 md:py-15 bg-gradient-to-br from-amazon-dark via-slate-800 to-amazon-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #FF9900 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-9">
          <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => {
            const c = cardAccents[i % cardAccents.length];
            return (
              <div
                key={t.name}
                className={`bg-white/5 border border-white/10 border-l-4 hover:bg-white/10 rounded-2xl p-6 flex flex-col gap-4 transition-all hover:shadow-xl ${c.border}`}
              >
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className={c.star} />
                  ))}
                </div>
                <Quote size={26} className={c.quote} />
                <p className="text-white/70 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <div className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
