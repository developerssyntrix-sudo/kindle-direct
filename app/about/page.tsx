import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import {
  ArrowRight, ChevronRight, Star, CheckCircle2,
  BookOpen, Shield, Heart, Globe, Award, Users, Zap, Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Amazon Books Publishing",
  description: "Meet the team behind 2,500+ published books. Our story, mission, values, and the experts who make authors' dreams a reality.",
};

const values = [
  { icon: BookOpen, title: "Craft First, Always", desc: "We believe every book deserves to be excellent. We never rush, never cut corners, and never ship work we aren't proud of. Quality is the only standard we hold." },
  { icon: Shield, title: "Author Rights Are Sacred", desc: "You own your book — 100% of the intellectual property, 100% of the royalties, always. We exist to serve your vision, not to claim a share of it." },
  { icon: Heart, title: "Authors Come First", desc: "Every process, every timeline, every decision we make is filtered through one question: what's best for the author? Not what's fastest for us." },
];

const team = [
  { name: "Dr. Michael Stern", role: "CEO & Founder", specialty: "Publishing Strategy", initials: "MS", color: "bg-amazon-dark", years: "Founder" },
  { name: "Alexandra Reeves", role: "Head of Ghostwriting", specialty: "Fiction & Memoir", initials: "AR", color: "bg-purple-700", years: "11 yrs" },
  { name: "James Okonkwo", role: "Lead Editorial Director", specialty: "Developmental Editing", initials: "JO", color: "bg-teal-700", years: "9 yrs" },
  { name: "Sophia Chen", role: "Creative Director", specialty: "Cover & Interior Design", initials: "SC", color: "bg-rose-700", years: "8 yrs" },
  { name: "Marcus Williams", role: "Head of Marketing", specialty: "Amazon Ads & Launch", initials: "MW", color: "bg-amber-700", years: "7 yrs" },
  { name: "Priya Nair", role: "Publishing Operations", specialty: "KDP & Distribution", initials: "PN", color: "bg-blue-700", years: "6 yrs" },
];

const timeline = [
  { year: "2014", event: "Founded in Seattle", desc: "Dr. Michael Stern launched Amazon Books Publishing with 3 writers and a mission to democratize professional publishing." },
  { year: "2016", event: "100 Books Milestone", desc: "Reached our first 100 published titles — spanning 14 genres and 3 continents. First New York Times-adjacent bestseller." },
  { year: "2018", event: "Amazon KDP Partner", desc: "Achieved Amazon KDP Partner status — one of fewer than 50 agencies globally to hold this designation." },
  { year: "2020", event: "1,000 Books Published", desc: "Crossed 1,000 published titles with a team of 25 specialists. Expanded into book marketing and trailer production." },
  { year: "2022", event: "50+ Team Members", desc: "Grew to 50+ full-time editors, writers, designers, and marketers across the US, UK, and Canada." },
  { year: "2024", event: "2,500+ Books & Counting", desc: "Now the #1 Amazon-focused publishing agency, with clients on six continents and 150+ bestseller launches to our name." },
];

