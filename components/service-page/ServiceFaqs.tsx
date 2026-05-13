"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

export interface FaqItem {
  q: string;
  a: string;
}

interface ServiceFaqsProps {
  faqs: FaqItem[];
  heading?: string;
}

export default function ServiceFaqs({ faqs, heading = "Frequently Asked Questions" }: ServiceFaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 bg-[#f0f2f2]">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-[#131a22]">{heading}</h2>
        </div>

        <div className="divide-y divide-[#d5d9d9] border border-[#d5d9d9] rounded bg-white">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#f0f2f2] transition-colors"
                >
                  <span className={`text-sm leading-snug ${isOpen ? "text-[#008296] font-semibold" : "text-[#131a22] font-medium"}`}>
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 text-[#008296]">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-[#565959] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 border border-[#d5d9d9] rounded bg-white p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[#131a22] font-semibold text-sm">Still have questions?</p>
            <p className="text-[#565959] text-xs mt-0.5">Call or chat — we reply within 1 business hour.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 bg-[#008296] hover:bg-[#006e7f] text-white font-medium text-sm px-5 py-2.5 rounded transition-colors"
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  );
}
