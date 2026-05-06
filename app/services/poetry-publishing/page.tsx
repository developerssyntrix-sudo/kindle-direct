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
  Star,
  Globe,
  Clock,
  Layers,
  MessageSquare,
  Rocket,
  CheckCircle2,
  PenLine,
  FileEdit,
  Search,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Heart,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Poetry Publishing Services | Amazon Books Publishing",
  description:
    "Publish your poetry collection on Amazon KDP and globally. Editorial curation, interior typesetting, cover design, and marketing for poets who mean business.",
};

const poetryStyles = [
  { style: "Free Verse", desc: "Contemporary, unrhymed poetry" },
  { style: "Spoken Word", desc: "Performance-oriented collections" },
  { style: "Haiku & Short Form", desc: "Minimalist, image-driven poetry" },
  { style: "Narrative Poetry", desc: "Story-based verse and epics" },
  { style: "Confessional", desc: "Personal, autobiographical poetry" },
  { style: "Experimental", desc: "Visual, concrete, and hybrid forms" },
  { style: "Lyric Poetry", desc: "Song-like, emotional expression" },
  { style: "Prose Poetry", desc: "Blended narrative and verse" },
];

export default function PoetryPublishingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceHero
          badge="Poetry Publishing"
          title="Give Your Poetry"
          highlight="the Stage It Deserves"
          description="We treat poetry with the reverence it deserves. From editorial curation and artful typesetting to cover design and Amazon distribution — we help poets publish collections that readers actually discover, buy, and love."
          serviceName="Poetry Publishing"
          bgImage="https://images.unsplash.com/photo-1591079071536-b005da4a9677?q=80&w=1170&auto=format&fit=crop"
          stats={[
            { value: "200+", label: "Poetry Collections Published" },
            { value: "40+", label: "Distribution Platforms" },
            { value: "4.8★", label: "Average Collection Rating" },
            { value: "21 Days", label: "Avg. Time to Live" },
          ]}
        />

        {/* Poetry styles */}
        <section className="py-10 md:py-15 bg-amazon-dark">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
                Poetry Styles
              </p>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Every Voice, Every Form
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {poetryStyles.map((p) => (
                <div
                  key={p.style}
                  className="bg-amazon-navy/50 border border-white/5 hover:border-amazon-orange/30 rounded-xl p-4 text-center transition-all"
                >
                  <p className="text-white font-bold text-sm mb-1">{p.style}</p>
                  <p className="text-white/40 text-xs">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceIncludes
          heading="Everything a Poetry Collection Needs"
          subheading="From manuscript to live listing — handled with the care and craft poetry demands."
          items={[
            {
              icon: PenLine,
              title: "Editorial Curation Consultation",
              desc: "A poetry editor reviews your collection and advises on sequencing, flow, thematic arc, and which poems to lead with or cut.",
            },
            {
              icon: FileEdit,
              title: "Line & Copy Editing",
              desc: "We check for consistency in punctuation style, capitalization, indentation, and line break conventions — respecting your deliberate choices.",
            },
            {
              icon: Sparkles,
              title: "Artful Interior Typesetting",
              desc: "Poetry requires specialist typesetting — stanza spacing, long-line handling, page break decisions, and font choices that honor the work.",
            },
            {
              icon: BookOpen,
              title: "Cover Design",
              desc: "A literary, striking cover designed to position your collection in the poetry market — not just aesthetically pleasing but commercially effective.",
            },
            {
              icon: FileEdit,
              title: "Back Cover & Blurb Writing",
              desc: "A compelling back-cover description and poet bio that sells the book without overselling it — always with your voice preserved.",
            },
            {
              icon: Search,
              title: "Amazon Keyword & Category Research",
              desc: "Poetry has a defined category system on Amazon. We identify the highest-visibility subcategories and keywords for your collection.",
            },
            {
              icon: Globe,
              title: "Multi-Platform Distribution",
              desc: "Published to Amazon KDP, IngramSpark (bookstores & libraries), Apple Books, Google Play, Kobo, Scribd, and 30+ additional platforms.",
            },
            {
              icon: Star,
              title: "Literary Review Outreach",
              desc: "We submit your collection to poetry blogs, literary journals, and Goodreads reviewers for early coverage and credibility.",
            },
            {
              icon: TrendingUp,
              title: "Launch Marketing Toolkit",
              desc: "Social media quote graphics, an email launch sequence template, and a BookTok strategy guide tailored for poetry collections.",
            },
          ]}
        />

        <ServiceProcess
          heading="From Manuscript to Celebrated Collection"
          subheading="A deliberate, craft-respecting process for publishing poetry the right way."
          steps={[
            {
              num: "01",
              icon: MessageSquare,
              title: "Editorial Consultation",
              desc: "We review your full collection and provide structural guidance — sequencing, cuts, additions, and thematic cohesion.",
            },
            {
              num: "02",
              icon: FileEdit,
              title: "Editing & Curation",
              desc: "Copy editing for consistency, plus final curation of the collection order for maximum emotional and thematic impact.",
            },
            {
              num: "03",
              icon: Layers,
              title: "Design & Typesetting",
              desc: "Interior typesetting and cover design — the physical beauty of your book matters as much as its content.",
            },
            {
              num: "04",
              icon: Search,
              title: "Metadata & Strategy",
              desc: "Keywords, categories, description, and pricing all researched and configured for maximum visibility.",
            },
            {
              num: "05",
              icon: Rocket,
              title: "Publish & Promote",
              desc: "Your collection goes live across all platforms — with your launch toolkit ready to drive the first wave of readers.",
            },
          ]}
        />

        <ServiceWhyUs
          heading="Why Poets Choose"
          highlight="Amazon Books Publishing"
          body="Poetry deserves more than a template-based publishing service. Our poetry specialists understand the form, the market, and the audience — and treat your work accordingly."
          points={[
            {
              icon: Heart,
              title: "Poetry-Specialist Editorial Team",
              desc: "Our poetry editors have MFAs, published collections, and deep familiarity with contemporary poetry markets — not generalists making guesses.",
            },
            {
              icon: Sparkles,
              title: "Typesetting That Honors Your Work",
              desc: "We don't use stock book templates. Every poetry collection gets custom typesetting decisions made for that specific collection's formal needs.",
            },
            {
              icon: Target,
              title: "Real Poetry Market Knowledge",
              desc: "We know which Amazon subcategories are most competitive, which are emerging, and which keywords bring poetry readers who actually buy.",
            },
            {
              icon: Globe,
              title: "Library & Academic Distribution",
              desc: "Through IngramSpark, your collection is available to university libraries, public libraries, and academic publishers via standard wholesale channels.",
            },
            {
              icon: ShieldCheck,
              title: "Rights Always Yours",
              desc: "You retain full copyright. We never ask for licensing rights, revenue shares, or publishing exclusivity. Your words, your royalties.",
            },
            {
              icon: TrendingUp,
              title: "BookTok Poetry Strategy",
              desc: "Poetry is thriving on TikTok — we know exactly how to position your collection for BookTok and #poetryTok discovery.",
            },
          ]}
        />

        <ServicePackages
          heading="Poetry Publishing Packages"
          subheading="Everything you need to publish a collection that readers can find, buy, and fall in love with."
          packages={[
            {
              name: "Short Collection",
              price: "$999",
              note: "Up to 30 poems",
              desc: "Perfect for debut chapbooks, themed micro-collections, or digital-only releases.",
              features: [
                "Editorial curation consultation",
                "Copy editing (consistency)",
                "Interior typesetting",
                "eBook formatting (ePub)",
                "Cover design",
                "KDP publishing & metadata",
                "Amazon keyword research",
                "Back cover copywriting",
                "3 revision rounds",
                "21-day delivery",
              ],
            },
            {
              name: "Full Collection",
              price: "$1,799",
              note: "Up to 80 poems",
              desc: "The complete poetry publishing experience — print, digital, and full distribution.",
              features: [
                "Everything in Short Collection",
                "Full print formatting (PDF)",
                "Paperback KDP setup",
                "IngramSpark distribution",
                "Apple Books & Google Play",
                "Literary review outreach (10 outlets)",
                "Social media quote graphics (5)",
                "Launch email template",
                "Unlimited revisions",
                "Priority project manager",
                "18-day delivery",
              ],
              featured: true,
            },
            {
              name: "Full + Marketing",
              price: "$2,999",
              note: "Up to 80 poems",
              desc: "Publication plus a complete launch marketing campaign — for poets serious about building a readership.",
              features: [
                "Everything in Full Collection",
                "BookTok outreach (5 creators)",
                "Goodreads giveaway setup",
                "30-day AMS ad campaign",
                "BookBub submission",
                "Poetry blog PR campaign",
                "Author social media kit",
                "Launch email sequence (3 emails)",
                "Monthly performance report",
                "3-month listing support",
              ],
            },
          ]}
        />

        <ServiceTestimonials
          heading="Poets Who Found Their Readers"
          testimonials={[
            {
              name: "Aisha Bakr",
              role: "Author, The Quiet Mind (Poetry Collection)",
              initials: "AB",
              avatarColor: "bg-teal-600",
              rating: 5,
              quote:
                "I'd self-published a chapbook before and it looked — fine. When Amazon Books Publishing typeset my full collection, it was transformed. The way they handled my long-line poems and the breathing space they gave the stanzas made the reading experience completely different. Readers comment on the design constantly.",
            },
            {
              name: "Jordan Ellis",
              role: "Author, Concrete & Grace (Spoken Word)",
              initials: "JE",
              avatarColor: "bg-purple-600",
              rating: 5,
              quote:
                "My spoken word collection was a totally different challenge — they not only got the typesetting right, they helped me sequence it for the reading experience rather than the performance experience, which I hadn't considered. The editorial consultation was worth the entire price of the package.",
            },
            {
              name: "Mei Lin Xu",
              role: "Author, Still Water (Haiku Collection)",
              initials: "ML",
              avatarColor: "bg-indigo-600",
              rating: 5,
              quote:
                "Publishing haiku on Amazon is tricky — the category structure makes discoverability difficult. Their keyword and category research put my collection in three subcategories I'd never have found on my own, and I hit #1 in one of them within 48 hours. Sales have been consistent for 8 months.",
            },
          ]}
        />

        <ServiceFaqs
          heading="Poetry Publishing FAQs"
          faqs={[
            {
              q: "Do you publish poetry in any style or form?",
              a: "Yes — we publish all poetry forms: free verse, rhyming, haiku, spoken word, narrative poetry, concrete poetry, prose poetry, and hybrid works. Our editors are matched based on the form your collection uses.",
            },
            {
              q: "Can I include my own artwork or photography?",
              a: "Absolutely. Many poetry collections include visual art. We coordinate the integration of your artwork into the layout and ensure it's print-ready and properly formatted for both eBook and print.",
            },
            {
              q: "Will my poetry collection sell on Amazon?",
              a: "Poetry has a genuine, growing audience on Amazon — especially on BookTok. Our keyword and category research is designed to get your collection in front of readers who are actively searching for poetry. Results vary, but we optimize for discoverability.",
            },
            {
              q: "Can I submit poems that have been previously published in literary journals?",
              a: "Yes — with your rights verification. Many literary journals publish First North American Serial Rights only, meaning you retain the right to include the poem in a collection. We advise you to verify rights for each poem before inclusion.",
            },
            {
              q: "How many poems should a collection have?",
              a: "Standard poetry collections range from 30–80 poems. Chapbooks are typically 15–30 poems. There's no rule, but we'll advise you on what length makes sense for your audience, market, and thematic arc during the editorial consultation.",
            },
            {
              q: "Do I need an ISBN for a poetry collection?",
              a: "Yes, if you want library distribution, bookstore sales, or to appear in book databases like Bowker. We include ISBN assignment in all Full Collection and Full + Marketing packages.",
            },
          ]}
        />

        <ServiceCta
          heading="Your Poetry Deserves to Be Read"
          subheading="Book a free editorial consultation — we'll review a selection of your poems, advise on collection structure, and walk you through exactly how we'd publish your work."
          primaryLabel="Book Free Poetry Consultation"
        />
      </main>
      <SiteFooter />
    </>
  );
}
