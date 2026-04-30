import type { Metadata } from "next";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceIncludes from "@/components/service-page/ServiceIncludes";
import ServiceProcess from "@/components/service-page/ServiceProcess";
import ServiceWhyUs from "@/components/service-page/ServiceWhyUs";
import ServicePackages from "@/components/service-page/ServicePackages";
import ServiceTestimonials from "@/components/service-page/ServiceTestimonials";
import ServiceFaqs from "@/components/service-page/ServiceFaqs";
import ServiceCta from "@/components/service-page/ServiceCta";
import {
  FileEdit,
  CheckCircle2,
  Search,
  AlignLeft,
  Layers,
  MessageSquare,
  RefreshCw,
  Rocket,
  Clock,
  Star,
  ShieldCheck,
  BookOpen,
  Eye,
  Sparkles,
  Target,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Book Editing & Proofreading Services | Amazon Books Publishing",
  description:
    "Professional book editing and proofreading — developmental, line, copy editing, and final proofread. Genre-matched editors. Turnaround in 14–21 days.",
};

/* ── Editing types explainer ── */
const editingTypes = [
  {
    level: "01",
    name: "Developmental Editing",
    focus: "Big picture",
    desc: "Plot structure, pacing, character arcs, theme, point of view, and overall story logic. The foundation that everything else rests on.",
  },
  {
    level: "02",
    name: "Line Editing",
    focus: "Sentence level",
    desc: "Clarity, flow, word choice, rhythm, and style. Transforms functional prose into compelling, readable writing.",
  },
  {
    level: "03",
    name: "Copy Editing",
    focus: "Technical accuracy",
    desc: "Grammar, punctuation, syntax, consistency, and fact-checking. Eliminates errors that undermine credibility.",
  },
  {
    level: "04",
    name: "Proofreading",
    focus: "Final polish",
    desc: "The last line of defense before publishing — catching any remaining typos, formatting errors, or missed corrections.",
  },
];

