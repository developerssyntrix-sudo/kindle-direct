import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { ArrowRight, BookCheck, Users, Trophy, Star, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio — Published Books | Amazon Books Publishing",
  description: "Browse 2,500+ books we've published across every genre — from Amazon #1 bestsellers to debut authors finding their first readers.",
};

const stats = [
  { icon: BookCheck, value: "2,500+", label: "Books Published" },
  { icon: Users, value: "1,200+", label: "Authors Served" },
  { icon: Trophy, value: "150+", label: "Bestseller Launches" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
];

const genres = [
  { name: "Fiction & Genre Fiction", count: "620+", color: "bg-indigo-50 border-indigo-200 text-indigo-800" },
  { name: "Business & Finance", count: "380+", color: "bg-amber-50 border-amber-200 text-amber-800" },
  { name: "Self-Help & Wellness", count: "310+", color: "bg-teal-50 border-teal-200 text-teal-800" },
  { name: "Romance", count: "280+", color: "bg-rose-50 border-rose-200 text-rose-800" },
  { name: "Thriller & Mystery", count: "195+", color: "bg-slate-50 border-slate-200 text-slate-800" },
  { name: "Children's Books", count: "350+", color: "bg-lime-50 border-lime-200 text-lime-800" },
  { name: "Memoir & Biography", count: "160+", color: "bg-orange-50 border-orange-200 text-orange-800" },
  { name: "Poetry Collections", count: "205+", color: "bg-violet-50 border-violet-200 text-violet-800" },
];

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className="bg-amazon-dark py-10 md:py-15 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=1171&auto=format&fit=crop')" }} />
          <div className="absolute inset-0 bg-amazon-dark/80 pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, #FF9900 1px, transparent 1px)", backgroundSize: "26px 26px" }}
          />
          <div className="absolute top-0 right-0 w-96 h-96 bg-amazon-orange/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 md:px-6">
            <nav className="flex items-center gap-1.5 text-xs text-white/30 mb-7">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-amazon-orange font-medium">Portfolio</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 bg-amazon-orange/10 border border-amazon-orange/20 text-amazon-orange text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                <Star size={11} fill="currentColor" /> Our Published Works
              </span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
                2,500+ Books.{" "}
                <span className="text-amazon-orange">Every Genre.</span>
              </h1>
              <p className="text-white/55 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                From debut authors finding their first readers to established experts becoming Amazon bestsellers — here&apos;s a sample of what we&apos;ve built together.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-5 pt-7 border-t border-white/10">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amazon-orange/10 border border-amazon-orange/20 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-amazon-orange" />
                  </div>
                  <div>
                    <p className="text-amazon-orange font-extrabold text-xl leading-none">{value}</p>
                    <p className="text-white/35 text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Genre breakdown ── */}
        <section className="py-10 md:py-15 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">By Genre</p>
              <h2 className="text-3xl font-extrabold text-amazon-dark tracking-tight">
                Every Genre, <span className="text-amazon-orange">Mastered</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {genres.map((g) => (
                <div key={g.name} className={`${g.color} border rounded-xl p-4 text-center`}>
                  <p className="font-extrabold text-lg leading-none mb-1">{g.count}</p>
                  <p className="text-xs font-semibold opacity-70">{g.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Portfolio Grid ── */}
        <section className="py-10 md:py-15 bg-amazon-surface">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">Featured Titles</p>
              <h2 className="text-3xl font-extrabold text-amazon-dark tracking-tight mb-3">
                Browse <span className="text-amazon-orange">Recent Work</span>
              </h2>
              <p className="text-muted-foreground text-sm">Hover any cover to see its Amazon rating.</p>
            </div>
            <PortfolioGrid />
          </div>
        </section>

        {/* ── Process teaser ── */}
        <section className="py-10 md:py-15 bg-amazon-dark">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-3">Ready to Join Them?</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Your Book Could Be{" "}
              <span className="text-amazon-orange">Next on This Page</span>
            </h2>
            <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed mb-8">
              Every book in our portfolio started with a single conversation. Book your free consultation and let&apos;s figure out exactly how we&apos;d bring yours to life.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-bold px-7 py-3 rounded text-sm transition-colors shadow-lg shadow-amazon-orange/20"
              >
                Start Your Publishing Journey <ArrowRight size={15} />
              </Link>
              <Link
                href="/services/book-writing"
                className="inline-flex items-center gap-2 border-2 border-white/20 text-white hover:border-amazon-orange hover:text-amazon-orange font-bold px-7 py-3 rounded text-sm transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
