"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  BookOpen,
  Phone,
  Mail,
  ChevronDown,
  PenLine,
  FileEdit,
  TrendingUp,
  Headphones,
  BookMarked,
  Feather,
  MessageCircle,
} from "lucide-react";
import { contactInfo } from "@/data/contact";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#FFF5E8]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-10 flex items-center justify-center gap-8">
          <a
            href={contactInfo.phoneTel}
            className="flex items-center gap-2 text-amazon-dark font-semibold text-sm hover:opacity-80 transition-opacity"
          >
            <Phone size={14} />
            {contactInfo.phone}
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2 text-amazon-dark font-semibold text-sm hover:opacity-80 transition-opacity"
          >
            <Mail size={14} />
            {contactInfo.email}
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-[#222E3E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded bg-[#f7b731] flex items-center justify-center">
              <BookOpen size={16} className="text-[#131a22]" />
            </div>
            <div className="leading-tight">
              <span
                className="text-white font-extrabold text-base tracking-tight"
              >
                amz<span className="text-amazon-orange">kindle</span>
              </span>
              <span className="block text-white/60 text-[10px] font-semibold tracking-widest uppercase -mt-0.5">
                Publishers
              </span>
            </div>
          </Link>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="bg-amazon-orange hover:bg-amazon-orange/80 text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors outline-2 outline-offset-2 outline-amazon-orange"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-white/80 text-amazon-dark font-semibold text-sm px-5 py-2.5 rounded border border-white/30 transition-colors flex items-center gap-2"
            >
              <MessageCircle size={15} />
              Live Chat
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-1.5 rounded hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Navigation links — desktop only */}
      <div className="hidden lg:block bg-[#EAEDED]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
          <nav className="flex items-center gap-1 h-full min-w-max">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 text-sm transition-colors h-full flex items-center border-b-2 hover:border-[#008296] hover:text-[#008296] ${pathname === l.href
                  ? "border-[#008296] text-black font-bold"
                  : "border-transparent text-black"
                  }`}
              >
                {l.label}
              </Link>
            ))}
            {/* Services — shadcn dropdown on lg+, custom on smaller screens */}
            <div className="hidden lg:block h-full">
              <NavigationMenu className="h-full">
                <NavigationMenuList className="h-full">
                  <NavigationMenuItem className="h-full">
                    <NavigationMenuTrigger
                      className={`bg-transparent hover:text-[#008296] data-popup-open:text-[#008296] data-open:text-amazon-orange text-sm font-medium h-full px-3 py-1.5 border-b-2 rounded-none ${pathname.startsWith("/services")
                        ? "border-[#008296] text-black font-bold"
                        : "border-transparent text-black hover:text-[#008296]"
                        }`}
                    >
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[580px] p-4 grid grid-cols-2 gap-2">
                        {services.map((s) => {
                          const Icon = s.icon;
                          return (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-amazon-surface transition-colors group"
                            >
                              <div className="w-9 h-9 rounded-lg bg-amazon-orange/10 border border-amazon-orange/20 flex items-center justify-center shrink-0 group-hover:bg-amazon-orange group-hover:border-amazon-orange transition-all">
                                <Icon size={16} className="text-amazon-orange group-hover:text-amazon-dark transition-colors" />
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
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#2d3748] border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-amazon-orange px-3 py-2 rounded text-sm font-medium transition-colors hover:bg-white/10"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between text-white/80 hover:text-amazon-orange px-3 py-2 rounded text-sm font-medium transition-colors hover:bg-white/10"
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

          <div className="border-t border-white/10 pt-3 mt-2 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block bg-[#b5862a] hover:bg-[#9e7424] text-white font-semibold text-sm px-4 py-2.5 rounded text-center transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-4 py-2.5 rounded text-center border border-white/30 transition-colors"
            >
              Live Chat
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
