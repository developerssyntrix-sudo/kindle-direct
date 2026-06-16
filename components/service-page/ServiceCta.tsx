"use client";

import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { contactInfo } from "@/data/contact";
import GetStartedModal from "@/components/sections/GetStartedModal";

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
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="contact" className="py-12 md:py-14 bg-[#dfe6ea]">
      {showModal && <GetStartedModal onClose={() => setShowModal(false)} />}

      <div className="relative max-w-2xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#131a22] leading-tight tracking-tight mb-4">
          {heading}
        </h2>

        <p className="text-[#3a4553] text-base max-w-lg mx-auto mb-8 leading-relaxed">
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center justify-center gap-2 bg-[#f7b731] hover:bg-[#f2aa1f] text-[#131a22] font-semibold px-7 py-3.5 rounded-md text-sm transition-colors cursor-pointer"
          >
            <ArrowRight size={16} />
            {primaryLabel}
          </button>
          <a
            href={contactInfo.phoneTel}
            className="inline-flex items-center justify-center gap-2 border border-[#c9d2de] hover:border-[#8b99ab] text-[#131a22] font-semibold px-7 py-3.5 rounded-md text-sm transition-colors"
          >
            <Phone size={16} />
            Call Us Now
          </a>
        </div>

        <p className="text-[#6b7280] text-xs">{note}</p>
      </div>
    </section>
  );
}
