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

const palette = [
  { wrap: "bg-orange-50 border-orange-200", icon: "text-orange-500", hover: "group-hover:bg-orange-500 group-hover:border-orange-400", hoverIcon: "group-hover:text-white", card: "hover:border-orange-200 hover:shadow-orange-100" },
  { wrap: "bg-indigo-50 border-indigo-200", icon: "text-indigo-500", hover: "group-hover:bg-indigo-500 group-hover:border-indigo-400", hoverIcon: "group-hover:text-white", card: "hover:border-indigo-200 hover:shadow-indigo-100" },
  { wrap: "bg-teal-50 border-teal-200", icon: "text-teal-500", hover: "group-hover:bg-teal-500 group-hover:border-teal-400", hoverIcon: "group-hover:text-white", card: "hover:border-teal-200 hover:shadow-teal-100" },
  { wrap: "bg-rose-50 border-rose-200", icon: "text-rose-500", hover: "group-hover:bg-rose-500 group-hover:border-rose-400", hoverIcon: "group-hover:text-white", card: "hover:border-rose-200 hover:shadow-rose-100" },
  { wrap: "bg-amber-50 border-amber-200", icon: "text-amber-500", hover: "group-hover:bg-amber-500 group-hover:border-amber-400", hoverIcon: "group-hover:text-white", card: "hover:border-amber-200 hover:shadow-amber-100" },
  { wrap: "bg-purple-50 border-purple-200", icon: "text-purple-500", hover: "group-hover:bg-purple-500 group-hover:border-purple-400", hoverIcon: "group-hover:text-white", card: "hover:border-purple-200 hover:shadow-purple-100" },
  { wrap: "bg-emerald-50 border-emerald-200", icon: "text-emerald-500", hover: "group-hover:bg-emerald-500 group-hover:border-emerald-400", hoverIcon: "group-hover:text-white", card: "hover:border-emerald-200 hover:shadow-emerald-100" },
  { wrap: "bg-sky-50 border-sky-200", icon: "text-sky-500", hover: "group-hover:bg-sky-500 group-hover:border-sky-400", hoverIcon: "group-hover:text-white", card: "hover:border-sky-200 hover:shadow-sky-100" },
  { wrap: "bg-pink-50 border-pink-200", icon: "text-pink-500", hover: "group-hover:bg-pink-500 group-hover:border-pink-400", hoverIcon: "group-hover:text-white", card: "hover:border-pink-200 hover:shadow-pink-100" },
];

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

        <div className="flex flex-wrap justify-center gap-5">
          {items.map((item, idx) => {
            const Icon = item.icon;
            const c = palette[idx % palette.length];
            return (
              <div
                key={item.title}
                className={`group flex gap-4 p-5 rounded-2xl border border-border hover:shadow-md bg-white transition-all w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] ${c.card}`}
              >
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 transition-all ${c.wrap} ${c.hover}`}>
                  <Icon size={19} className={`transition-colors ${c.icon} ${c.hoverIcon}`} />
                </div>
                <div>
                  <h3 className="text-amazon-dark font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
