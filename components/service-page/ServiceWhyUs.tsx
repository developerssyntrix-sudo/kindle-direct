import type React from "react";

type IconType = React.ComponentType<{ size?: number; className?: string }>;

export interface WhyUsPoint {
  icon: IconType;
  title: string;
  desc: string;
}

interface ServiceWhyUsProps {
  points: WhyUsPoint[];
  heading?: string;
  highlight?: string;
  body?: string;
}

export default function ServiceWhyUs({
  points,
  heading = "Why Choose",
  highlight = "Amazon Books Publishing?",
  body = "We don't just deliver a service — we become your publishing partner, invested in your success from day one.",
}: ServiceWhyUsProps) {
  return (
    <section className="py-10 md:py-15 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — copy */}
          <div className="lg:sticky lg:top-24">
            <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-3">
              Why Us
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-amazon-dark leading-tight tracking-tight mb-4">
              {heading}{" "}
              <span className="text-amazon-orange">{highlight}</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              {body}
            </p>

            {/* Trust strip */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "2,500+", l: "Books Published" },
                { v: "98%", l: "Satisfaction Rate" },
                { v: "50+", l: "Genre Experts" },
                { v: "10+", l: "Years Experience" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="bg-amazon-surface rounded-xl p-4 border border-border"
                >
                  <p className="text-amazon-dark font-extrabold text-xl leading-none">
                    {s.v}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — points */}
          <div className="space-y-4">
            {points.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="flex gap-4 p-5 rounded-2xl border border-border hover:border-amazon-orange/30 hover:shadow-sm transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-amazon-orange/10 border border-amazon-orange/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amazon-orange group-hover:border-amazon-orange transition-all">
                    <Icon
                      size={19}
                      className="text-amazon-orange group-hover:text-amazon-dark transition-colors"
                    />
                  </div>
                  <div>
                    <h3 className="text-amazon-dark font-bold text-sm mb-1">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
