"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SmallOpenBook } from "@/components/ui/book-arts";
import { contactInfo } from "@/data/contact";

const faqs = [
  {
    q: "How long does it take to publish a book?",
    a: "Timelines vary by service scope. Ghostwriting a full-length novel typically takes 8–14 weeks. Cover design + formatting takes 1–2 weeks. A full end-to-end package (ghostwriting through launch) runs 12–16 weeks. Rush timelines are available.",
  },
  {
    q: "Do I own all rights to my book?",
    a: "Absolutely. 100% of the intellectual property rights remain yours. Our ghostwriters sign full NDAs and work-for-hire agreements, meaning your name is on the cover and every royalty dollar goes to you.",
  },
  {
    q: "What genres do you specialize in?",
    a: "We cover every major genre: fiction (romance, thriller, sci-fi, fantasy, literary), non-fiction (self-help, business, memoir, health & wellness, personal finance), children's books, and academic works.",
  },
  {
    q: "How much does it cost to publish a book?",
    a: "Pricing depends on your scope. A standalone cover design starts at $299. A ghostwritten business book starts at $2,499. Full publishing packages (writing + editing + cover + publishing + marketing) start at $4,999. We offer flexible payment plans.",
  },
  {
    q: "Will my book actually rank on Amazon?",
    a: "We can't guarantee rankings (no one ethically can), but our KDP metadata optimization, category selection, keyword strategy, and Amazon Ads expertise consistently land our clients on bestseller lists. We have a track record to prove it.",
  },
  {
    q: "Can I see samples of your ghostwriters' work?",
    a: "Yes. During your free consultation we'll share anonymous writing samples in your genre and connect you with the specific writer we'd assign to your project before you commit.",
  },
  {
    q: "Do you offer audiobook services?",
    a: "Yes — we handle narration, studio recording, mastering, ACX and Findaway Voices distribution, so your book is available on Audible, Amazon, iTunes, and 40+ other platforms.",
  },
  {
    q: "What happens if I'm not satisfied with the work?",
    a: "We offer unlimited revisions until you're happy. If after revisions you're still not satisfied, we'll issue a full or partial refund per our satisfaction guarantee policy. We've maintained a 98% satisfaction rate across 1,200+ clients.",
  },
];

export default function FaqsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-10 md:py-15 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
            FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-amazon-dark tracking-tight mb-3">
            Questions We Get{" "}
            <span className="text-amazon-orange">All the Time</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Can&apos;t find your answer? Call us — we&apos;re happy to talk.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border transition-all ${
                  isOpen
                    ? "border-amazon-orange/40 shadow-sm shadow-amazon-orange/10"
                    : "border-border hover:border-amazon-dark/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span
                    className={`text-sm font-bold leading-snug ${
                      isOpen ? "text-amazon-orange" : "text-amazon-dark"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                      isOpen
                        ? "bg-amazon-orange text-amazon-dark"
                        : "bg-amazon-surface text-amazon-dark/40"
                    }`}
                  >
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

        {/* Still have questions */}
        <div className="mt-8 bg-amazon-surface rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-amazon-dark font-bold text-sm">
              Still have questions?
            </p>
            <p className="text-muted-foreground text-xs mt-0.5">
              Our team is available Mon–Fri, 9am–6pm EST.
            </p>
          </div>
          <a
            href={contactInfo.phoneTel}
            className="shrink-0 bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-bold text-sm px-5 py-2.5 rounded transition-colors"
          >
            Talk to Us →
          </a>
        </div>
      </div>
    </section>
  );
}
