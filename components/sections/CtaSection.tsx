import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { contactInfo } from "@/data/contact";

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1637681068516-2b22116e68cf?q=80&w=1920&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-amazon-dark/80 pointer-events-none" />

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Orange warm glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-amazon-orange/20 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
          Ready to Become a <br />
          <span className="text-amazon-orange">Published Author?</span>
        </h2>

        <p className="text-white/55 text-base md:text-lg leading-relaxed mb-8">
          Book your free 30-minute strategy call. No commitment, no pressure —
          just a clear roadmap from your idea to a book on Amazon.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-bold px-8 py-3.5 rounded text-sm transition-colors shadow-lg shadow-amazon-orange/25 outline-2 outline-offset-2 outline-amazon-orange/60"
          >
            <MessageCircle size={16} />
            Book Free Consultation
          </Link>
          <a
            href={contactInfo.phoneTel}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/18 border border-white/20 text-white font-bold px-8 py-3.5 rounded text-sm transition-colors backdrop-blur-sm"
          >
            <Phone size={16} />
            {contactInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