export default function BookEditingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceHero
          badge="Editing & Proofreading"
          title="Professional Book Editing"
          highlight="That Elevates Every Page"
          description="Our genre-matched editors work at every level — from structural developmental editing to final-pass proofreading. The difference between a good book and a great one is great editing."
          serviceName="Book Editing & Proofreading"
          stats={[
            { value: "3,000+", label: "Manuscripts Edited" },
            { value: "48 Hrs", label: "Sample Edit Turnaround" },
            { value: "4 Levels", label: "Of Editing Offered" },
            { value: "21 Days", label: "Avg. Full Edit Delivery" },
          ]}
        />

        {/* Editing levels explainer */}
        <section className="py-10 md:py-15 bg-amazon-dark">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-9">
              <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
                Editing Levels
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Four Levels of Editing —{" "}
                <span className="text-amazon-orange">We Do All of Them</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {editingTypes.map((e) => (
                <div
                  key={e.level}
                  className="bg-amazon-navy/50 border border-white/5 hover:border-amazon-orange/30 rounded-2xl p-5 transition-all"
                >
                  <span className="text-amazon-orange font-black text-4xl leading-none block mb-3 opacity-30">
                    {e.level}
                  </span>
                  <p className="text-white font-bold text-sm mb-1">{e.name}</p>
                  <span className="text-amazon-orange text-[10px] font-bold uppercase tracking-widest mb-2 block">
                    Focus: {e.focus}
                  </span>
                  <p className="text-white/50 text-xs leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceIncludes
          heading="What's Included in Every Edit"
          subheading="Every editing package comes with comprehensive feedback and clear communication."
          items={[
            {
              icon: AlignLeft,
              title: "Editorial Letter",
              desc: "A detailed editorial memo summarizing key strengths, areas for improvement, and specific recommendations — before we touch a single page.",
            },
            {
              icon: FileEdit,
              title: "Tracked Changes",
              desc: "All edits delivered in Word with tracked changes — so you see exactly what we changed and why. Accept, reject, or discuss any edit.",
            },
            {
              icon: MessageSquare,
              title: "Inline Comments",
              desc: "Margin notes explaining reasoning behind larger changes, flagging inconsistencies, and celebrating moments that work especially well.",
            },
            {
              icon: Search,
              title: "Consistency Check",
              desc: "Character names, locations, timelines, and style preferences tracked in a style sheet and applied consistently throughout.",
            },
            {
              icon: Eye,
              title: "Reader's Report",
              desc: "A summary from your editor's reader perspective — how the book felt as an experience, not just as a manuscript.",
            },
            {
              icon: RefreshCw,
              title: "Revision Support",
              desc: "After you've made revisions, we review the changed sections to ensure your fixes landed as intended — included in all packages.",
            },
            {
              icon: BookOpen,
              title: "Style Sheet",
              desc: "A living document capturing all spelling preferences, character details, and recurring stylistic choices for ongoing series consistency.",
            },
            {
              icon: CheckCircle2,
              title: "Final Certification",
              desc: "A written confirmation that your manuscript has passed our editorial standard — useful for publishers and press kit credibility.",
            },
          ]}
        />

        <ServiceProcess
          heading="Our Editorial Process"
          subheading="Transparent, methodical, and author-centered at every stage."
          steps={[
            {
              num: "01",
              icon: FileEdit,
              title: "Manuscript Assessment",
              desc: "We read your entire manuscript before beginning, forming a complete picture of your book and its needs.",
            },
            {
              num: "02",
              icon: AlignLeft,
              title: "Developmental Pass",
              desc: "Big-picture structural feedback delivered via editorial letter — you implement changes before line/copy work begins.",
            },
            {
              num: "03",
              icon: Sparkles,
              title: "Line & Copy Edit",
              desc: "Sentence-level improvement and technical correction, delivered with full tracked changes for your review.",
            },
            {
              num: "04",
              icon: Eye,
              title: "Proofread",
              desc: "Final read-through catching any remaining errors — the last check before your manuscript goes to design.",
            },
            {
              num: "05",
              icon: Rocket,
              title: "Delivery & Q&A",
              desc: "Clean final files delivered with a call to walk through the edits and answer any questions.",
            },
          ]}
        />

        <ServiceWhyUs
          heading="Why Our Editors"
          highlight="Are Different"
          body="Every editor on our team is genre-matched, traditionally published or accredited, and committed to improving your book — not just marking it up."
          points={[
            {
              icon: Target,
              title: "Genre-Matched Editors",
              desc: "Your romance novel won't be edited by someone who only reads literary fiction. We match based on genre expertise and publication history.",
            },
            {
              icon: Star,
              title: "Free Sample Edit",
              desc: "Every new client receives a free 2,000-word sample edit — so you can see our style and quality before committing to a full project.",
            },
            {
              icon: Clock,
              title: "Reliable Turnaround",
              desc: "We set deadlines and hit them. Full manuscripts returned within 14–21 business days depending on length and scope.",
            },
            {
              icon: HeartHandshake,
              title: "Author-Protective Philosophy",
              desc: "Our editors strengthen your voice, not replace it. We never rewrite — we guide, and the final decisions are always yours.",
            },
            {
              icon: ShieldCheck,
              title: "Fully Confidential",
              desc: "All manuscripts are covered by NDA. We never share, reference, or disclose client manuscripts under any circumstances.",
            },
            {
              icon: RefreshCw,
              title: "Post-Revision Check Included",
              desc: "After you revise, we check the changed sections — at no additional cost — to make sure your fixes achieved their intended effect.",
            },
          ]}
        />

        <ServicePackages
          heading="Editing Packages"
          subheading="Priced per project, not per hour. Includes all feedback documents and revision support."
          packages={[
            {
              name: "Proofread",
              price: "$299",
              note: "Up to 50,000 words",
              desc: "Final-stage polish for manuscripts that have already been through editing. Grammar, spelling, and punctuation only.",
              features: [
                "Grammar & punctuation corrections",
                "Spelling and typo fixes",
                "Formatting inconsistency flags",
                "Tracked changes delivery",
                "14-day turnaround",
                "One revision pass included",
              ],
            },
            {
              name: "Copy + Line Edit",
              price: "$699",
              note: "Up to 50,000 words",
              desc: "The most popular choice — sentence-level clarity, style improvement, and complete technical correction.",
              features: [
                "Everything in Proofread",
                "Line editing for clarity & flow",
                "Word choice & rhythm improvements",
                "Style sheet creation",
                "Consistency tracking",
                "Inline margin comments",
                "Editor Q&A call (30 min)",
                "Revision support included",
                "21-day turnaround",
              ],
              featured: true,
            },
            {
              name: "Full Developmental",
              price: "$1,299",
              note: "Up to 50,000 words",
              desc: "End-to-end editorial support from structure to final proofread — the complete transformation.",
              features: [
                "Everything in Copy + Line",
                "Full developmental edit",
                "Detailed editorial letter",
                "Plot/structure analysis",
                "Character arc assessment",
                "Reader's report",
                "Post-revision structural check",
                "Publisher-ready certification",
                "Priority turnaround (18 days)",
              ],
            },
          ]}
        />

        <ServiceTestimonials
          heading="Authors Who Transformed Their Manuscripts"
          testimonials={[
            {
              name: "Priya Rajan",
              role: "Author, Bloom & Ashes (Romance)",
              initials: "PR",
              avatarColor: "bg-rose-600",
              rating: 5,
              quote:
                "I'd had two beta readers say the pacing felt off but couldn't figure out where. The developmental editorial letter pinpointed exactly three scenes that were doing the heavy lifting wrong. After restructuring, my ARC readers said it was unputdownable. The editor was brilliant.",
            },
            {
              name: "Kevin Okafor",
              role: "Author, The Founders Playbook (Business)",
              initials: "KO",
              avatarColor: "bg-green-600",
              rating: 5,
              quote:
                "As a non-native English speaker, I was worried the copy edit would strip my voice. Instead, my editor strengthened my natural voice while making the writing significantly more professional. Multiple reviewers assumed I had a co-author — the editing was that seamless.",
            },
            {
              name: "Sarah Mitchell",
              role: "Author, Echoes of Tomorrow (Sci-Fi)",
              initials: "SM",
              avatarColor: "bg-purple-600",
              rating: 5,
              quote:
                "The free sample edit sold me immediately. Their editor caught a major plot hole I'd missed across three personal drafts, and did it with such clear reasoning that I immediately understood how to fix it. Best investment in my writing career to date.",
            },
          ]}
        />

        <ServiceFaqs
          heading="Editing & Proofreading FAQs"
          faqs={[
            {
              q: "What's the difference between copy editing and proofreading?",
              a: "Copy editing addresses grammar, punctuation, syntax, consistency, and style at the sentence level. Proofreading is a final check for any remaining errors after editing is complete — it's not a substitute for editing.",
            },
            {
              q: "Do you offer a sample edit before I commit?",
              a: "Yes — we provide a free 2,000-word sample edit for all new clients. This lets you experience our editing style and quality before deciding on a full project.",
            },
            {
              q: "Will the editing change my voice?",
              a: "Never. Our editorial philosophy is voice-protective. We strengthen what's already there, flag things that might confuse readers, and always defer to your creative decisions. We guide — you decide.",
            },
            {
              q: "How long does editing take?",
              a: "Proofreading typically takes 7–14 days. Copy + Line editing takes 14–21 days. Full Developmental editing takes 18–28 days, depending on manuscript length and complexity.",
            },
            {
              q: "What if I disagree with an edit?",
              a: "You own your book. Every edit is in tracked changes with a comment explaining the reasoning — you can accept, reject, or discuss any change. We schedule a Q&A call after delivery for exactly this.",
            },
            {
              q: "Can you edit a non-English manuscript?",
              a: "We currently offer editing services in English only. If you've had a book translated, we can edit the English translation.",
            },
            {
              q: "Do you work on academic or technical manuscripts?",
              a: "Yes — we have editors with academic and technical writing backgrounds for STEM, business, law, and medical manuscripts. These are priced separately — contact us for a custom quote.",
            },
          ]}
        />

        <ServiceCta
          heading="Let's Make Your Manuscript Undeniable"
          subheading="Start with a free 2,000-word sample edit — no commitment, no credit card. See exactly what our editors can do for your book."
          primaryLabel="Request Free Sample Edit"
        />
      </main>
      <SiteFooter />
    </>
  );
}
