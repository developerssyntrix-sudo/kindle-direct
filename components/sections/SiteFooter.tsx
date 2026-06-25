"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { contactInfo } from "@/data/contact";
import Logo from "@/app/assets/images/Logo.png";
import { Facebook } from "@/app/assets/svgs/icons/facebook";
import { Twitter } from "@/app/assets/svgs/icons/twitter";
import { Instagram } from "@/app/assets/svgs/icons/instagram";
import { LinkedIn } from "@/app/assets/svgs/icons/linkedin";
import { YouTube } from "@/app/assets/svgs/icons/youtube";
import GetStartedModal from "@/components/sections/GetStartedModal";
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
  { label: "Terms and Conditions", href: "https://kdp.amazon.com/en_US/help/topic/G200627430" },
  { label: "Privacy Notice", href: "https://kdp.amazon.com/en_US/help/topic/G201488490" },
  { label: "Conditions of Use", href: "https://www.amazon.com/gp/help/customer/display.html/ref=footer_cou?ie=UTF8&nodeId=508088" },
  { label: "Help", href: "https://kdp.amazon.com/en_US/help" },
];

const socials = [
  { icon: Facebook, title: "Facebook", href: "https://www.facebook.com/Amazon" },
  { icon: Twitter, title: "Twitter / X", href: "https://twitter.com/amazon" },
  { icon: Instagram, title: "Instagram", href: "https://www.instagram.com/amazon" },
  { icon: LinkedIn, title: "LinkedIn", href: "https://www.linkedin.com/company/amazon" },
  { icon: YouTube, title: "YouTube", href: "https://www.youtube.com/amazon" },
];

const footerLinks = [
  {
    title: "kindle direct publishing house Select",
    desc: "Earn more money and reach new readers",
  },
  {
    title: "CreateSpace",
    desc: "Link your existing account to kindle direct publishing house",
  },
  {
    title: "kindle direct publishing house Community",
    desc: "Connect with experts and fellow authors",
  },
  {
    title: "Audiobook Creation Exchange (ACX)",
    desc: "Indie audiobook publishing made easy",
  },
];

