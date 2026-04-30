import { ArrowRight, Phone } from "lucide-react";

interface ServiceCtaProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  note?: string;
}

export default function ServiceCta({
  heading = "Ready to Get Started?",
  subheading = "Book your free 30-minute strategy call today. We'll map out your entire publishing journey — no commitment required.",
  primaryLabel = "Book Free Consultation",
  note = "Free consultation · No commitment · 100% confidential",
}: ServiceCtaProps) {
  return (
    <section
      id="contact"
      className="py-10 md:py-15 bg-amazon-orange relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #232F3E 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-amazon-dark/10 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 md:px-6 text-center">
        <span className="inline-block bg-amazon-dark/15 text-amazon-dark text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          Free Consultation Available
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold text-amazon-dark leading-tight tracking-tight mb-4">
          {heading}
        </h2>

        <p className="text-amazon-dark/70 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href="mailto:hello@amazonbookspublishing.com"
            className="inline-flex items-center justify-center gap-2 bg-amazon-dark hover:bg-amazon-navy text-white font-bold px-7 py-3.5 rounded text-sm transition-colors shadow-lg"
          >
            <ArrowRight size={16} />
            {primaryLabel}
          </a>
          <a
            href="tel:+18005551234"
            className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 border-2 border-amazon-dark/20 text-amazon-dark font-bold px-7 py-3.5 rounded text-sm transition-colors"
          >
            <Phone size={16} />
            Call Us Now
          </a>
        </div>

        <p className="text-amazon-dark/50 text-xs">{note}</p>
      </div>
    </section>
  );
}
