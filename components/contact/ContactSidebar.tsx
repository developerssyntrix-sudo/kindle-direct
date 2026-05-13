import Link from "next/link";
import { Star } from "lucide-react";

const quickLinks = [
  { label: "View Pricing Packages", href: "/services/book-writing#packages" },
  { label: "See Our Portfolio", href: "/portfolio" },
  { label: "Read FAQs", href: "/faqs" },
  { label: "About Our Team", href: "/about" },
];

const services = [
  ["Book Writing", "/services/book-writing"],
  ["Book Publishing", "/services/book-publishing"],
  ["Book Editing", "/services/book-editing-proofreading"],
  ["Book Marketing", "/services/book-marketing"],
  ["Book Trailer", "/services/book-trailer"],
  ["Children's Books", "/services/childrens-book-writing"],
  ["Poetry Publishing", "/services/poetry-publishing"],
];

const consultationPoints = [
  "No commitment required",
  "Candid timeline estimates",
  "Transparent pricing discussion",
  "Writer/editor matching preview",
  "Custom publishing roadmap",
];

export default function ContactSidebar() {
  return (
    <div className="space-y-5 lg:sticky lg:top-24">

      {/* Free Consultation */}
      <div className="bg-white border border-[#d5d9d9] rounded p-5">
        <h3 className="text-[#131a22] font-semibold text-sm mb-1">Free Consultation</h3>
        <p className="text-[#565959] text-xs mb-3">30 minutes · No obligation</p>
        <p className="text-[#131a22] text-xs leading-relaxed mb-3">
          On your free call we&apos;ll cover: your project scope, recommended services, realistic timelines, transparent pricing, and who on our team would be assigned to your book.
        </p>
        <ul className="space-y-1.5">
          {consultationPoints.map((item) => (
            <li key={item} className="flex items-center gap-2 text-[#131a22] text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#008296] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Trust rating */}
      <div className="bg-white border border-[#d5d9d9] rounded p-5 text-center">
        <div className="flex justify-center gap-0.5 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-[#f59e0b] fill-[#f59e0b]" />
          ))}
        </div>
        <p className="text-[#131a22] font-semibold text-sm">4.9 / 5.0</p>
        <p className="text-[#565959] text-xs mt-0.5">Based on 500+ client reviews</p>
        <p className="text-[#565959] text-xs mt-3 leading-relaxed italic">
          &ldquo;The most professional publishing team I&apos;ve ever worked with. Transparent, responsive, and genuinely invested in my book&apos;s success.&rdquo;
        </p>
        <p className="text-[#131a22] text-xs font-semibold mt-2">— James K., Thriller Author</p>
      </div>

      {/* Quick links */}
      <div className="bg-white border border-[#d5d9d9] rounded p-5">
        <p className="text-[#131a22] font-semibold text-sm mb-3">Quick Links</p>
        <div className="divide-y divide-[#e7e7e7]">
          {quickLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="block text-xs text-[#008296] hover:underline py-2"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="bg-white border border-[#d5d9d9] rounded p-5">
        <p className="text-[#131a22] font-semibold text-sm mb-3">Our Services</p>
        <div className="divide-y divide-[#e7e7e7]">
          {services.map(([label, href]) => (
            <Link key={label} href={href} className="block text-xs text-[#008296] hover:underline py-2">
              {label}
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
