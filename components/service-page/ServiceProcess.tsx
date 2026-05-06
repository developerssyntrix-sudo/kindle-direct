import type React from "react";

type IconType = React.ComponentType<{ size?: number; className?: string }>;

export interface ProcessStep {
  num: string;
  icon: IconType;
  title: string;
  desc: string;
}

interface ServiceProcessProps {
  steps: ProcessStep[];
  heading?: string;
  subheading?: string;
}

const stepColors = [
  { ring: "border-indigo-400 shadow-indigo-200", icon: "text-indigo-500", num: "bg-indigo-500", badge: "text-indigo-100" },
  { ring: "border-teal-400 shadow-teal-200", icon: "text-teal-500", num: "bg-teal-500", badge: "text-teal-100" },
  { ring: "border-amazon-orange shadow-orange-200", icon: "text-amazon-orange", num: "bg-amazon-orange", badge: "text-orange-100" },
  { ring: "border-rose-400 shadow-rose-200", icon: "text-rose-500", num: "bg-rose-500", badge: "text-rose-100" },
  { ring: "border-purple-400 shadow-purple-200", icon: "text-purple-500", num: "bg-purple-500", badge: "text-purple-100" },
];

const cardAccents = [
  "border-t-indigo-400",
  "border-t-teal-400",
  "border-t-amazon-orange",
  "border-t-rose-400",
  "border-t-purple-400",
];

export default function ServiceProcess({
  steps,
  heading = "How We Do It",
  subheading = "A transparent, step-by-step process that keeps you informed every mile.",
}: ServiceProcessProps) {
  return (
    <section className="py-10 md:py-15 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 relative overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-amazon-dark tracking-tight mb-3">
            {heading}
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            {subheading}
          </p>
        </div>

        <div className="relative">
          {/* connector line desktop */}
          <div className="hidden lg:block absolute top-[3rem] left-[12%] right-[12%] h-px bg-gradient-to-r from-indigo-300 via-amazon-orange/50 to-purple-300" />

          <div
            className={`grid gap-6 ${
              steps.length === 4
                ? "sm:grid-cols-2 lg:grid-cols-4"
                : steps.length === 5
                ? "sm:grid-cols-2 lg:grid-cols-5"
                : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              const c = stepColors[i % stepColors.length];
              const accent = cardAccents[i % cardAccents.length];
              return (
                <div key={step.num} className="flex flex-col items-center text-center">
                  {/* Circle */}
                  <div className={`relative z-10 w-14 h-14 rounded-full bg-white border-2 shadow-md flex items-center justify-center mb-5 ${c.ring}`}>
                    <Icon size={22} className={c.icon} />
                    <span className={`absolute -top-2 -right-2 w-5 h-5 rounded-full text-[9px] font-black text-white flex items-center justify-center ${c.num}`}>
                      {i + 1}
                    </span>
                  </div>

                  <div className={`bg-white rounded-2xl p-5 border-t-2 border border-border w-full shadow-sm hover:shadow-md transition-all ${accent}`}>
                    <span className="block text-amazon-orange/20 text-3xl font-black leading-none mb-2">
                      {step.num}
                    </span>
                    <h3 className="text-amazon-dark font-bold text-sm mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
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
