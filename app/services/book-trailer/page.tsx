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
  Layers,
  MessageSquare,
  Rocket,
  Star,
  Clock,
  Globe,
  Zap,
  CheckCircle2,
  FileEdit,
  Headphones,
  Eye,
  Sparkles,
  Target,
  RefreshCw,
  BarChart,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Book Trailer Production Services | Amazon Books Publishing",
  description:
    "Cinematic book trailers that stop the scroll — concept, script, voiceover, motion graphics, and social media cuts included. Starting at $599.",
};

const trailerTypes = [
  {
    name: "Lyric / Quote Trailer",
    duration: "30–60 sec",
    desc: "Powerful quotes, text overlays, and atmospheric music. Perfect for romance, literary, and poetry.",
    color: "from-purple-900 to-indigo-900",
  },
  {
    name: "Cinematic Trailer",
    duration: "60–90 sec",
    desc: "Stock footage, voiceover, and soundtrack to create a movie-trailer feel. Ideal for thrillers, fantasy, and sci-fi.",
    color: "from-slate-900 to-zinc-800",
  },
  {
    name: "Author Interview Trailer",
    duration: "60–120 sec",
    desc: "You on camera with B-roll — authentic, personal, and compelling. Best for non-fiction, memoir, and business.",
    color: "from-amber-900 to-orange-900",
  },
  {
    name: "Animated Concept Trailer",
    duration: "45–90 sec",
    desc: "Custom motion graphics and illustrated characters that bring your book's world to life.",
    color: "from-teal-900 to-emerald-900",
  },
];

