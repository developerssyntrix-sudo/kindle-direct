import { MessageSquare, FileSearch, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Free Discovery Call",
    desc: "We start with a no-obligation consultation to understand your book idea, goals, target audience, and timeline. No pressure — just clarity.",
  },
  {
    num: "02",
    icon: FileSearch,
    title: "Strategy & Proposal",
    desc: "Our team builds a custom publishing roadmap — writer matching, cover concept, distribution plan, and a transparent price breakdown.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Creation & Publishing",
    desc: "Your dedicated team writes, edits, designs, and publishes your book. You review every milestone before we move forward.",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Launch & Growth",
    desc: "We execute your launch campaign, run Amazon Ads, and continue optimizing your book's ranking and reviews long after it goes live.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-10 md:py-15 bg-amazon-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-amazon-dark tracking-tight mb-3">
            From Idea to{" "}
            <span className="text-amazon-orange">Published Author</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            A simple, transparent 4-step process that keeps you in control
            without the overwhelm.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px bg-border" />
          <div
            className="hidden lg:block absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, #FF9900 25%, #FF9900 75%, transparent)",
              opacity: 0.3,
            }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-amazon-orange shadow-md shadow-amazon-orange/20 flex items-center justify-center mb-5 flex-shrink-0">
                    <Icon size={22} className="text-amazon-orange" />
                    {/* Number badge */}
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-amazon-dark text-white text-[9px] font-black flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl p-5 border border-border w-full shadow-sm hover:shadow-md hover:border-amazon-orange/30 transition-all">
                    <span className="text-amazon-orange/30 text-3xl font-black leading-none block mb-2">
                      {step.num}
                    </span>
                    <h3 className="text-amazon-dark font-bold text-base mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-bold px-8 py-3 rounded text-sm transition-colors shadow-md shadow-amazon-orange/20"
          >
            Start Your Journey Today →
          </a>
        </div>
      </div>
    </section>
  );
}
