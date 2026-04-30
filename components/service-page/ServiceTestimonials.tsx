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

export default function ServiceTestimonials({
  testimonials,
  heading = "What Our Authors Say",
}: ServiceTestimonialsProps) {
  return (
    <section className="py-10 md:py-15 bg-amazon-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-9">
          <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-amazon-navy/60 border border-white/5 hover:border-amazon-orange/20 rounded-2xl p-6 flex flex-col gap-4 transition-all hover:bg-amazon-navy"
            >
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-amazon-orange fill-amazon-orange"
                  />
                ))}
              </div>
              <Quote size={26} className="text-amazon-orange/20" />
              <p className="text-white/70 text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <div
                  className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