const whyNumbers = [
  { v: "2,500+", l: "Books Published" },
  { v: "98%", l: "Satisfaction Rate" },
  { v: "150+", l: "Bestseller Launches" },
  { v: "50+", l: "Team Specialists" },
  { v: "60+", l: "Genres Covered" },
  { v: "10+", l: "Years in Business" },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className="bg-amazon-dark py-10 md:py-15 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #FF9900 1px, transparent 1px)", backgroundSize: "26px 26px" }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-amazon-orange/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-6">
            <nav className="flex items-center gap-1.5 text-xs text-white/30 mb-7">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-amazon-orange font-medium">About Us</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 bg-amazon-orange/10 border border-amazon-orange/20 text-amazon-orange text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                <Star size={11} fill="currentColor" /> Est. 2014 — Seattle, WA
              </span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
                The Team Behind{" "}
                <span className="text-amazon-orange">Your Story</span>
              </h1>
              <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-2xl">
                We&apos;re a team of 50+ editors, ghostwriters, designers, and marketers who believe every author — regardless of experience — deserves a professional path to publication.
              </p>
            </div>
          </div>
        </section>

        {/* ── Our Story ── */}
        <section className="py-10 md:py-15 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-3">Our Story</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-amazon-dark leading-tight tracking-tight mb-5">
                  Started by an Author,{" "}
                  <span className="text-amazon-orange">Built for Authors</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                  <p>
                    In 2014, Dr. Michael Stern had just finished his third book — and realized that navigating the publishing process had consumed as much energy as writing it. The ghostwriting services were opaque, the KDP setup was overwhelming, and the marketing felt like guesswork.
                  </p>
                  <p>
                    He founded Amazon Books Publishing with one conviction: authors should be able to focus on their ideas, not the mechanics of bringing a book to market. The agency would handle everything else — with complete transparency, fair pricing, and genuine expertise.
                  </p>
                  <p>
                    Ten years later, 2,500+ books published, and 150+ bestseller launches later, that conviction hasn&apos;t changed. We&apos;ve just gotten much, much better at delivering on it.
                  </p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {whyNumbers.map((s, i) => (
                  <div
                    key={s.l}
                    className={`rounded-2xl p-5 flex flex-col justify-between min-h-[110px] ${
                      i === 0 ? "bg-amazon-dark text-white"
                      : i === 1 ? "bg-amazon-orange"
                      : i === 4 ? "bg-amazon-navy text-white"
                      : "bg-amazon-surface border border-border"
                    }`}
                  >
                    <p className={`text-3xl font-extrabold leading-none ${i === 1 ? "text-amazon-dark" : i === 0 || i === 4 ? "text-white" : "text-amazon-dark"}`}>{s.v}</p>
                    <p className={`text-xs font-semibold mt-2 ${i === 1 ? "text-amazon-dark/70" : i === 0 || i === 4 ? "text-white/60" : "text-muted-foreground"}`}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Mission & Values ── */}
        <section className="py-10 md:py-15 bg-amazon-surface">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">Our Values</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-amazon-dark tracking-tight mb-3">
                What We Stand For
              </h2>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Three principles that govern every decision, every project, every day.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="bg-white rounded-2xl p-7 border border-border hover:border-amazon-orange/30 hover:shadow-md transition-all text-center group">
                    <div className="w-14 h-14 rounded-2xl bg-amazon-orange/10 border border-amazon-orange/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-amazon-orange group-hover:border-amazon-orange transition-all">
                      <Icon size={24} className="text-amazon-orange group-hover:text-amazon-dark transition-colors" />
                    </div>
                    <h3 className="text-amazon-dark font-extrabold text-base mb-3">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="py-10 md:py-15 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">The Team</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-amazon-dark tracking-tight mb-3">
                Meet the <span className="text-amazon-orange">Experts</span>
              </h2>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Our leadership team brings decades of publishing, editorial, creative, and marketing expertise.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {team.map((member) => (
                <div key={member.name} className="group bg-white border border-border hover:border-amazon-orange/30 hover:shadow-md rounded-2xl p-6 flex gap-4 transition-all">
                  <div className={`w-14 h-14 rounded-xl ${member.color} flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0`}>
                    {member.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-amazon-dark font-bold text-sm leading-tight">{member.name}</p>
                    <p className="text-amazon-orange text-xs font-semibold mt-0.5">{member.role}</p>
                    <p className="text-muted-foreground text-xs mt-1">{member.specialty}</p>
                    <span className="inline-block mt-2 text-[10px] font-bold bg-amazon-surface border border-border text-amazon-dark px-2 py-0.5 rounded-full">
                      {member.years} experience
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground text-sm mt-6">
              Plus 44+ writers, editors, designers, and marketers across the US, UK, and Canada.
            </p>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-10 md:py-15 bg-amazon-dark">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">Our Journey</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                10 Years in <span className="text-amazon-orange">Numbers</span>
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-amazon-orange/20 hidden sm:block" />
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={item.year} className="flex gap-5 sm:gap-8 items-start group">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-14 h-14 rounded-xl bg-amazon-orange/10 border border-amazon-orange/30 flex items-center justify-center group-hover:bg-amazon-orange group-hover:border-amazon-orange transition-all">
                        <span className="text-amazon-orange group-hover:text-amazon-dark font-extrabold text-xs transition-colors">{item.year}</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-amazon-navy/50 border border-white/5 hover:border-amazon-orange/20 rounded-xl p-4 transition-all">
                      <p className="text-white font-bold text-sm mb-1">{item.event}</p>
                      <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Awards ── */}
        <section className="py-10 md:py-15 bg-amazon-surface">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">Recognition</p>
              <h2 className="text-3xl font-extrabold text-amazon-dark tracking-tight">Awards & Credentials</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Award, title: "Amazon KDP Partner", desc: "One of fewer than 50 agencies globally with this designation" },
                { icon: Star, title: "4.9/5 Average Rating", desc: "Across 500+ verified client reviews on Google and Trustpilot" },
                { icon: Globe, title: "Authors on 6 Continents", desc: "We've helped authors publish from every corner of the world" },
                { icon: Users, title: "98% Client Retention", desc: "Nearly all clients return for their second or third book with us" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white border border-border rounded-2xl p-5 text-center hover:border-amazon-orange/30 hover:shadow-sm transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-amazon-orange/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-amazon-orange transition-all">
                    <Icon size={20} className="text-amazon-orange group-hover:text-amazon-dark transition-colors" />
                  </div>
                  <p className="text-amazon-dark font-bold text-sm mb-1">{title}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-10 md:py-15 bg-amazon-orange relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #232F3E 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative max-w-3xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-amazon-dark leading-tight tracking-tight mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-amazon-dark/70 text-base max-w-xl mx-auto mb-7 leading-relaxed">
              Book a free 30-minute consultation and meet the team member who&apos;d be assigned to your project before you commit to anything.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-amazon-dark hover:bg-amazon-navy text-white font-bold px-7 py-3 rounded text-sm transition-colors shadow-lg">
                Book Free Consultation <ArrowRight size={15} />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 border-2 border-amazon-dark/20 text-amazon-dark font-bold px-7 py-3 rounded text-sm transition-colors">
                View Our Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
