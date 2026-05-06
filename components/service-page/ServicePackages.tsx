import { CheckCircle2, ArrowRight } from "lucide-react";

export interface PricingPackage {
  name: string;
  price: string;
  note: string;
  desc: string;
  features: string[];
  featured?: boolean;
  ctaLabel?: string;
}

interface ServicePackagesProps {
  packages: PricingPackage[];
  heading?: string;
  subheading?: string;
}

const tiers = [
  {
    bg: "bg-gradient-to-br from-indigo-50 to-blue-50",
    border: "border-indigo-200 hover:border-indigo-300",
    badge: "text-indigo-600",
    price: "text-indigo-700",
    note: "text-indigo-400",
    cta: "border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white",
    check: "text-indigo-500",
    shadow: "hover:shadow-indigo-100",
  },
  null, // featured — handled separately
  {
    bg: "bg-gradient-to-br from-teal-50 to-emerald-50",
    border: "border-teal-200 hover:border-teal-300",
    badge: "text-teal-600",
    price: "text-teal-700",
    note: "text-teal-400",
    cta: "border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white",
    check: "text-teal-500",
    shadow: "hover:shadow-teal-100",
  },
];

export default function ServicePackages({
  packages,
  heading = "Transparent Pricing",
  subheading = "No hidden fees. No surprises. Pick the package that fits your project.",
}: ServicePackagesProps) {
  return (
    <section id="packages" className="py-10 md:py-15 bg-amazon-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-amazon-dark tracking-tight mb-3">
            {heading}
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            {subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {packages.map((pkg, idx) => {
            const tier = pkg.featured ? null : tiers[idx === 0 ? 0 : 2];

            if (pkg.featured) {
              return (
                <div
                  key={pkg.name}
                  className="relative rounded-2xl border border-amazon-orange shadow-xl shadow-amazon-orange/10 bg-amazon-dark scale-[1.02] p-7 flex flex-col gap-5 transition-all"
                >
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amazon-orange text-amazon-dark text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                    Most Popular
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2 text-amazon-orange">{pkg.name}</p>
                    <div className="flex items-end gap-1.5 mb-1">
                      <span className="text-4xl font-extrabold leading-none text-white">{pkg.price}</span>
                    </div>
                    <p className="text-xs text-white/40">{pkg.note}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-white/60">{pkg.desc}</p>
                  <ul className="space-y-2.5 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-amazon-orange" fill="currentColor" fillOpacity={0.15} />
                        <span className="text-xs text-white/70">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-2 w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-5 py-3 rounded transition-colors bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark">
                    {pkg.ctaLabel ?? "Get Started"} <ArrowRight size={14} />
                  </a>
                </div>
              );
            }

            return (
              <div
                key={pkg.name}
                className={`relative rounded-2xl border p-7 flex flex-col gap-5 transition-all hover:shadow-md ${tier!.bg} ${tier!.border} ${tier!.shadow}`}
              >
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${tier!.badge}`}>{pkg.name}</p>
                  <div className="flex items-end gap-1.5 mb-1">
                    <span className={`text-4xl font-extrabold leading-none ${tier!.price}`}>{pkg.price}</span>
                  </div>
                  <p className={`text-xs ${tier!.note}`}>{pkg.note}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{pkg.desc}</p>
                <ul className="space-y-2.5 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className={`flex-shrink-0 mt-0.5 ${tier!.check}`} fill="currentColor" fillOpacity={0.15} />
                      <span className="text-xs text-amazon-dark">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-2 w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-5 py-3 rounded transition-colors ${tier!.cta}`}>
                  {pkg.ctaLabel ?? "Get Started"} <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-center text-muted-foreground text-xs mt-7">
          Need something custom?{" "}
          <a href="#contact" className="text-amazon-orange font-semibold hover:underline">
            Request a bespoke quote →
          </a>
        </p>
      </div>
    </section>
  );
}
