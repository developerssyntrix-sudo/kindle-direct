import Link from "next/link";
import { BookOpen, Phone, Mail, MapPin } from "lucide-react";
import { contactInfo } from "@/data/contact";

const services = [
  { label: "Book Writing", href: "/services/book-writing" },
  { label: "Book Editing", href: "/services/book-editing-proofreading" },
  { label: "Cover Design", href: "/services/book-publishing" },
  { label: "Publishing & Distribution", href: "/services/book-publishing" },
  { label: "Book Marketing", href: "/services/book-marketing" },
  { label: "Book Trailer", href: "/services/book-trailer" },
  { label: "Children's Books", href: "/services/childrens-book-writing" },
  { label: "Poetry Publishing", href: "/services/poetry-publishing" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Portfolio", href: "/portfolio" },
  { label: "How It Works", href: "/#process" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];

const socials = [
  { label: "f", title: "Facebook", href: "#" },
  { label: "X", title: "Twitter / X", href: "#" },
  { label: "in", title: "Instagram", href: "#" },
  { label: "li", title: "LinkedIn", href: "#" },
  { label: "yt", title: "YouTube", href: "#" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-amazon-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-15">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ── Brand ── */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-amazon-orange flex items-center justify-center shrink-0">
                <BookOpen size={17} className="text-amazon-dark" />
              </div>
              <div className="leading-tight">
                <span className="text-white font-extrabold text-base tracking-tight">
                  Amazon<span className="text-amazon-orange">Books</span>
                </span>
                <span className="block text-white/40 text-[10px] tracking-widest uppercase -mt-0.5">
                  Publishing
                </span>
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed mb-5">
              The #1 Amazon-focused book publishing agency. From manuscript to
              bestseller — we handle everything.
            </p>

            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <Phone size={13} className="text-amazon-orange mt-0.5 shrink-0" />
                <a href={contactInfo.phoneTel} className="text-white/50 hover:text-white text-sm transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={13} className="text-amazon-orange mt-0.5 shrink-0" />
                <a href="mailto:hello@amazonbookspublishing.com" className="text-white/50 hover:text-white text-sm transition-colors">
                  hello@amazonbookspublishing.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="text-amazon-orange mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">Seattle, WA · New York, NY</span>
              </li>
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <p className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Services
            </p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-white/50 hover:text-amazon-orange text-sm transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company ── */}
          <div>
            <p className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Company
            </p>
            <ul className="space-y-2">
              {company.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-white/50 hover:text-amazon-orange text-sm transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CTA column ── */}
          <div>
            <p className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
              Start Today
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Book your free 30-minute strategy call and get a custom publishing
              roadmap at no cost.
            </p>
            <Link
              href="/contact"
              className="block bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-bold text-sm px-5 py-3 rounded text-center transition-colors mb-4 outline-2 outline-offset-2 outline-amazon-orange/60"
            >
              Book Free Consultation
            </Link>
            <p className="text-white/30 text-xs text-center">No commitment required</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-amazon-navy">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Amazon Books Publishing. All rights reserved.
          </p>
          <div className="flex gap-4">
            {legal.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-white/30 hover:text-white/60 text-xs transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
