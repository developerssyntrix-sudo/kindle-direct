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
  PenLine,
  BookOpen,
  FileSearch,
  Users,
  MessageSquare,
  Rocket,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Star,
  Globe,
  HeartHandshake,
  Layers,
  BarChart,
  Fingerprint,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Book Writing & Ghostwriting Services | Amazon Books Publishing",
  description:
    "Professional ghostwriting services for fiction, non-fiction, memoirs, and business books. 800+ manuscripts delivered. NDA protected. You own all rights.",
};

export default function BookWritingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <ServiceHero
          badge="Ghostwriting & Book Writing"
          title="Professional Book Writing"
          highlight="By Expert Ghostwriters"
          description="From a rough idea to a market-ready manuscript — our seasoned ghostwriters craft compelling books in your voice, across every genre. You get full credit, full rights, and a book you're proud of."
          serviceName="Book Writing"
          bgImage="https://images.unsplash.com/photo-1462642109801-4ac2971a3a51?q=80&w=1073&auto=format&fit=crop"
          stats={[
            { value: "800+", label: "Manuscripts Delivered" },
            { value: "60+", label: "Genres Covered" },
            { value: "100%", label: "NDA Protected" },
            { value: "8 Wks", label: "Average Delivery" },
          ]}
        />

        {/* ── Genres strip ── */}
        <section className="py-6 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest mr-2">
                Genres:
              </span>
              {[
                "Fiction",
                "Romance",
                "Thriller & Mystery",
                "Sci-Fi & Fantasy",
                "Self-Help",
                "Business",
                "Memoir & Biography",
                "Health & Wellness",
                "Personal Finance",
                "Children's",
                "True Crime",
                "Spirituality",
              ].map((g) => (
                <span
                  key={g}
                  className="text-xs font-semibold bg-amazon-surface border border-border text-amazon-dark px-3 py-1 rounded-full"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Includes ── */}
        <ServiceIncludes
          heading="Everything Your Book Needs"
          subheading="A complete ghostwriting service with nothing left for you to figure out."
          items={[
            {
              icon: MessageSquare,
              title: "In-Depth Story Discovery Call",
              desc: "We start with a deep-dive consultation to capture your vision, voice, target audience, and core message.",
            },
            {
              icon: FileSearch,
              title: "Research & Fact-Checking",
              desc: "Our writers conduct thorough research to ensure accuracy, authority, and depth in every chapter.",
            },
            {
              icon: Layers,
              title: "Chapter-by-Chapter Outline",
              desc: "A detailed chapter outline approved by you before a single word of the manuscript is written.",
            },
            {
              icon: PenLine,
              title: "Full Manuscript Writing",
              desc: "Professional, genre-appropriate prose that reads authentically in your voice — delivered in milestone batches.",
            },
            {
              icon: RefreshCw,
              title: "Unlimited Revisions",
              desc: "We revise until you're 100% happy. No cap on rounds, no extra charges for changes.",
            },
            {
              icon: CheckCircle2,
              title: "Editorial Polish & Proofread",
              desc: "Final pass by our editorial team to catch grammar, consistency, and flow issues before delivery.",
            },
            {
              icon: ShieldCheck,
              title: "Full NDA & Rights Transfer",
              desc: "Iron-clad non-disclosure agreement. All intellectual property transfers to you upon completion.",
            },
            {
              icon: BookOpen,
              title: "Formatted Final Manuscript",
              desc: "Delivered in Word and PDF — formatted and ready for editing, design, or direct KDP upload.",
            },
            {
              icon: Users,
              title: "Dedicated Project Manager",
              desc: "A single point of contact who coordinates your writer and keeps the project on schedule.",
            },
          ]}
        />

        {/* ── Process ── */}
        <ServiceProcess
          heading="From Idea to Final Manuscript"
          subheading="Our proven 5-step writing process keeps you in control without the overwhelm."
          steps={[
            {
              num: "01",
              icon: MessageSquare,
              title: "Discovery & Voice Capture",
              desc: "We interview you extensively to understand your story, your voice, and your goals — then match you with the perfect writer.",
            },
            {
              num: "02",
              icon: FileSearch,
              title: "Research & Outline",
              desc: "Your writer conducts genre-specific research and builds a detailed chapter-by-chapter outline for your approval.",
            },
            {
              num: "03",
              icon: PenLine,
              title: "Writing in Milestones",
              desc: "Drafts are delivered chapter by chapter so you can provide feedback as we go — no waiting until the end.",
            },
            {
              num: "04",
              icon: RefreshCw,
              title: "Review & Revise",
              desc: "You review every batch. We revise until it sounds exactly like you and reads exactly how you envisioned.",
            },
            {
              num: "05",
              icon: Rocket,
              title: "Final Delivery",
              desc: "Polished, proofread, formatted manuscript delivered — ready for cover design, publishing, or submission.",
            },
          ]}
        />

        {/* ── Why Us ── */}
        <ServiceWhyUs
          heading="Why Authors Choose"
          highlight="Our Ghostwriting Team"
          body="With 800+ manuscripts under our belt and writers in every major genre, we're not just a writing service — we're your creative partner."
          points={[
            {
              icon: Fingerprint,
              title: "Your Voice, Perfectly Captured",
              desc: "We use voice-capture interviews, sample analysis, and iterative feedback to write prose that sounds authentically like you.",
            },
            {
              icon: ShieldCheck,
              title: "100% Confidential — Always",
              desc: "Every project is covered by a legally binding NDA. We never list your book in our portfolio without explicit permission.",
            },
            {
              icon: Star,
              title: "Genre-Matched Expert Writers",
              desc: "We don't assign generalists. You get a writer with proven, published experience in your exact genre.",
            },
            {
              icon: Clock,
              title: "Strict Deadline Adherence",
              desc: "98% of our projects deliver on or ahead of schedule. Milestones keep everyone accountable.",
            },
            {
              icon: Globe,
              title: "Global Bestseller Track Record",
              desc: "Our ghostwritten books have hit #1 in categories across Amazon US, UK, CA, and AU.",
            },
            {
              icon: HeartHandshake,
              title: "You Own 100% of the Rights",
              desc: "Full work-for-hire agreement. Your name on the cover. Your royalties. Your book.",
            },
          ]}
        />

        {/* ── Packages ── */}
        <ServicePackages
          heading="Book Writing Packages"
          subheading="Straightforward pricing based on word count. No hourly rates, no surprises."
          packages={[
            {
              name: "Starter",
              price: "$2,499",
              note: "Up to 20,000 words",
              desc: "Perfect for short non-fiction, self-help guides, and business books under 100 pages.",
              features: [
                "Up to 20,000 words",
                "1 voice-capture session",
                "Chapter outline included",
                "3 revision rounds",
                "Proofread & formatted delivery",
                "Full NDA & rights transfer",
                "14-week delivery",
              ],
            },
            {
              name: "Professional",
              price: "$4,999",
              note: "Up to 50,000 words",
              desc: "Ideal for full-length non-fiction, memoirs, or genre fiction up to 200 pages.",
              features: [
                "Up to 50,000 words",
                "2 voice-capture sessions",
                "Detailed chapter outline",
                "Unlimited revisions",
                "Developmental edit included",
                "Proofread & formatted delivery",
                "Full NDA & rights transfer",
                "Dedicated project manager",
                "20-week delivery",
              ],
              featured: true,
            },
            {
              name: "Premium",
              price: "$7,999",
              note: "Up to 85,000 words",
              desc: "For full-length novels, comprehensive memoirs, and in-depth business books.",
              features: [
                "Up to 85,000 words",
                "3 voice-capture sessions",
                "Full story bible & outline",
                "Unlimited revisions",
                "Developmental + copy edit",
                "Proofread & formatted delivery",
                "Full NDA & rights transfer",
                "Priority support & manager",
                "Publishing consultation",
                "26-week delivery",
              ],
            },
          ]}
        />

        {/* ── Testimonials ── */}
        <ServiceTestimonials
          heading="Authors Who Trusted Us With Their Story"
          testimonials={[
            {
              name: "James Whitfield",
              role: "Author, The Last Harbor (Thriller)",
              initials: "JW",
              avatarColor: "bg-slate-600",
              rating: 5,
              quote:
                "I gave them a 3-page outline and a voice sample. What came back was a 72,000-word thriller that read exactly like the book I had in my head but could never get onto paper. The writer clearly understood pacing, tension, and genre conventions. Hit #1 in Thrillers on Amazon within 3 days of launch.",
            },
            {
              name: "Amara Johnson",
              role: "Author, Built From Scratch (Business)",
              initials: "AJ",
              avatarColor: "bg-amber-600",
              rating: 5,
              quote:
                "As a founder, I knew my story was worth telling — I just didn't have 6 months to write it myself. Amazon Books Publishing interviewed me, structured my story, and delivered a manuscript that's been used as a lead magnet generating thousands of leads. Worth 10x the investment.",
            },
            {
              name: "Lily Chen",
              role: "Author, Between Two Worlds (Literary Fiction)",
              initials: "LC",
              avatarColor: "bg-rose-600",
              rating: 5,
              quote:
                "I was skeptical that anyone could write a literary novel in my voice. But the discovery process was so thorough — they asked about my childhood, my influences, my sentence rhythms — that the result was indistinguishable from my own writing. I cried reading the final draft.",
            },
          ]}
        />

        {/* ── FAQs ── */}
        <ServiceFaqs
          heading="Book Writing FAQs"
          faqs={[
            {
              q: "Will the book actually sound like me?",
              a: "Yes — that's our #1 priority. We use multi-session voice interviews, sample analysis, and iterative feedback loops to capture your natural tone, vocabulary, and rhythm. Most clients say they can't tell the difference from their own writing.",
            },
            {
              q: "How many revisions are included?",
              a: "All Professional and Premium packages include unlimited revisions until you're 100% satisfied. Starter packages include 3 rounds, with additional rounds available at a flat fee.",
            },
            {
              q: "Is the NDA legally binding?",
              a: "Yes. We use a mutual NDA drafted by our legal team that covers both parties. It's fully enforceable and we've never had a confidentiality breach in our history.",
            },
            {
              q: "Can I provide chapters I've already written?",
              a: "Absolutely. Many clients have existing drafts, notes, or partially written chapters. We'll incorporate your existing work and match the style throughout the new content.",
            },
            {
              q: "Do your writers have published credentials?",
              a: "Every writer on our team has published work under their own name. We match you to a writer with demonstrated experience in your specific genre — not just a general freelancer.",
            },
            {
              q: "What if I want to change direction mid-project?",
              a: "It happens, and we plan for it. Minor direction changes are absorbed into the project. Major structural changes may affect the timeline but are handled with a change-order process, not a new contract.",
            },
            {
              q: "Do I get to review the work as it's being written?",
              a: "Yes. We deliver chapter batches (typically 3–5 chapters at a time) so you can review, give feedback, and approve as we go. You're never waiting months to see the first page.",
            },
          ]}
        />

        {/* ── CTA ── */}
        <ServiceCta
          heading="Your Book Is Waiting to Be Written"
          subheading="Book a free 30-minute consultation and we'll tell you exactly how we'd approach your book, who'd write it, and what it would cost. No obligation."
          primaryLabel="Book Free Writing Consultation"
        />
      </main>
      <SiteFooter />
    </>
  );
}
