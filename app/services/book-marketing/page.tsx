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
  TrendingUp,
  Target,
  Star,
  Users,
  MessageSquare,
  BarChart,
  Globe,
  Search,
  Rocket,
  Mail,
  FileSearch,
  CheckCircle2,
  Zap,
  Clock,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Book Marketing Services — Amazon Ads & Launch Strategy | Amazon Books Publishing",
  description:
    "Data-driven Amazon book marketing — AMS ads, ARC campaigns, BookTok strategy, and launch week execution. Turn your book into a bestseller.",
};

export default function BookMarketingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceHero
          badge="Book Marketing"
          title="Amazon Book Marketing"
          highlight="That Actually Sells Books"
          description="We build and execute data-driven Amazon marketing campaigns — AMS ads, ARC programs, BookTok outreach, email launches, and review generation strategies that turn new releases into bestsellers."
          serviceName="Book Marketing"
          bgImage="https://images.unsplash.com/photo-1647529735399-c922b8c3f7c5?q=80&w=1170&auto=format&fit=crop"
          stats={[
            { value: "150+", label: "Bestseller Launches" },
            { value: "4.2x", label: "Average ROAS on AMS" },
            { value: "300%", label: "Avg. Sales Lift in 30 Days" },
            { value: "72 Hrs", label: "Bestseller List Time" },
          ]}
        />

        {/* Channel strip */}
        <section className="py-6 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap gap-2 items-center">
            <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest mr-2">
              Channels:
            </span>
            {[
              "Amazon Ads (AMS)",
              "ARC Campaigns",
              "BookTok / TikTok",
              "Bookstagram",
              "Email Campaigns",
              "BookBub",
              "Goodreads",
              "Author Newsletter",
              "Press & PR",
              "Podcast Outreach",
            ].map((c) => (
              <span
                key={c}
                className="text-xs font-semibold bg-amazon-surface border border-border text-amazon-dark px-3 py-1 rounded-full"
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        <ServiceIncludes
          heading="A Complete Marketing Arsenal"
          subheading="From pre-launch buzz to post-launch momentum — we own the entire marketing calendar."
          items={[
            {
              icon: Search,
              title: "Amazon Keyword & ASIN Research",
              desc: "Deep-dive competitive analysis to identify the highest-converting keywords and competitor ASINs for your ad targeting.",
            },
            {
              icon: Target,
              title: "Amazon AMS Campaign Setup",
              desc: "Sponsored Product, Sponsored Brand, and Display ad campaigns built with proven bid strategies and A/B tested copy.",
            },
            {
              icon: BarChart,
              title: "AMS Campaign Management",
              desc: "Weekly optimization of bids, keywords, and budgets to keep your ROAS climbing and ACoS dropping over time.",
            },
            {
              icon: Users,
              title: "ARC Campaign Management",
              desc: "We recruit, brief, and coordinate 25–100+ Advance Review Copy readers to generate verified reviews before and during launch.",
            },
            {
              icon: MessageSquare,
              title: "BookTok & Bookstagram Outreach",
              desc: "Targeted influencer outreach to book-focused TikTok and Instagram creators — we handle the pitching, coordination, and follow-up.",
            },
            {
              icon: Mail,
              title: "Launch Email Sequence",
              desc: "A multi-part launch email sequence written, designed, and sent via your list (or we help you build one) to drive launch-week sales.",
            },
            {
              icon: Star,
              title: "Review Generation Strategy",
              desc: "Compliant review-building campaigns using ARC readers, email follow-ups, and Author Central — never black-hat tactics.",
            },
            {
              icon: Globe,
              title: "BookBub & Promo Sites",
              desc: "We handle submissions and coordination for BookBub Featured Deals, Freebooksy, Bargain Booksy, and 20+ promotional sites.",
            },
            {
              icon: FileSearch,
              title: "Monthly Performance Reporting",
              desc: "Clear monthly reports showing ad spend, ROAS, sales velocity, review count, and ranking movements — with strategic recommendations.",
            },
          ]}
        />

        <ServiceProcess
          heading="From Launch to Bestseller"
          subheading="A proven marketing sequence that builds momentum before, during, and after your launch."
          steps={[
            {
              num: "01",
              icon: FileSearch,
              title: "Book & Market Audit",
              desc: "We analyze your book, cover, listing, and competition to identify the exact levers that will drive your growth.",
            },
            {
              num: "02",
              icon: Target,
              title: "Strategy & Calendar Build",
              desc: "A complete 90-day marketing calendar with all channels, dates, budgets, and owners mapped out.",
            },
            {
              num: "03",
              icon: Users,
              title: "Pre-Launch ARC & Buzz",
              desc: "ARC campaign, influencer outreach, and pre-orders set up in the 4–6 weeks before your launch date.",
            },
            {
              num: "04",
              icon: Rocket,
              title: "Launch Week Execution",
              desc: "Full launch week management — AMS ads live, email sends, social posts, and real-time ranking monitoring.",
            },
            {
              num: "05",
              icon: TrendingUp,
              title: "Ongoing Growth Management",
              desc: "Weekly AMS optimization, new keyword expansion, promotional site bookings, and monthly strategy reviews.",
            },
          ]}
        />

        <ServiceWhyUs
          heading="Why Our Marketing"
          highlight="Outperforms the Rest"
          body="Anyone can run Amazon ads. We run them profitably — and we combine AMS with every other high-leverage channel to create compounding launch momentum."
          points={[
            {
              icon: Zap,
              title: "Integrated Multi-Channel Approach",
              desc: "We don't just run Amazon ads — we combine AMS, ARC, social, email, and promo sites for a launch that builds from multiple directions simultaneously.",
            },
            {
              icon: BarChart,
              title: "Profitable AMS Management",
              desc: "Our average client ROAS is 4.2x. We optimize weekly, kill losing keywords fast, and scale what's working — your budget is never wasted.",
            },
            {
              icon: Users,
              title: "Real ARC Reader Network",
              desc: "We maintain an active network of 2,000+ verified ARC readers segmented by genre — your book gets reviews from actual target readers.",
            },
            {
              icon: CheckCircle2,
              title: "100% TOS-Compliant Tactics",
              desc: "We've never had a client's book or account flagged by Amazon. Every tactic we use is within Amazon's Terms of Service — period.",
            },
            {
              icon: Clock,
              title: "72-Hour Bestseller Guarantee",
              desc: "Our launch strategy is specifically engineered to hit a Bestseller badge within the first 72 hours of release on qualifying titles.",
            },
            {
              icon: HeartHandshake,
              title: "Full Transparency on Spend",
              desc: "You own the ad accounts. We never pool budgets. Every dollar is tracked and reported — you know exactly where it went.",
            },
          ]}
        />

        <ServicePackages
          heading="Marketing Packages"
          subheading="Monthly retainer or one-time launch packages — built around your goals and budget."
          packages={[
            {
              name: "Launch Boost",
              price: "$799",
              note: "One-time launch package",
              desc: "Everything you need to have a strong launch week — ads, email, and ARC readers included.",
              features: [
                "Amazon AMS campaign setup",
                "2-week AMS management",
                "ARC reader coordination (25 readers)",
                "Launch email sequence (3 emails)",
                "Keyword & category optimization",
                "BookBub submission",
                "Launch week daily monitoring",
                "Post-launch performance report",
              ],
            },
            {
              name: "Growth Retainer",
              price: "$1,499",
              note: "Per month, 3-month minimum",
              desc: "Ongoing management for authors serious about building long-term sales velocity and ranking momentum.",
              features: [
                "Full AMS campaign management",
                "Weekly bid & keyword optimization",
                "Monthly ARC reader batch (50)",
                "Social media outreach (10 creators/mo)",
                "Email list growth strategy",
                "Promo site coordination",
                "Monthly strategy call",
                "Detailed monthly reporting",
                "BookBub & deal site submissions",
              ],
              featured: true,
            },
            {
              name: "Bestseller Campaign",
              price: "$2,999",
              note: "Per month, 3-month minimum",
              desc: "Full-stack marketing domination — for authors investing seriously in becoming a recognized name in their genre.",
              features: [
                "Everything in Growth Retainer",
                "Unlimited ARC readers",
                "20+ creator outreach per month",
                "PR & podcast pitch campaign",
                "Goodreads giveaway management",
                "BookBub Featured Deal priority",
                "Amazon Author Page overhaul",
                "Ad creative design & testing",
                "Bi-weekly strategy calls",
                "Dedicated marketing manager",
              ],
            },
          ]}
        />

        <ServiceTestimonials
          heading="Authors Who Became Bestsellers"
          testimonials={[
            {
              name: "Ryan O'Brien",
              role: "Author, The Founders Playbook (Entrepreneurship)",
              initials: "RO",
              avatarColor: "bg-emerald-600",
              rating: 5,
              quote:
                "We hit #1 in Entrepreneurship, #1 in Small Business, and #3 in the entire Business & Investing category on Amazon — all within 72 hours of launch. Their AMS strategy was surgical. The ARC campaign generated 34 reviews in the first week. I've hired them for my next three books.",
            },
            {
              name: "Aisha Bakr",
              role: "Author, The Quiet Mind (Self-Help)",
              initials: "AB",
              avatarColor: "bg-teal-600",
              rating: 5,
              quote:
                "My previous book sold 200 copies total. With Amazon Books Publishing managing my launch, my second book sold 1,400 copies in the first month. The BookTok outreach alone drove 400+ sales. I was skeptical about paying for marketing — I'm a convert.",
            },
            {
              name: "James Whitfield",
              role: "Author, The Last Harbor (Thriller)",
              initials: "JW",
              avatarColor: "bg-slate-600",
              rating: 5,
              quote:
                "Their AMS management turned a 3.0 ACoS into a 1.4 ACoS over 90 days. That's not luck — that's weekly optimization and genuine expertise. My Sponsored Products now generate $4 in royalties for every $1 I spend on ads. This is real, sustainable ad profitability.",
            },
          ]}
        />

        <ServiceFaqs
          heading="Book Marketing FAQs"
          faqs={[
            {
              q: "Do you guarantee my book will become a bestseller?",
              a: "We don't guarantee bestseller status — anyone who does is being dishonest. What we guarantee is that we'll execute every element of the strategy we agree on, and that our average client sees a 300%+ sales lift in the first 30 days.",
            },
            {
              q: "What's ARC and why does it matter?",
              a: "ARC stands for Advance Review Copy. Sending your book to engaged readers before launch generates verified reviews on launch day — which dramatically improves your conversion rate and Amazon ranking algorithm position.",
            },
            {
              q: "Do you manage the Amazon ad budget or do I?",
              a: "You fund the ad account directly — all ad spend goes from your card to Amazon, never through us. We manage the campaigns but never hold your money. We charge a management fee separately.",
            },
            {
              q: "How long before I see results?",
              a: "AMS ads start generating data within 24–48 hours. ARC reviews typically start appearing 2–4 weeks before launch. The compounding effect of all channels together usually peaks around week 2–4 after launch.",
            },
            {
              q: "Can you market a book that's already been published?",
              a: "Absolutely — in fact, re-launching underperforming books is a specialty. We audit your existing listing, ads (if any), and reviews, then build a re-launch plan that reignites visibility.",
            },
            {
              q: "What genres do you market?",
              a: "We market across all genres, but have the deepest experience in fiction (romance, thriller, fantasy), business, self-help, and health & wellness. These are the highest-converting categories on Amazon.",
            },
          ]}
        />

        <ServiceCta
          heading="Ready to Actually Sell Your Book?"
          subheading="Get a free marketing audit — we'll review your current listing, ads, and reviews, then tell you exactly what we'd do differently to drive sales."
          primaryLabel="Get Free Marketing Audit"
        />
      </main>
      <SiteFooter />
    </>
  );
}
