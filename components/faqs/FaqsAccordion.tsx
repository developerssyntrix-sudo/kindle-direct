"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const categories = [
  {
    label: "General",
    faqs: [
      { q: "What exactly does Kindle Publisher House do?", a: "We're a full-service book publishing agency specializing in the Amazon marketplace. We ghostwrite, edit, design, publish, and market books across every genre — handling every step so authors can focus on their ideas, not the mechanics of publishing." },
      { q: "Who are your typical clients?", a: "Our clients range from first-time authors with a great idea but no writing experience, to business owners wanting a book as a lead-generation tool, to seasoned authors looking to level up their production quality or marketing. Anyone with a story worth telling." },
      { q: "Are you affiliated with Amazon?", a: "No — we're an independent publishing agency that specializes in Amazon KDP (Kindle Direct Publishing). We're one of a small number of agencies with Amazon KDP Partner status, but we're not owned by or formally affiliated with Amazon the company." },
      { q: "Do you work with international authors?", a: "Absolutely. We work with authors from six continents. All communication is in English, and we publish books globally through Amazon's worldwide marketplaces and partner distribution networks." },
      { q: "How do I get started?", a: "The first step is a free 30-minute consultation call. We'll learn about your project, answer your questions, and walk you through exactly what working with us looks like. No obligation, no pressure — just clarity." },
    ],
  },
  {
    label: "Ghostwriting",
    faqs: [
      { q: "Will anyone know my book was ghostwritten?", a: "Only if you tell them. Every project is covered by a full mutual NDA. Our ghostwriters sign work-for-hire agreements transferring all IP to you. We've never disclosed a client relationship without explicit permission." },
      { q: "How do you match me with the right writer?", a: "We match based on genre expertise, writing style compatibility, and publication history. We'll share anonymous writing samples from your matched writer before you commit, and you can request an alternative if the fit doesn't feel right." },
      { q: "Can I be involved in the writing process?", a: "Yes — as much or as little as you want. Some clients prefer to review every chapter as it's written. Others give feedback on the outline and then receive the final draft. We adapt to your preferred collaboration style." },
      { q: "What if my book idea is still just a rough concept?", a: "That's completely fine — most clients come to us with a rough idea rather than a developed manuscript. Our discovery process is designed to draw out your story, structure your concept, and build a detailed outline before writing begins." },
      { q: "Do you write in languages other than English?", a: "Currently, all ghostwriting services are offered in English only. We do work with authors whose native language isn't English and who want to publish in English — our voice-capture process works well across language backgrounds." },
    ],
  },
  {
    label: "Publishing",
    faqs: [
      { q: "How long does it take to get my book on Amazon?", a: "We guarantee your book is live within 14 business days of receiving all final materials (manuscript, cover, author bio). Once submitted, Amazon typically approves within 24–72 hours. eBook availability is instant upon approval; print books take 3–5 days to appear." },
      { q: "Do I keep 100% of my royalties?", a: "Yes, without exception. We charge a one-time service fee. We never take a percentage of your royalties, never ask for a revenue share, and never hold your money. All royalties go directly from Amazon to your bank account." },
      { q: "What if my book gets rejected by Amazon?", a: "We've handled 2,500+ book submissions and know Amazon's content guidelines inside out. In the rare event of a rejection, we address the issue and resubmit at no additional charge — and we'll tell you exactly what caused it." },
      { q: "Can I publish on platforms other than Amazon?", a: "Yes — all of our publishing packages include distribution beyond Amazon. We publish to Apple Books, Google Play, Kobo, Barnes & Noble, Scribd, and IngramSpark (for bookstores and libraries) as part of our standard service." },
      { q: "Do I need my own ISBN?", a: "All packages that include print (paperback or hardcover) include ISBN assignment. For eBook-only publishing, KDP provides a free ASIN. If you want a universal ISBN for your eBook, we include that in our Full Formats package." },
    ],
  },
  {
    label: "Editing",
    faqs: [
      { q: "What's the difference between developmental editing and copy editing?", a: "Developmental editing addresses big-picture issues: structure, plot, character arcs, pacing, and argument logic. Copy editing works at the sentence level — grammar, syntax, punctuation, and style consistency. Most manuscripts benefit from both, in that order." },
      { q: "Will editing change my voice?", a: "Our editorial philosophy is explicitly voice-protective. We strengthen what's already there — we never rewrite to impose a different style. All edits are in tracked changes with explanatory comments, and you accept or reject every single one." },
      { q: "How long does editing take?", a: "Proofreading: 7–14 days. Copy + Line editing: 14–21 days. Full developmental editing: 18–28 days. These timelines depend on manuscript length — we'll give you a precise timeline after reviewing your specific manuscript." },
      { q: "Do you offer a sample edit?", a: "Yes — every new client receives a free 2,000-word sample edit before committing. This lets you see our style, quality, and communication approach before making any financial commitment." },
    ],
  },
  {
    label: "Marketing",
    faqs: [
      { q: "Can you guarantee my book will become a bestseller?", a: "No — and you should distrust anyone who does. What we can guarantee is expert execution of every marketing tactic we agree on, and a track record of 150+ bestseller launches. Average client sales lift in the first 30 days is 300%+." },
      { q: "What's an ARC campaign and why does it matter?", a: "ARC (Advance Review Copy) campaigns send your book to engaged readers before launch in exchange for honest Amazon reviews. More reviews on launch day dramatically improves your conversion rate and Amazon ranking algorithm performance." },
      { q: "How much should I budget for Amazon ads?", a: "We recommend a minimum of $300–$500/month for meaningful AMS data and results. Our management fee is charged separately. We set up campaigns, optimize weekly, and are fully transparent about every dollar spent." },
      { q: "Can you market a book I've already published?", a: "Yes — re-launching underperforming books is a specialty. We audit your current listing, AMS campaigns (if any), keyword strategy, and reviews, then build a re-launch plan designed to reignite visibility and sales velocity." },
    ],
  },
  {
    label: "Pricing & Process",
    faqs: [
      { q: "How much does it cost to publish a book end-to-end?", a: "A full end-to-end package (ghostwriting + editing + cover design + publishing + launch marketing) starts at $7,999 for a standard non-fiction book. Individual services start at $299 (proofreading) and go up to $7,999+ (full ghostwriting). We offer flexible payment plans." },
      { q: "Do you offer payment plans?", a: "Yes — most projects can be split into 2–4 milestone payments rather than a single upfront fee. We'll structure the payment plan based on project milestones so you only pay as deliverables are completed." },
      { q: "What's your refund policy?", a: "We offer a satisfaction guarantee — if you're not happy with delivered work after revisions, we'll issue a partial or full refund based on our policy terms. We've maintained a 98% satisfaction rate across 1,200+ clients, so this rarely comes up." },
      { q: "How does the process work from start to finish?", a: "It starts with a free consultation call. We build a custom proposal and project plan. You approve and pay the first milestone. We assign your team and begin work. Deliverables are reviewed and revised until you're satisfied. Final files and publishing handled. Launch support and ongoing optimization available." },
    ],
  },
];

function FaqCategory({ category }: { category: (typeof categories)[0] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[#d5d9d9] border border-[#d5d9d9] rounded bg-white">
      {category.faqs.map((faq, i) => {
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
  );
}

export default function FaqsAccordion() {
  const [activeTab, setActiveTab] = useState(categories[0].label);
  const active = categories.find((c) => c.label === activeTab)!;

  return (
    <section className="py-12 bg-[#f0f2f2]">
      <div className="max-w-4xl mx-auto px-4 md:px-6">

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c.label}
              onClick={() => setActiveTab(c.label)}
              className={`text-xs px-4 py-1.5 rounded border transition-colors ${
                activeTab === c.label
                  ? "bg-[#008296] text-white border-[#008296]"
                  : "bg-white text-[#131a22] border-[#d5d9d9] hover:border-[#008296] hover:text-[#008296]"
              }`}
            >
              {c.label} ({c.faqs.length})
            </button>
          ))}
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-serif text-[#131a22] mb-0.5">{active.label} Questions</h2>
          <p className="text-[#565959] text-xs">{active.faqs.length} questions in this section</p>
        </div>

        <FaqCategory category={active} />
      </div>
    </section>
  );
}
