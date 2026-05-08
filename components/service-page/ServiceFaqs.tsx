"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

interface ServiceFaqsProps {
  faqs: FaqItem[];
  heading?: string;
}

const accentColors = [
  "border-l-indigo-400",
  "border-l-teal-400",
  "border-l-amazon-orange",
  "border-l-rose-400",
  "border-l-purple-400",
  "border-l-emerald-400",
  "border-l-amber-400",
];

export default function ServiceFaqs({
  faqs,
  heading = "Frequently Asked Questions",
}: ServiceFaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-10 md:py-15 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-9">
          <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
            FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-amazon-dark tracking-tight">
            {heading}
          </h2>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const accent = accentColors[i % accentColors.length];
            return (
              <div
                key={i}
                className={`rounded-xl border bg-white transition-all border-l-4 ${
                  isOpen
                    ? `${accent} shadow-sm border-t-transparent border-r-transparent border-b-transparent`
                    : "border-border hover:border-l-amazon-orange/40"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className={`text-sm font-bold leading-snug ${isOpen ? "text-amazon-dark" : "text-amazon-dark"}`}>
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-amazon-orange text-amazon-dark" : "bg-border text-amazon-dark/40"}`}>
                    {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed border-t border-border pt-3">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-gradient-to-r from-indigo-50 to-teal-50 rounded-2xl border border-indigo-100 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-amazon-dark font-bold text-sm">Still have questions?</p>
            <p className="text-muted-foreground text-xs mt-0.5">Call or chat — we reply within 1 business hour.</p>
          </div>
          <a href="#contact" className="flex-shrink-0 bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-bold text-sm px-5 py-2.5 rounded transition-colors outline outline-2 outline-offset-2 outline-amazon-orange/60">
            Talk to Us →
          </a>
        </div>
      </div>
    </section>
  );
}
