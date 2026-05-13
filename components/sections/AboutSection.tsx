import Image from "next/image";
import { CheckCircle2, Award, Globe, BookMarked } from "lucide-react";

import ArrowBg from "@/app/assets/images/Arrow-About.webp"
import AboutLady from "@/app/assets/images/About-Lady.webp"

const features = [
  "Dedicated publishing consultant assigned to every project",
  "End-to-end service from manuscript to global distribution",
  "Amazon KDP certified — first-to-market expertise",
  "Full rights retained by the author, always",
  "Royalty-maximizing pricing & metadata strategy",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-8 md:py-10 relative overflow-hidden"
      style={{
        backgroundImage: `url(${ArrowBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* ── Left — Visual ── */}
          <div className="relative order-2 lg:order-2">
            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
              <Image
                src={AboutLady}
                alt="Start Your Publishing Journey with Us"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* ── Right — Copy ── */}
          <div className="order-1 lg:order-1">
            <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
              About Us
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-amazon-dark tracking-tight mb-3">
              The Publishing Partner <br />
              <span className="text-amazon-orange">Authors Actually Trust</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Over a decade helping authors publish professionally on Amazon — our team of 50+ editors, ghostwriters, and KDP experts handles everything so you can focus on your story.
            </p>

            <ul className="space-y-2 mb-5">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-amazon-orange mt-0.5 shrink-0"
                    fill="currentColor"
                    fillOpacity={0.15}
                  />
                  <span className="text-amazon-dark text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-amazon-dark hover:bg-amazon-navy text-white font-bold px-5 py-2.5 rounded text-sm transition-colors"
            >
              Meet Our Team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
