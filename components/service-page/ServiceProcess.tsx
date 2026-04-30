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

export default function ServiceProcess({
  steps,
  heading = "How We Do It",
  subheading = "A transparent, step-by-step process that keeps you informed every mile.",
}: ServiceProcessProps) {
  return (
    <section className="py-10 md:py-15 bg-amazon-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
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
          <div className="hidden lg:block absolute top-[3rem] left-[12%] right-[12%] h-px bg-amazon-orange/20" />

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
              return (
                <div key={step.num} className="flex flex-col items-center text-center">
                  {/* Circle */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-amazon-orange shadow-md shadow-amazon-orange/20 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-amazon-orange" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-amazon-dark text-[9px] font-black text-white flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-border w-full shadow-sm hover:shadow-md hover:border-amazon-orange/25 transition-all">
                    <span className="block text-amazon-orange/25 text-3xl font-black leading-none mb-2">
                      {step.num}
                    </span>
                    <h3 className="text-amazon-dark font-bold text-sm mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {step.desc}
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
