import Image from "next/image";
import aboutImg from "@/app/assets/images/About.jpg";
import { CheckCircle2, Award, Globe, BookMarked } from "lucide-react";
import { FloatingBooks } from "@/components/ui/book-arts";

const achievements = [
  { value: "2,500+", label: "Published Titles" },
  { value: "98%", label: "Client Retention" },
  { value: "50+", label: "Genre Experts" },
  { value: "10+", label: "Years in Industry" },
];

const features = [
  "Dedicated publishing consultant assigned to every project",
  "End-to-end service from manuscript to global distribution",
  "Amazon KDP certified — first-to-market expertise",
  "Full rights retained by the author, always",
  "Royalty-maximizing pricing & metadata strategy",
];

const pillars = [
  { icon: Award, label: "Award-Winning Team" },
  { icon: Globe, label: "Global Distribution" },
  { icon: BookMarked, label: "All Genres Covered" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-10 md:py-15 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left — Visual ── */}
          <div className="relative order-2 lg:order-1">
            {/* Background shape */}
            <div className="absolute -inset-4 bg-amazon-surface rounded-3xl -z-10" />

            {/* About image */}
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mb-4 shadow-md">
              <Image
                src={aboutImg}
                alt="Amazon Books Publishing team at work"
                fill
                className="object-cover"
              />
            </div>

            {/* Stat cards grid */}
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((a, i) => (
                <div
                  key={a.label}
                  className={`rounded-2xl p-4 flex flex-col justify-between min-h-[90px] ${i === 0
                      ? "bg-amazon-dark text-white"
                      : i === 1
                        ? "bg-amazon-orange"
                        : i === 2
                          ? "bg-white border border-border"
                          : "bg-amazon-navy text-white"
                    }`}
                >
                  <p className={`text-2xl font-extrabold leading-none ${i === 1 ? "text-amazon-dark" : i === 2 ? "text-amazon-dark" : "text-white"
                    }`}>
                    {a.value}
                  </p>
                  <p className={`text-xs font-semibold mt-1.5 ${i === 1 ? "text-amazon-dark/70" : i === 2 ? "text-muted-foreground" : "text-white/60"
                    }`}>
                    {a.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Pillar badges */}
            <div className="flex flex-wrap gap-2.5 mt-3">
              {pillars.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 shadow-sm"
                >
                  <Icon size={14} className="text-amazon-orange" />
                  <span className="text-amazon-dark text-xs font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — Copy ── */}
          <div className="order-1 lg:order-2">
            <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-amazon-dark leading-tight tracking-tight mb-4">
              The Publishing Partner
              <br />
              <span className="text-amazon-orange">Authors Actually Trust</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Amazon Books Publishing was founded with one mission: to give
              every author — regardless of experience — a professional,
              stress-free path to publication. We&apos;ve spent over a decade
              perfecting our craft on the world&apos;s largest book marketplace.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Our team of 50+ genre specialists, certified editors, and Amazon
              KDP experts work as an extension of your creative vision,
              delivering polished, market-ready books that stand out in a
              crowded marketplace.
            </p>

            <ul className="space-y-2.5 mb-7">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
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
              className="inline-flex items-center gap-2 bg-amazon-dark hover:bg-amazon-navy text-white font-bold px-6 py-3 rounded text-sm transition-colors"
            >
              Meet Our Team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
