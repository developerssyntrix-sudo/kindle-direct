import { Star, Quote } from "lucide-react";
import { OpenBookOutline } from "@/components/ui/book-arts";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Author, Echoes of Tomorrow",
    initials: "SM",
    rating: 5,
    color: "bg-purple-500",
    quote:
      "I had a story in my head for years but no idea how to turn it into a real book. Amazon Books Publishing took my rough notes and delivered a polished sci-fi novel that hit #1 in its category within two weeks of launch. Absolutely blown away.",
  },
  {
    name: "David Lekowitz",
    role: "Author, Zero to Seven Figures",
    initials: "DL",
    rating: 5,
    color: "bg-amber-500",
    quote:
      "As a business owner, I needed a book that actually reflected my expertise. The ghostwriting team nailed my voice on the first draft — and the Amazon Ads strategy they built drove 300+ sales in the first month. Worth every penny.",
  },
  {
    name: "Priya Rajan",
    role: "Author, Bloom & Ashes",
    initials: "PR",
    rating: 5,
    color: "bg-rose-500",
    quote:
      "The cover design alone was worth hiring them. My romance novel stands out on the shelf and the thumbnail converts like crazy. From manuscript to launch in just 8 weeks — and the team was responsive every single day.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-10 md:py-15 bg-amazon-dark relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Authors Who Took the{" "}
            <span className="text-amazon-orange">Leap</span>
          </h2>
          <p className="text-white/40 text-sm max-w-sm mx-auto">
            Real results from real authors — not cherry-picked outliers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-amazon-navy/60 border border-white/5 hover:border-amazon-orange/20 rounded-2xl p-6 flex flex-col gap-4 transition-all hover:bg-amazon-navy"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-amazon-orange fill-amazon-orange" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={28} className="text-amazon-orange/20" />

              {/* Quote text */}
              <p className="text-white/70 text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
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

        {/* Bottom stats */}
        <div className="mt-10 grid grid-cols-3 divide-x divide-white/10 bg-amazon-navy/40 rounded-2xl border border-white/5 overflow-hidden">
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "500+", label: "Verified Reviews" },
            { value: "97%", label: "Recommend Us" },
          ].map((s) => (
            <div key={s.label} className="py-5 text-center">
              <p className="text-amazon-orange font-extrabold text-2xl leading-none">{s.value}</p>
              <p className="text-white/40 text-xs mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