export default function BookTrailerPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceHero
          badge="Book Trailer Production"
          title="Cinematic Book Trailers"
          highlight="That Stop the Scroll"
          description="A great book trailer turns browsers into buyers. We produce genre-matched, emotionally compelling video content — from the concept and script to the final cut delivered in every social format."
          serviceName="Book Trailer"
          bgImage="https://images.unsplash.com/photo-1773009732035-34790a7c2b36?q=80&w=1170&auto=format&fit=crop"
          stats={[
            { value: "400+", label: "Trailers Produced" },
            { value: "5M+", label: "Combined Views" },
            { value: "4 Styles", label: "Trailer Types" },
            { value: "14 Days", label: "Delivery Guarantee" },
          ]}
        />

        {/* Trailer types */}
        <section className="py-10 md:py-15 bg-amazon-dark">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-9">
              <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
                Trailer Styles
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Four Formats,{" "}
                <span className="text-amazon-orange">One Perfect Match</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {trailerTypes.map((t) => (
                <div
                  key={t.name}
                  className={`relative bg-gradient-to-br ${t.color} rounded-2xl p-5 border border-white/10 hover:border-amazon-orange/30 transition-all group cursor-pointer overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-amazon-orange/0 group-hover:bg-amazon-orange/5 transition-all" />
                  <span className="text-amazon-orange text-[10px] font-bold uppercase tracking-widest border border-amazon-orange/30 px-2 py-0.5 rounded-full mb-3 inline-block">
                    {t.duration}
                  </span>
                  <h3 className="text-white font-bold text-sm mb-2">{t.name}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceIncludes
          heading="Everything in Every Trailer"
          subheading="No production costs hidden. No add-ons required. Full creative production included."
          items={[
            {
              icon: MessageSquare,
              title: "Concept Development",
              desc: "We workshop the visual concept, emotional arc, and hook of your trailer based on your book's tone and target audience.",
            },
            {
              icon: FileEdit,
              title: "Script Writing",
              desc: "A professionally written script including narration, on-screen text, pacing notes, and visual direction.",
            },
            {
              icon: Headphones,
              title: "Professional Voiceover",
              desc: "Genre-matched voiceover talent selected from our roster — or you can provide your own. Studio-quality recording.",
            },
            {
              icon: Layers,
              title: "Premium Stock Footage",
              desc: "Licensed 4K stock footage from premium libraries (Storyblocks, Shutterstock) — no watermarks, no copyright issues.",
            },
            {
              icon: Sparkles,
              title: "Motion Graphics & Titles",
              desc: "Animated title cards, text overlays, and graphic elements designed to match your book cover and brand.",
            },
            {
              icon: Headphones,
              title: "Licensed Soundtrack",
              desc: "Fully licensed background music matched to your genre and trailer's emotional tone — royalty-free for all platforms.",
            },
            {
              icon: Eye,
              title: "Color Grading & Sound Mix",
              desc: "Professional post-production color grading and audio mastering to match broadcast/streaming quality standards.",
            },
            {
              icon: RefreshCw,
              title: "Unlimited Revision Rounds",
              desc: "We revise until you love every frame. Every package includes unlimited rounds on the cut before final delivery.",
            },
            {
              icon: Globe,
              title: "All Platform Deliverables",
              desc: "Final cut delivered in: full HD (16:9 for YouTube), square (1:1 for Instagram), and vertical (9:16 for TikTok/Reels).",
            },
          ]}
        />

        <ServiceProcess
          heading="From Brief to Final Cut"
          subheading="A streamlined creative production process designed for authors, not film students."
          steps={[
            {
              num: "01",
              icon: MessageSquare,
              title: "Creative Brief",
              desc: "You complete our detailed brief — genre, tone, key themes, reference trailers, and any must-include elements.",
            },
            {
              num: "02",
              icon: FileEdit,
              title: "Concept & Script",
              desc: "We deliver a written concept and full script for your approval before a single frame is produced.",
            },
            {
              num: "03",
              icon: Sparkles,
              title: "Production",
              desc: "Footage, voiceover, music, and graphics assembled into a first cut — delivered within 7 business days.",
            },
            {
              num: "04",
              icon: Eye,
              title: "Review & Revise",
              desc: "You review the cut and provide feedback. We revise until every frame feels exactly right.",
            },
            {
              num: "05",
              icon: Rocket,
              title: "Final Delivery",
              desc: "All platform formats delivered in 4K — YouTube, Instagram, TikTok, and Facebook ready from day one.",
            },
          ]}
        />

        <ServiceWhyUs
          heading="Why Our Trailers"
          highlight="Convert Viewers to Buyers"
          body="A book trailer is only worth making if it actually drives sales. We build every trailer with conversion in mind — not just aesthetics."
          points={[
            {
              icon: Target,
              title: "Genre-Matched Creative Direction",
              desc: "A thriller trailer and a romance trailer should look and feel nothing alike. Our creative directors specialize by genre.",
            },
            {
              icon: TrendingUp,
              title: "Built for Algorithm Performance",
              desc: "We know what TikTok, Instagram Reels, and YouTube Shorts reward — pacing, hooks, and format specs baked in from day one.",
            },
            {
              icon: CheckCircle2,
              title: "100% Copyright Clear",
              desc: "Every asset — music, footage, fonts — is fully licensed. You can post your trailer anywhere without a copyright strike.",
            },
            {
              icon: Clock,
              title: "14-Day Delivery Guarantee",
              desc: "From approved script to delivered final cut in 14 business days or less. Rush 7-day delivery available in Premium.",
            },
            {
              icon: Zap,
              title: "Multi-Platform from Day One",
              desc: "We don't deliver one file — we deliver every format you need for every platform, all included in the base price.",
            },
            {
              icon: Star,
              title: "Proven Viral Results",
              desc: "Our trailers have collectively generated 5M+ views on BookTok and Bookstagram. We know what makes readers share.",
            },
          ]}
        />

        <ServicePackages
          heading="Book Trailer Packages"
          subheading="One-time production fee. All rights transferred. Yours to use everywhere, forever."
          packages={[
            {
              name: "Lyric Trailer",
              price: "$599",
              note: "One-time fee",
              desc: "A stunning quote and text-based trailer with atmospheric visuals and music. Perfect for social media teasers.",
              features: [
                "30–60 second finished trailer",
                "Script & concept development",
                "Premium stock footage",
                "Licensed soundtrack",
                "Motion text & graphics",
                "Color grading",
                "3 format deliverables",
                "Unlimited revisions",
                "14-day delivery",
              ],
            },
            {
              name: "Cinematic Trailer",
              price: "$999",
              note: "One-time fee",
              desc: "A full movie-style trailer with voiceover, cinematic footage, and sound design. The industry standard.",
              features: [
                "60–90 second cinematic trailer",
                "Everything in Lyric",
                "Professional voiceover artist",
                "Cinematic color grading",
                "Sound design & audio mix",
                "Cover reveal integration",
                "Social media caption copy",
                "Priority support",
              ],
              featured: true,
            },
            {
              name: "Premium Production",
              price: "$1,799",
              note: "One-time fee",
              desc: "A premium, broadcast-quality trailer with custom graphics, multiple scenes, and a full marketing launch kit.",
              features: [
                "90–120 second premium trailer",
                "Everything in Cinematic",
                "Custom motion graphic elements",
                "Teaser clip (15 sec)",
                "Full-length + short cut",
                "Animated book cover sequence",
                "5 platform format deliverables",
                "Social media launch toolkit",
                "7-day rush delivery",
                "1-year revision access",
              ],
            },
          ]}
        />

        <ServiceTestimonials
          heading="Authors Who Went Viral"
          testimonials={[
            {
              name: "Priya Rajan",
              role: "Author, Bloom & Ashes (Romance)",
              initials: "PR",
              avatarColor: "bg-rose-600",
              rating: 5,
              quote:
                "My Cinematic Trailer hit 180,000 views on TikTok organically in the first week. Readers were tagging friends in the comments demanding I publish faster. The creative direction was exactly right for the romance genre — emotional, gorgeous, and completely hooked you in 4 seconds.",
            },
            {
              name: "Marcus Thompson",
              role: "Author, Storm & Stone (Fantasy)",
              initials: "MT",
              avatarColor: "bg-blue-600",
              rating: 5,
              quote:
                "They produced a trailer that looked like it was made for a Netflix adaptation. The fantasy footage they sourced was stunning, the voiceover was perfectly cast, and the pacing built tension exactly how I'd have wanted. It's the best marketing asset I've ever had for my books.",
            },
            {
              name: "Lin Chen",
              role: "Author, Between Two Worlds (Literary Fiction)",
              initials: "LC",
              avatarColor: "bg-orange-600",
              rating: 5,
              quote:
                "I wasn't sure a literary novel could have a compelling trailer. I was completely wrong. The concept they came up with — the slow pull through the pages with quotes emerging from the text — was something I'd never seen before. It's been shared by three literary blogs and two NPR book accounts.",
            },
          ]}
        />

        <ServiceFaqs
          heading="Book Trailer FAQs"
          faqs={[
            {
              q: "How long should a book trailer be?",
              a: "For social media (TikTok, Reels, Shorts), 30–60 seconds performs best. For YouTube and your website, 60–90 seconds is ideal. We deliver all lengths so you have the right asset for each platform.",
            },
            {
              q: "Do I own the trailer after delivery?",
              a: "Yes — 100% of the rights transfer to you upon payment. You can post it anywhere, modify it, use it in ads, and license it however you choose.",
            },
            {
              q: "Can I use my book trailer for paid social media ads?",
              a: "Absolutely. Every asset we use — footage, music, fonts — is licensed for commercial advertising use. You'll never get a copyright strike or claim when running paid ads.",
            },
            {
              q: "Do you cast the voiceover or do I choose?",
              a: "We present 3 voiceover options that match your genre and tone. You select your preferred voice — or we can work with a specific voice artist you've already identified.",
            },
            {
              q: "Can I see examples of your previous trailers?",
              a: "Yes — we share a portfolio of recent trailers during your consultation. We can show you genre-specific examples so you can assess fit before committing.",
            },
            {
              q: "What if I want changes after the final delivery?",
              a: "Unlimited revisions are included throughout the production process. After final delivery, our Premium package includes 1-year revision access for minor updates like release dates or added reviews.",
            },
          ]}
        />

        <ServiceCta
          heading="Lights, Camera, Bestseller"
          subheading="Let's produce a trailer that makes readers buy before the credits roll. Book a free creative consultation and we'll walk you through concept ideas for your specific book."
          primaryLabel="Book Free Trailer Consultation"
        />
      </main>
      <SiteFooter />
    </>
  );
}
