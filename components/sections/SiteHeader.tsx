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

import Logo from "@/app/assets/images/Logo.png";

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

declare global {
  interface Window {
    Tawk_API?: {
      toggle?: () => void;
      maximize?: () => void;
    };
  }
}

/* ─────────────────────── Get Started Popup Modal ─────────────────────── */
function GetStartedModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your actual form handler / API
    setSubmitted(true);
  };

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-999 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Panel */}
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        style={{
          background: "linear-gradient(135deg, #1a2332 0%, #222e3e 60%, #1a2332 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* Accent top bar */}
        <div
          className="h-1 w-full"
          style={{ background: "linear-gradient(90deg, #ff9900, #f0c040, #ff9900)" }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors rounded-full p-1 hover:bg-white/10"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="px-8 pt-7 pb-8">
          {submitted ? (
            /* ── Success state ── */
            <div className="text-center py-6">
              <div
                className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full"
                style={{
                  background: "rgba(255,153,0,0.15)",
                  border: "2px solid #ff9900",
                }}
              >
                <svg
                  className="w-8 h-8 text-[#ff9900]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">You&apos;re All Set!</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Thanks for reaching out. Our publishing experts will contact you within 24&nbsp;hours.
              </p>
              <button
                onClick={onClose}
                className="bg-[#ff9900] hover:bg-[#e68900] text-white font-semibold text-sm px-8 py-2.5 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            /* ── Form state ── */
            <>
              <div className="mb-6">
                <span className="inline-block text-[#ff9900] text-xs font-bold tracking-widest uppercase mb-2">
                  Free Consultation
                </span>
                <h2 className="text-white text-2xl font-bold leading-tight">
                  Start Your Publishing Journey
                </h2>
                <p className="text-white/50 text-sm mt-1">
                  Fill in your details and we&apos;ll get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                {/* Full Name */}
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1 tracking-wide uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Smith"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.border = "1px solid #ff9900")}
                    onBlur={(e) =>
                      (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.12)")
                    }
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-white/70 text-xs font-semibold mb-1 tracking-wide uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.border = "1px solid #ff9900")}
                      onBlur={(e) =>
                        (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.12)")
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-xs font-semibold mb-1 tracking-wide uppercase">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.border = "1px solid #ff9900")}
                      onBlur={(e) =>
                        (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.12)")
                      }
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1 tracking-wide uppercase">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-all appearance-none cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: form.service ? "#fff" : "rgba(255,255,255,0.3)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.border = "1px solid #ff9900")}
                    onBlur={(e) =>
                      (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.12)")
                    }
                  >
                    <option value="" disabled style={{ background: "#222e3e" }}>
                      Select a service…
                    </option>
                    {services.map((s) => (
                      <option
                        key={s.href}
                        value={s.label}
                        style={{ background: "#222e3e", color: "#fff" }}
                      >
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1 tracking-wide uppercase">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Briefly describe your book idea or project goals…"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-all resize-none"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.border = "1px solid #ff9900")}
                    onBlur={(e) =>
                      (e.currentTarget.style.border = "1px solid rgba(255,255,255,0.12)")
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 w-full rounded-lg py-3 font-bold text-sm text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{ background: "linear-gradient(90deg, #ff9900, #f0a500)" }}
                >
                  Submit — Get a Free Quote
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
/* ───────────────────────────────────────────────────────────────────────── */

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();

  const openLiveChat = () => {
    window.Tawk_API?.toggle?.();
  };

  return (
    <>
      {/* ── Get Started Modal ── */}
      {showModal && <GetStartedModal onClose={() => setShowModal(false)} />}

      <header className="sticky top-0 z-50">
        {/* Top Bar */}
        <div className="bg-[#FFF5E8]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-10 flex items-center justify-center gap-4 md:gap-8">
            <a
              href={contactInfo.phoneTel}
              className="flex items-center gap-1.5 text-amazon-dark font-semibold text-xs md:text-sm hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              <Phone size={13} />
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="hidden sm:flex items-center gap-1.5 text-amazon-dark font-semibold text-xs md:text-sm hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              <Mail size={13} />
              {contactInfo.email}
            </a>
          </div>
        </div>

        {/* Main Nav */}
        <div className="bg-[#222E3E] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <img src={Logo.src} alt="Amazon Publisher House Logo" className="h-13 md:h-15 w-auto" />
            </Link>

            {/* CTA Buttons — desktop */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                onClick={() => setShowModal(true)}
                className="bg-amazon-orange hover:bg-amazon-orange/80 text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors outline-2 outline-offset-2 outline-amazon-orange"
              >
                Get Started
              </button>
              <button
                onClick={openLiveChat}
                className="bg-white hover:bg-white/80 text-amazon-dark font-semibold text-sm px-5 py-2.5 rounded border border-white/30 transition-colors flex items-center gap-2"
              >
                <MessageCircle size={15} />
                Live Chat
              </button>
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
                  className={`px-3 py-1.5 text-sm transition-colors h-full flex items-center border-b-2 hover:border-[#008296] hover:text-[#008296] ${
                    pathname === l.href
                      ? "border-[#008296] text-black font-bold"
                      : "border-transparent text-black"
                  }`}
                >
                  {l.label}
                </Link>
              ))}

              {/* Services dropdown */}
              <div className="hidden lg:block h-full">
                <NavigationMenu className="h-full">
                  <NavigationMenuList className="h-full">
                    <NavigationMenuItem className="h-full">
                      <NavigationMenuTrigger
                        className={`bg-transparent hover:text-[#008296] data-popup-open:text-[#008296] data-open:text-amazon-orange text-sm font-medium h-full px-3 py-1.5 border-b-2 rounded-none ${
                          pathname.startsWith("/services")
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
              {/* Mobile Get Started — opens modal */}
              <button
                onClick={() => {
                  setOpen(false);
                  setShowModal(true);
                }}
                className="w-full bg-[#b5862a] hover:bg-[#9e7424] text-white font-semibold text-sm px-4 py-2.5 rounded text-center transition-colors"
              >
                Get Started
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  openLiveChat();
                }}
                className="block bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-4 py-2.5 rounded text-center border border-white/30 transition-colors"
              >
                Live Chat
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
