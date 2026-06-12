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

const pointColors = [
  { wrap: "bg-indigo-50 border-indigo-200", icon: "text-indigo-500", hover: "group-hover:bg-indigo-500 group-hover:border-indigo-400 group-hover:text-white" },
  { wrap: "bg-teal-50 border-teal-200", icon: "text-teal-500", hover: "group-hover:bg-teal-500 group-hover:border-teal-400 group-hover:text-white" },
  { wrap: "bg-orange-50 border-orange-200", icon: "text-amazon-orange", hover: "group-hover:bg-amazon-orange group-hover:border-amazon-orange group-hover:text-white" },
  { wrap: "bg-rose-50 border-rose-200", icon: "text-rose-500", hover: "group-hover:bg-rose-500 group-hover:border-rose-400 group-hover:text-white" },
  { wrap: "bg-purple-50 border-purple-200", icon: "text-purple-500", hover: "group-hover:bg-purple-500 group-hover:border-purple-400 group-hover:text-white" },
  { wrap: "bg-emerald-50 border-emerald-200", icon: "text-emerald-500", hover: "group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:text-white" },
];

const statColors = [
  "bg-indigo-50 border-indigo-100 text-indigo-600",
  "bg-teal-50 border-teal-100 text-teal-600",
  "bg-orange-50 border-orange-100 text-amazon-orange",
  "bg-purple-50 border-purple-100 text-purple-600",
];

export default function ServiceWhyUs({
  points,
  heading = "Why Choose",
  highlight = "Kindle Publisher House?",
  body = "We don't just deliver a service — we become your publishing partner, invested in your success from day one.",
}: ServiceWhyUsProps) {
  return (
    <section className="py-10 md:py-15 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — sticky white panel */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[#b45309] text-xs font-semibold uppercase tracking-widest mb-3">
              Why Us
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#131a22] leading-tight tracking-tight mb-4">
              {heading}{" "}
              <span className="text-[#f59e0b]">{highlight}</span>
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
              ].map((s, i) => (
                <div
                  key={s.l}
                  className={`rounded-xl p-4 border ${statColors[i % statColors.length]}`}
                >
                  <p className="font-extrabold text-xl leading-none">{s.v}</p>
                  <p className="text-xs mt-1 opacity-70">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — points on white bg */}
          <div className="space-y-4">
            {points.map((p, i) => {
              const Icon = p.icon;
              const c = pointColors[i % pointColors.length];
              return (
                <div
                  key={p.title}
                  className="flex gap-4 p-5 rounded-2xl border border-border hover:shadow-md transition-all group bg-white"
                >
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all ${c.wrap} ${c.hover}`}>
                    <Icon size={19} className={`transition-colors ${c.icon} group-hover:text-white`} />
                  </div>
                  <div>
                    <h3 className="text-amazon-dark font-bold text-sm mb-1">{p.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
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
