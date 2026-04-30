"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  BookOpen,
  Phone,
  ChevronDown,
  PenLine,
  FileEdit,
  TrendingUp,
  Headphones,
  BookMarked,
  Feather,
} from "lucide-react";

const services = [
  { label: "Book Writing", href: "/services/book-writing", icon: PenLine, desc: "Professional ghostwriting in any genre" },
  { label: "Book Publishing", href: "/services/book-publishing", icon: BookOpen, desc: "Amazon KDP & global distribution" },
  { label: "Book Editing", href: "/services/book-editing-proofreading", icon: FileEdit, desc: "Developmental, copy & proofread" },
  { label: "Book Marketing", href: "/services/book-marketing", icon: TrendingUp, desc: "AMS ads, ARC & launch strategy" },
  { label: "Book Trailer", href: "/services/book-trailer", icon: Headphones, desc: "Cinematic video for social media" },
  { label: "Children's Books", href: "/services/childrens-book-writing", icon: BookMarked, desc: "Writing, illustration & publishing" },
  { label: "Poetry Publishing", href: "/services/poetry-publishing", icon: Feather, desc: "Collections crafted & distributed" },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQs", href: "/faqs" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-amazon-dark border-b border-amazon-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 rounded bg-amazon-orange flex items-center justify-center">
            <BookOpen size={16} className="text-amazon-dark" />
          </div>
          <div className="leading-tight">
            <span className="text-white font-extrabold text-base tracking-tight">
              Amazon<span className="text-amazon-orange">Books</span>
            </span>
            <span className="block text-white/50 text-[10px] font-medium tracking-widest uppercase -mt-0.5">
              Publishing
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-white/70 hover:text-amazon-orange px-3 py-1.5 rounded text-sm font-medium transition-colors hover:bg-amazon-navy/50">
              Services
              <ChevronDown
                size={14}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[580px] bg-white rounded-2xl shadow-2xl border border-border p-4 grid grid-cols-2 gap-2">
                {services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-amazon-surface transition-colors group"
                      onClick={() => setServicesOpen(false)}
                    >
                      <div className="w-9 h-9 rounded-lg bg-amazon-orange/10 border border-amazon-orange/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amazon-orange group-hover:border-amazon-orange transition-all">
                        <Icon
                          size={16}
                          className="text-amazon-orange group-hover:text-amazon-dark transition-colors"
                        />
                      </div>
                      <div>
                        <p className="text-amazon-dark font-bold text-sm leading-tight group-hover:text-amazon-orange transition-colors">
                          {s.label}
                        </p>
                        <p className="text-muted-foreground text-xs mt-0.5">{s.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-amazon-orange px-3 py-1.5 rounded text-sm font-medium transition-colors hover:bg-amazon-navy/50"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <a
            href="tel:+18005551234"
            className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm transition-colors"
          >
            <Phone size={13} />
            +1 (800) 555-1234
          </a>
          <Link
            href="/contact"
            className="bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-bold text-sm px-5 py-2 rounded transition-colors"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-1.5 rounded hover:bg-amazon-navy/50 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-amazon-navy border-t border-amazon-dark/50 px-4 py-4 flex flex-col gap-1">
          {/* Services accordion */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between text-white/80 hover:text-amazon-orange px-3 py-2 rounded text-sm font-medium transition-colors hover:bg-amazon-dark/40"
          >
            Services
            <ChevronDown
              size={14}
              className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileServicesOpen && (
            <div className="pl-3 flex flex-col gap-0.5 mb-1">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="text-white/60 hover:text-amazon-orange px-3 py-1.5 rounded text-xs font-medium transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-amazon-orange px-3 py-2 rounded text-sm font-medium transition-colors hover:bg-amazon-dark/40"
            >
              {l.label}
            </Link>
          ))}

          <div className="border-t border-amazon-dark/50 pt-3 mt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block bg-amazon-orange text-amazon-dark font-bold text-sm px-4 py-2.5 rounded text-center transition-colors hover:bg-amazon-orange-hover"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
