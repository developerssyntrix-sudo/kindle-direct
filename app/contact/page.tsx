import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import ContactForm from "@/components/contact/ContactForm";
import { Phone, Mail, MapPin, Clock, ChevronRight, Star, MessageCircle, BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Free Consultation | Amazon Books Publishing",
  description: "Book your free 30-minute publishing consultation. We respond within 1 business hour. No pressure, no commitment — just clarity on your publishing path.",
};

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (800) 555-1234",
    sub: "Mon–Fri, 9am–6pm EST",
    href: "tel:+18005551234",
    color: "bg-amazon-orange/10 border-amazon-orange/20",
    iconColor: "text-amazon-orange",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@amazonbookspublishing.com",
    sub: "We reply within 1 business hour",
    href: "mailto:hello@amazonbookspublishing.com",
    color: "bg-amazon-teal/10 border-amazon-teal/20",
    iconColor: "text-amazon-teal",
  },
  {
    icon: MapPin,
    label: "Our Offices",
    value: "Seattle, WA · New York, NY",
    sub: "Remote-first, globally available",
    href: null,
    color: "bg-amazon-navy/10 border-amazon-navy/20",
    iconColor: "text-amazon-navy",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri: 9am – 6pm EST",
    sub: "Weekend replies for urgent projects",
    href: null,
    color: "bg-amazon-surface border-border",
    iconColor: "text-muted-foreground",
  },
];

const quickLinks = [
  { label: "View Pricing Packages", href: "/services/book-writing#packages" },
  { label: "See Our Portfolio", href: "/portfolio" },
  { label: "Read FAQs", href: "/faqs" },
  { label: "About Our Team", href: "/about" },
];

export default function ContactPage() {
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
              <span className="text-amazon-orange font-medium">Contact</span>
            </nav>
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 bg-amazon-orange/10 border border-amazon-orange/20 text-amazon-orange text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest">
                <Star size={11} fill="currentColor" /> Free Consultation Available
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Let&apos;s Talk About{" "}
                <span className="text-amazon-orange">Your Book</span>
              </h1>
              <p className="text-white/55 text-base md:text-lg leading-relaxed">
                No pressure, no hard sell. Just a 30-minute conversation where we learn about your project and tell you exactly how we&apos;d approach it — for free.
              </p>
            </div>
          </div>
        </section>

        {/* ── Contact cards ── */}
        <section className="py-8 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactCards.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <div className={`flex items-start gap-3 p-4 rounded-xl border ${c.color} h-full`}>
                    <div className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon size={16} className={c.iconColor} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest mb-0.5">{c.label}</p>
                      <p className="text-amazon-dark font-bold text-xs leading-snug truncate">{c.value}</p>
                      <p className="text-muted-foreground text-[10px] mt-0.5">{c.sub}</p>
                    </div>
                  </div>
                );

                return c.href ? (
                  <a key={c.label} href={c.href} className="block hover:scale-[1.01] transition-transform">
                    {inner}
                  </a>
                ) : (
                  <div key={c.label}>{inner}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Form + sidebar ── */}
        <section className="py-10 md:py-15 bg-amazon-surface">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              {/* Form */}
              <div className="lg:col-span-2 bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                <div className="mb-7">
                  <h2 className="text-2xl font-extrabold text-amazon-dark tracking-tight mb-1">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Fill in the form and we&apos;ll reach out within 1 business hour.
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* Sidebar */}
              <div className="space-y-5 lg:sticky lg:top-24">
                {/* Why consult */}
                <div className="bg-amazon-dark rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amazon-orange/10 flex items-center justify-center">
                      <MessageCircle size={18} className="text-amazon-orange" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Free Consultation</p>
                      <p className="text-white/40 text-xs">30 minutes · No obligation</p>
                    </div>
                  </div>
                  <p className="text-white/55 text-xs leading-relaxed mb-4">
                    On your free call, we&apos;ll cover: your project scope, recommended services, realistic timelines, transparent pricing, and who on our team would be assigned to your book.
                  </p>
                  <ul className="space-y-2">
                    {["No commitment required", "Candid timeline estimates", "Transparent pricing discussion", "Writer/editor matching preview", "Custom publishing roadmap"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-white/60 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-amazon-orange flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick links */}
                <div className="bg-white rounded-2xl border border-border p-5">
                  <p className="text-amazon-dark font-bold text-sm mb-3">Quick Links</p>
                  <div className="space-y-2">
                    {quickLinks.map((l) => (
                      <Link
                        key={l.label}
                        href={l.href}
                        className="flex items-center justify-between text-xs text-amazon-dark hover:text-amazon-orange font-medium py-1.5 border-b border-border last:border-0 transition-colors group"
                      >
                        {l.label}
                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Trust */}
                <div className="bg-amazon-orange/10 border border-amazon-orange/20 rounded-2xl p-5 text-center">
                  <div className="flex justify-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-amazon-orange fill-amazon-orange" />
                    ))}
                  </div>
                  <p className="text-amazon-dark font-extrabold text-sm">4.9 / 5.0</p>
                  <p className="text-muted-foreground text-xs mt-0.5">Based on 500+ client reviews</p>
                  <p className="text-amazon-dark/60 text-xs mt-3 leading-relaxed italic">
                    &ldquo;The most professional publishing team I&apos;ve ever worked with. Transparent, responsive, and genuinely invested in my book&apos;s success.&rdquo;
                  </p>
                  <p className="text-amazon-dark font-semibold text-xs mt-2">— James K., Thriller Author</p>
                </div>

                {/* Services quick access */}
                <div className="bg-white rounded-2xl border border-border p-5">
                  <p className="text-amazon-dark font-bold text-sm mb-3 flex items-center gap-2">
                    <BookOpen size={14} className="text-amazon-orange" /> Our Services
                  </p>
                  <div className="space-y-1.5">
                    {[
                      ["Book Writing", "/services/book-writing"],
                      ["Book Publishing", "/services/book-publishing"],
                      ["Book Editing", "/services/book-editing-proofreading"],
                      ["Book Marketing", "/services/book-marketing"],
                      ["Book Trailer", "/services/book-trailer"],
                      ["Children's Books", "/services/childrens-book-writing"],
                      ["Poetry Publishing", "/services/poetry-publishing"],
                    ].map(([label, href]) => (
                      <Link
                        key={label}
                        href={href}
                        className="block text-xs text-muted-foreground hover:text-amazon-orange transition-colors py-0.5"
                      >
                        → {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Map placeholder ── */}
        <section className="py-10 md:py-15 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="rounded-2xl overflow-hidden border border-border bg-amazon-surface h-56 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amazon-surface to-white" />
              <div className="relative text-center">
                <MapPin size={32} className="text-amazon-orange mx-auto mb-2" />
                <p className="text-amazon-dark font-bold text-sm">Seattle, WA · New York, NY</p>
                <p className="text-muted-foreground text-xs mt-1">Remote-first · Serving authors globally</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
