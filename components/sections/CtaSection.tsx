import { Phone, MessageCircle } from "lucide-react";
import { BookWithSparkles } from "@/components/ui/book-arts";

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="py-10 md:py-15 bg-amazon-orange relative overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-amazon-dark/10 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #232F3E 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left — book illustration (desktop only) */}
          <div className="hidden lg:flex items-center justify-center">
            <BookWithSparkles className="w-72 h-64 drop-shadow-xl" />
          </div>

          {/* Right — CTA copy */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-amazon-dark/15 text-amazon-dark text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Limited Slots Available
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-amazon-dark leading-tight tracking-tight mb-4">
              Ready to Become a
              <br />
              Published Author?
            </h2>

            <p className="text-amazon-dark/70 text-base md:text-lg max-w-xl mb-8 leading-relaxed lg:mx-0 mx-auto">
              Book your free 30-minute strategy call today. No commitment, no
              pressure — just a clear path from your idea to a published book.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-amazon-dark hover:bg-amazon-navy text-white font-bold px-7 py-3.5 rounded text-sm transition-colors shadow-lg"
              >
                <MessageCircle size={16} />
                Book Free Consultation
              </a>
              <a
                href="tel:+18005551234"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 border-2 border-amazon-dark/20 text-amazon-dark font-bold px-7 py-3.5 rounded text-sm transition-colors backdrop-blur-sm"
              >
                <Phone size={16} />
                Call Us Now
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-amazon-dark/60 text-xs font-semibold">
              {[
                "✓ Free Consultation",
                "✓ No Hidden Fees",
                "✓ 100% Satisfaction Guarantee",
                "✓ You Own All Rights",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
