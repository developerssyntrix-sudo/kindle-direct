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
  BookOpen,
  Globe,
  BarChart,
  Tag,
  FileCheck,
  Search,
  Rocket,
  ShieldCheck,
  Star,
  TrendingUp,
  CheckCircle2,
  Package,
  Clock,
  MessageSquare,
  Settings,
  FileSearch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Book Publishing Services — Amazon KDP Experts | Amazon Books Publishing",
  description:
    "Professional Amazon KDP publishing services. ISBN assignment, metadata optimization, global distribution, and a live book in 14 days or less.",
};

export default function BookPublishingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceHero
          badge="Book Publishing"
          title="Publish on Amazon"
          highlight="Like a Pro"
          description="We handle every technical detail of Amazon KDP publishing — from formatting and ISBN assignment to metadata optimization and global distribution. Your book, live in 14 days or less."
          serviceName="Book Publishing"
          bgImage="https://images.unsplash.com/photo-1775554817370-dc293d7e526d?q=80&w=1170&auto=format&fit=crop"
          stats={[
            { value: "2,500+", label: "Books Published" },
            { value: "40+", label: "Distribution Platforms" },
            { value: "14 Days", label: "Average Time to Live" },
            { value: "#1", label: "KDP-Certified Agency" },
          ]}
        />

        {/* Platform strip */}
        <section className="py-6 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap gap-2 items-center">
            <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest mr-2">
              Distributed On:
            </span>
            {[
              "Amazon KDP",
              "IngramSpark",
              "Draft2Digital",
              "Apple Books",
              "Google Play Books",
              "Barnes & Noble",
              "Kobo",
              "Scribd",
              "Findaway",
              "OverDrive",
            ].map((p) => (
              <span
                key={p}
                className="text-xs font-semibold bg-amazon-surface border border-border text-amazon-dark px-3 py-1 rounded-full"
              >
                {p}
              </span>
            ))}
          </div>
        </section>

        <ServiceIncludes
          heading="Complete Publishing, Done for You"
          subheading="We handle the entire technical publishing workflow so you can focus on writing."
          items={[
            {
              icon: FileCheck,
              title: "Manuscript Formatting",
              desc: "Interior formatting for eBook (ePub/MOBI) and print (PDF) to Amazon and IngramSpark specs — including ToC, headers, drop caps, and page breaks.",
            },
            {
              icon: Tag,
              title: "ISBN Assignment",
              desc: "We obtain and register ISBNs for all formats — eBook, paperback, and hardcover — under your author name or imprint.",
            },
            {
              icon: Search,
              title: "KDP Keyword & Category Research",
              desc: "Data-driven selection of the 7 keywords and 2 categories that maximize your book's discoverability on Amazon.",
            },
            {
              icon: Settings,
              title: "KDP Account Setup & Upload",
              desc: "Full KDP setup from scratch, or we work inside your existing account. We handle every field, setting, and pricing decision.",
            },
            {
              icon: Globe,
              title: "Global Marketplace Distribution",
              desc: "Simultaneous publishing to Amazon US, UK, CA, AU, DE, FR, ES, IT, JP, and 40+ other storefronts.",
            },
            {
              icon: Package,
              title: "Print-on-Demand Setup",
              desc: "Paperback and hardcover POD setup including trim size, bleed, spine width, and proof ordering.",
            },
            {
              icon: BarChart,
              title: "Pricing Strategy Consultation",
              desc: "We advise on launch pricing, KDP Select enrollment, and royalty-maximizing strategies across all formats.",
            },
            {
              icon: FileSearch,
              title: "Book Description Copywriting",
              desc: "A professionally written, keyword-rich book description designed to convert Amazon browsers into buyers.",
            },
            {
              icon: BookOpen,
              title: "Author Page Setup",
              desc: "Amazon Author Central profile — bio, photo, editorial reviews, series linking, and Goodreads sync.",
            },
          ]}
        />

        <ServiceProcess
          heading="Live on Amazon in 14 Days"
          subheading="Our publishing workflow is built for speed without sacrificing quality."
          steps={[
            {
              num: "01",
              icon: MessageSquare,
              title: "Publishing Briefing",
              desc: "We collect your manuscript, cover, author bio, and publishing preferences in a structured briefing form.",
            },
            {
              num: "02",
              icon: FileCheck,
              title: "Format & Proof",
              desc: "We format your book for all required formats and order a physical proof copy for your approval.",
            },
            {
              num: "03",
              icon: Search,
              title: "Metadata Optimization",
              desc: "Keyword research, category selection, and description copywriting completed before upload.",
            },
            {
              num: "04",
              icon: Rocket,
              title: "Upload & Publish",
              desc: "We upload to KDP and all distribution platforms, with all metadata, pricing, and settings configured.",
            },
          ]}
        />

        <ServiceWhyUs
          heading="Why Our Publishing"
          highlight="Gets Results"
          body="KDP has hundreds of settings, pitfalls, and hidden optimizations most authors don't know exist. We've published 2,500+ books and know exactly what moves the needle."
          points={[
            {
              icon: Search,
              title: "Data-Driven Keyword Strategy",
              desc: "We use Publisher Rocket and our proprietary data to identify low-competition, high-traffic keywords — not guesswork.",
            },
            {
              icon: TrendingUp,
              title: "Launch-Day Category Domination",
              desc: "Our category selection strategy consistently puts our clients on Bestseller lists within 48–72 hours of launch.",
            },
            {
              icon: ShieldCheck,
              title: "Compliance Guaranteed",
              desc: "We know Amazon's content guidelines inside out — your book will never be rejected or pulled for compliance issues.",
            },
            {
              icon: Globe,
              title: "True Global Distribution",
              desc: "Beyond Amazon — we publish to IngramSpark, Draft2Digital, and Apple Books simultaneously for maximum reach.",
            },
            {
              icon: Clock,
              title: "14-Day Turnaround, Guaranteed",
              desc: "We guarantee your book is live within 14 business days of receiving all materials. No exceptions, no excuses.",
            },
            {
              icon: Star,
              title: "Royalty Maximization",
              desc: "We configure your pricing, territories, and enrollment options to maximize your royalty rate from day one.",
            },
          ]}
        />

        <ServicePackages
          heading="Publishing Packages"
          subheading="One-time fees. No monthly subscriptions. Your book, live globally."
          packages={[
            {
              name: "eBook",
              price: "$499",
              note: "One-time fee",
              desc: "Publish your eBook to Amazon KDP and major digital platforms worldwide.",
              features: [
                "ePub & MOBI formatting",
                "KDP upload & metadata",
                "Keyword & category research",
                "Book description copywriting",
                "Amazon Author Central setup",
                "Global digital distribution",
                "Pricing strategy consultation",
                "14-day delivery",
              ],
            },
            {
              name: "eBook + Paperback",
              price: "$999",
              note: "One-time fee",
              desc: "The complete digital + print setup — the most popular choice for maximum reach.",
              features: [
                "Everything in eBook",
                "Print-ready PDF formatting",
                "Paperback KDP setup",
                "Physical proof ordering",
                "IngramSpark distribution",
                "ISBN assignment (all formats)",
                "Spine & trim optimization",
                "Priority support",
              ],
              featured: true,
            },
            {
              name: "Full Formats",
              price: "$1,799",
              note: "One-time fee",
              desc: "eBook + Paperback + Hardcover — complete distribution across every reading format.",
              features: [
                "Everything in eBook + Paperback",
                "Hardcover formatting & setup",
                "Case wrap design coordination",
                "Draft2Digital distribution",
                "Apple Books & Google Play",
                "Kobo, Scribd & 30+ more",
                "Quarterly royalty review",
                "12-month listing support",
              ],
            },
          ]}
        />

        <ServiceTestimonials
          heading="Authors Who Went Live With Us"
          testimonials={[
            {
              name: "David Lekowitz",
              role: "Author, Zero to Seven Figures",
              initials: "DL",
              avatarColor: "bg-amber-600",
              rating: 5,
              quote:
                "I uploaded my book to KDP myself first and got rejected twice. Then I hired Amazon Books Publishing — they reformatted everything, rewrote my description, and had me live in 9 days. My book hit #1 in Entrepreneurship within the first week.",
            },
            {
              name: "Fatima Al-Rashid",
              role: "Author, The Healing Path (Self-Help)",
              initials: "FA",
              avatarColor: "bg-teal-600",
              rating: 5,
              quote:
                "Their keyword research alone was worth the price. I was invisible on Amazon before — now my book comes up on the first page for three of my core search terms. Sales went from 5/month to 200+/month after their optimization.",
            },
            {
              name: "Marcus Thompson",
              role: "Author, Storm & Stone (Fantasy)",
              initials: "MT",
              avatarColor: "bg-blue-600",
              rating: 5,
              quote:
                "What I appreciated most was how they handled the IngramSpark setup alongside KDP. My book is now in brick-and-mortar bookstores I never thought would carry it. The wide distribution strategy changed everything for my series.",
            },
          ]}
        />

        <ServiceFaqs
          heading="Publishing FAQs"
          faqs={[
            {
              q: "How long does it take to get my book live on Amazon?",
              a: "We guarantee your book is live within 14 business days of receiving all materials (manuscript, cover, author info). Expedited 7-day turnarounds are available in our Full Formats package.",
            },
            {
              q: "Do I need my own KDP account?",
              a: "Yes — royalties need to flow to your account directly. We work inside your KDP account (with your permission) or help you set one up if you don't have one. We never hold your royalties.",
            },
            {
              q: "What file formats do you accept for the manuscript?",
              a: "We accept Word (.docx), Google Docs exports, or PDF. If you have a partially formatted file, we'll clean it up as part of our process.",
            },
            {
              q: "Will my book be available outside Amazon?",
              a: "Yes — all packages include distribution beyond Amazon. Our eBook package distributes to Apple Books, Google Play, Kobo, and more. Our Full Formats package adds IngramSpark for print distribution to bookstores.",
            },
            {
              q: "Do I keep 100% of my royalties?",
              a: "Absolutely. We charge a one-time fee for our service and never take a percentage of your royalties. All revenue from your book goes directly to you.",
            },
            {
              q: "Can you help with a book I've already published but that isn't performing?",
              a: "Yes — we offer a publishing audit and re-optimization service. We review your keywords, categories, description, and pricing and rebuild your listing for better performance.",
            },
          ]}
        />

        <ServiceCta
          heading="Ready to Publish Your Book?"
          subheading="Get a free publishing consultation — we'll review your manuscript, recommend the right package, and give you a live timeline."
          primaryLabel="Get Free Publishing Consultation"
        />
      </main>
      <SiteFooter />
    </>
  );
}
