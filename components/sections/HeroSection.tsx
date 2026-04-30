import Image from "next/image";
import heroBg from "@/app/assets/images/hero-bg.jpg";
import { ArrowRight, Star, BookCheck, Users, Trophy, BadgeCheck } from "lucide-react";

const stats = [
  { icon: BookCheck, value: "2,500+", label: "Books Published" },
  { icon: Users, value: "1,200+", label: "Happy Authors" },
  { icon: Trophy, value: "98%", label: "Satisfaction Rate" },
  { icon: Star, value: "10+", label: "Years Experience" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white py-10 md:py-15"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Gradient overlay: white at top, transparent at bottom */}
      <div className="absolute inset-0 z-1 bg-linear-to-b from-white via-white to-transparent pointer-events-none" />

      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 z-2 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #D5D9D9 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Orange glow — centred */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-amazon-orange/8 rounded-full blur-3xl pointer-events-none z-2" />


      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 bg-amazon-orange/10 border border-amazon-orange/30 text-amazon-orange text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          <Star size={11} fill="currentColor" />
          #1 Rated Amazon Publishing Agency
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-amazon-dark leading-[1.08] tracking-tight mb-5">
          Your Story Deserves{" "}
          <span className="text-amazon-orange relative inline-block">
            to Be Heard
            <svg
              className="absolute -bottom-1.5 left-0 w-full"
              height="5"
              viewBox="0 0 200 5"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0 3 Q100 0 200 3"
                stroke="#FF9900"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          From manuscript to bestseller — we handle every step of your
          publishing journey with expert ghostwriters, designers, editors,
          and marketers.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-bold px-7 py-3 rounded text-sm transition-colors shadow-md shadow-amazon-orange/20"
          >
            Get Free Consultation <ArrowRight size={15} />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 border-2 border-amazon-dark text-amazon-dark hover:bg-amazon-dark hover:text-white font-bold px-7 py-3 rounded text-sm transition-colors"
          >
            View Our Work
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-amazon-orange fill-amazon-orange" />
            ))}
            <span className="text-sm font-semibold text-amazon-dark ml-1.5">4.9/5</span>
            <span className="text-muted-foreground text-sm ml-1">(500+ reviews)</span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <BadgeCheck size={15} className="text-amazon-teal" />
            Amazon Verified Partner
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div className="mt-14">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-border shadow-sm px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amazon-orange/10 border border-amazon-orange/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-amazon-orange" />
                </div>
                <div className="text-left">
                  <p className="text-amazon-dark font-extrabold text-2xl leading-none">{value}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