export default function SiteFooter() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <GetStartedModal onClose={() => setShowModal(false)} />}
      {/* ── CTA Banner ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Desktop: exact match to ref image — two side-by-side banner images */}
          <div className="hidden md:flex items-center justify-center gap-6">
            {/* kindle direct publishing house Select banner */}
            <a href="/contact" className="block shrink-0 relative">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/otp/general/kdpselect-banner._V306389619_.png"
                alt="kindle direct publishing house Select Banner"
                className="h-20 w-auto object-contain"
              />
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-10">
                <p className="text-xs text-black tracking-tight leading-tighter text-center">
                  Make more money and reach more readers <br /> through Kindle Unlimited.
                </p>

              </div>
            </a>

            {/* Divider */}
            <div className="w-px h-14 bg-gray-200 shrink-0" />

            {/* Kindle Unlimited earnings banner */}
            <a href="/contact" className="block shrink-0 relative">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/otp/general/kindleunltd-banner._V306391897_.png"
                alt="Kindle Unlimited Banner"
                className="h-20 w-auto object-contain"
              />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-10">
                <p className="text-xs text-black tracking-tight leading-tighter text-center font-bold">
                  Total kindle direct publishing house Select Author Earnings <br /> <span className="font-normal text-[#AC5C0C]">March 2026 • <span className="font-bold">$69.3 Million</span></span>
                </p>

              </div>
            </a>
          </div>

          {/* Mobile: stacked cards */}
          <div className="flex md:hidden flex-col">
            <a href="/contact" className="block shrink-0 relative">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/otp/general/kdpselect-banner._V306389619_.png"
                alt="kindle direct publishing house Select Banner"
                className="h-20 w-auto object-contain rounded"
              />
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-10">
                <p className="text-xs text-black tracking-tight leading-tighter text-center">
                  Make more money and reach more readers <br /> through Kindle Unlimited.
                </p>

              </div>
            </a>
            <a href="/contact" className="block shrink-0 relative">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/otp/general/kindleunltd-banner._V306391897_.png"
                alt="Kindle Unlimited Banner"
                className="h-20 w-auto object-contain rounded"
              />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-10">
                <p className="text-xs text-black tracking-tight leading-tighter text-center font-bold">
                  Total kindle direct publishing house Select Author Earnings <br /> <span className="font-normal text-[#AC5C0C]">March 2026 • <span className="font-bold">$69.3 Million</span></span>
                </p>

              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── Footer — kindle direct publishing house Style ── */}
      <footer style={{ backgroundColor: "#232F3E" }}>
        {/* Main footer body */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            {/* Left: Brand + socials */}
            <div className="shrink-0 md:w-56">
              <Link href="/" className="flex items-center gap-2 mb-5">
                <img src={Logo.src} alt="Kindle Direct Publishing House Logo" className="h-13 md:h-17 w-auto" />
              </Link>

              {/* Social icons */}
              <div className="flex items-center gap-3 mb-6">
                {socials.map(({ icon: Icon, title, href }) => (
                  <a
                    key={title}
                    href={href}
                    title={title}
                    className="w-9 h-9 rounded flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </div>

              {/* Contact */}
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Phone size={12} className="mt-0.5 shrink-0" style={{ color: "#E47911" }} />
                  <a href={contactInfo.phoneTel} className="text-white/50 hover:text-white text-xs transition-colors">
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={12} className="mt-0.5 shrink-0" style={{ color: "#E47911" }} />
                  <a href={`mailto:${contactInfo.email}`} className="text-white/50 hover:text-white text-xs transition-colors">
                    {contactInfo.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Right: 2-col link grid — kindle direct publishing house style */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2">
              {footerLinks.map((item) => (
                <button
                  key={item.title}
                  onClick={() => setShowModal(true)}
                  className="group text-left"
                >
                  <p
                    className="text-sm font-medium group-hover:underline transition-colors"
                    style={{ color: "#59C2E8" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-white/55 text-sm">{item.desc}</p>
                </button>
              ))}
            </div>

          </div>

          {/* Divider */}
          <div className="my-5 border-t border-white/10" />

          {/* Services + Company links row */}
          <div className="grid grid-cols-3 justify-center items-start">
            <div className="w-full flex items-center justify-center flex-col">
              <div>
                <p className="text-[#59C2E8] font-semibold text-md tracking-widest mb-3">Services</p>
                <ul className="space-y-1.5">
                  {services.slice(0, 4).map((s) => (
                    <li key={s.label}>
                      <Link href={s.href} className="text-white/55 hover:text-white text-sm transition-colors">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">&nbsp;</p>
                <ul className="space-y-1.5 mt-0">
                  {services.slice(4).map((s) => (
                    <li key={s.label}>
                      <Link href={s.href} className="text-white/55 hover:text-white text-sm transition-colors">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div>
                <p className="text-[#59C2E8] font-semibold text-md tracking-widest mb-3">Company</p>
                <ul className="space-y-1.5">
                  {company.map((c) => (
                    <li key={c.label}>
                      <Link href={c.href} className="text-white/55 hover:text-white text-sm transition-colors">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar — kindle direct publishing house style ── */}
        <div className="bg-[#222E3E] pb-5">
          <div className="max-w-7xl mx-auto">
            {/* Legal links row */}
            <div className="flex flex-wrap items-center justify-around mb-10">
              {legal.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-white/40 hover:text-white/70 text-xs transition-colors"
                  style={{ color: "#59C2E8" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            {/* Copyright */}
            
            <p className="text-white text-xs text-center mb-5">
              © 2026 Kindle Direct Publishing House. All Rights Reserved.
            </p>
            <p className="text-white text-xs text-center">
              DISCLAIMER
Please Note: All company logos and trademarks appearing on our website are the property of their respective owners. We are not affiliated, associated, endorsed by, or in any way officially connected with these companies or their trademarks. The use of these logos and trademarks does not imply any endorsement, affiliation, or relationship between us and the respective companies. We solely use these logos and trademarks for identification purposes only. All information and content provided on our website is for informational purposes only and should not be construed as professional advice. We do not guarantee the accuracy or completeness of any information provided on our website. We are not responsible for any errors or omissions, or for the results obtained from the use of this information. We encourage our clients to consider the information independently before making a decision.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}