import { CheckCircle2 } from "lucide-react";
import type React from "react";

type IconType = React.ComponentType<{ size?: number; className?: string }>;

export interface IncludeItem {
  icon: IconType;
  title: string;
  desc: string;
}

interface ServiceIncludesProps {
  items: IncludeItem[];
  heading?: string;
  subheading?: string;
}

export default function ServiceIncludes({
  items,
  heading = "Everything Included",
  subheading = "A complete, end-to-end service with nothing hidden.",
}: ServiceIncludesProps) {
  return (
    <section className="py-10 md:py-15 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
            What&apos;s Included
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-amazon-dark tracking-tight mb-3">
            {heading}
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            {subheading}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group flex gap-4 p-5 rounded-2xl border border-border hover:border-amazon-orange/30 hover:shadow-md hover:shadow-amazon-orange/5 bg-white transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-amazon-orange/10 border border-amazon-orange/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amazon-orange group-hover:border-amazon-orange transition-all">
                  <Icon
                    size={19}
                    className="text-amazon-orange group-hover:text-amazon-dark transition-colors"
                  />
                </div>
                <div>
                  <h3 className="text-amazon-dark font-bold text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
