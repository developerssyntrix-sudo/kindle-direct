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

export default function ServicePackages({
  packages,
  heading = "Transparent Pricing",
  subheading = "No hidden fees. No surprises. Pick the package that fits your project.",
}: ServicePackagesProps) {
  return (
    <section id="packages" className="py-10 md:py-15 bg-white">
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
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl border p-7 flex flex-col gap-5 transition-all ${
                pkg.featured
                  ? "border-amazon-orange shadow-xl shadow-amazon-orange/10 bg-amazon-dark scale-[1.02]"
                  : "border-border bg-white hover:border-amazon-orange/30 hover:shadow-md"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amazon-orange text-amazon-dark text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <div>
                <p
                  className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                    pkg.featured ? "text-amazon-orange" : "text-muted-foreground"
                  }`}
                >
                  {pkg.name}
                </p>
                <div className="flex items-end gap-1.5 mb-1">
                  <span
                    className={`text-4xl font-extrabold leading-none ${
                      pkg.featured ? "text-white" : "text-amazon-dark"
                    }`}
                  >
                    {pkg.price}
                  </span>
                </div>
                <p
                  className={`text-xs ${
                    pkg.featured ? "text-white/40" : "text-muted-foreground"
                  }`}
                >
                  {pkg.note}
                </p>
              </div>

              <p
                className={`text-sm leading-relaxed ${
                  pkg.featured ? "text-white/60" : "text-muted-foreground"
                }`}
              >
                {pkg.desc}
              </p>

              <ul className="space-y-2.5 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={15}
                      className={`flex-shrink-0 mt-0.5 ${
                        pkg.featured ? "text-amazon-orange" : "text-amazon-orange"
                      }`}
                      fill="currentColor"
                      fillOpacity={0.15}
                    />
                    <span
                      className={`text-xs ${
                        pkg.featured ? "text-white/70" : "text-amazon-dark"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-2 w-full inline-flex items-center justify-center gap-2 font-bold text-sm px-5 py-3 rounded transition-colors ${
                  pkg.featured
                    ? "bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark"
                    : "border-2 border-amazon-dark text-amazon-dark hover:bg-amazon-dark hover:text-white"
                }`}
              >
                {pkg.ctaLabel ?? "Get Started"} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs mt-7">
          Need something custom?{" "}
          <a
            href="#contact"
            className="text-amazon-orange font-semibold hover:underline"
          >
            Request a bespoke quote →
          </a>
        </p>
      </div>
    </section>
  );
}
