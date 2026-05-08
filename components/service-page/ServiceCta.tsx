import { ArrowRight, Phone } from "lucide-react";
import { contactInfo } from "@/data/contact";

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
    <section id="contact" className="py-10 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1170&auto=format&fit=crop')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-amazon-dark/75" />
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #FF9900 1px, transparent 1px)", backgroundSize: "22px 22px" }} />

      <div className="relative max-w-2xl mx-auto px-4 md:px-6 text-center">
        <span className="inline-block bg-amazon-orange/20 border border-amazon-orange/30 text-amazon-orange text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          Free Consultation Available
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
          {heading}
        </h2>

        <p className="text-white/60 text-base max-w-lg mx-auto mb-8 leading-relaxed">
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
          <a
            href="mailto:hello@amazonbookspublishing.com"
            className="inline-flex items-center justify-center gap-2 bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-bold px-7 py-3.5 rounded text-sm transition-colors shadow-lg shadow-amazon-orange/20 outline outline-2 outline-offset-2 outline-amazon-orange/60"
          >
            <ArrowRight size={16} />
            {primaryLabel}
          </a>
          <a
            href={contactInfo.phoneTel}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-amazon-orange text-white hover:text-amazon-orange font-bold px-7 py-3.5 rounded text-sm transition-colors"
          >
            <Phone size={16} />
            Call Us Now
          </a>
        </div>

        <p className="text-white/30 text-xs">{note}</p>
      </div>
    </section>
  );
}
