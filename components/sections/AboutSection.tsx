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
    <section id="about" className="py-8 md:py-10 bg-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* ── Left — Visual ── */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 bg-amazon-surface rounded-2xl -z-10" />
            <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden outline-4 outline-offset-2 outline-dashed outline-amazon-orange">
              <Image
                src={aboutImg}
                alt="Amazon Books Publishing team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* ── Right — Copy ── */}
          <div className="order-1 lg:order-2">
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

            {/* Stat cards grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-4">
              {achievements.map((a, i) => (
                <div
                  key={a.label}
                  className={`rounded-xl p-3 flex flex-col justify-between min-h-[74px] ${i === 0
                    ? "bg-amazon-dark text-white"
                    : i === 1
                      ? "bg-amazon-orange"
                      : i === 2
                        ? "bg-white border border-border"
                        : "bg-amazon-navy text-white"
                    }`}
                >
                  <p className={`text-xl font-extrabold leading-none ${i === 1 ? "text-amazon-dark" : i === 2 ? "text-amazon-dark" : "text-white"}`}>
                    {a.value}
                  </p>
                  <p className={`text-xs font-semibold mt-1 ${i === 1 ? "text-amazon-dark/70" : i === 2 ? "text-muted-foreground" : "text-white/60"}`}>
                    {a.label}
                  </p>
                </div>
              ))}
            </div>

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
