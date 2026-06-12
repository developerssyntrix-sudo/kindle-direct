import Image from "next/image";
import heroBg from "@/app/assets/images/hero-bg.jpg";
import { ArrowRight, Star, BookCheck, Users, Trophy, BadgeCheck } from "lucide-react";
import { Button } from "../ui/button";

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
      <div className="absolute inset-0 z-1 bg-linear-to-b from-white via-white/90 to-transparent pointer-events-none" />

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
        {/* <span className="inline-flex items-center gap-1.5 bg-amazon-orange/10 border border-amazon-orange/30 text-amazon-orange text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          <Star size={11} fill="currentColor" />
          #1 Rated Kindle Publishing Agency
        </span> */}

        {/* Heading */}
        <h1 className="text-4xl font-serif md:text-5xl xl:text-6xl text-amazon-dark leading-[1.08] tracking-tight mb-5">
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

        <div className="mt-10 bg-white border border-border rounded-md shadow-md overflow-hidden">
          {/* Form header bar */}
          <div className="bg-secondary px-6 py-4">
            <h3 className="font-serif text-white text-base">
              Start Your Publishing Journey
            </h3>
            <p className="text-white/60 text-xs mt-0.5">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {/* Form body */}
          <div className="px-6 py-6 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col items-start gap-1.5">
                <label className="text-xs font-serif text-amazon-dark uppercase tracking-wide">
                  Book Title
                </label>
                <input
                  type="text"
                  className="w-full border border-border rounded-sm py-2.5 px-3 text-sm text-amazon-dark placeholder:text-muted-foreground focus:outline-none focus:border-amazon-orange bg-amazon-surface"
                  placeholder="Enter your book title"
                />
              </div>

              <div className="flex flex-col items-start gap-1.5">
                <label className="text-xs font-serif text-amazon-dark uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full border border-border rounded-sm py-2.5 px-3 text-sm text-amazon-dark placeholder:text-muted-foreground focus:outline-none focus:border-amazon-orange bg-amazon-surface"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="flex flex-col items-start gap-1.5">
                <label className="text-xs font-serif text-amazon-dark uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-border rounded-sm py-2.5 px-3 text-sm text-amazon-dark placeholder:text-muted-foreground focus:outline-none focus:border-amazon-orange bg-amazon-surface"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex flex-col items-start gap-1.5">
                <label className="text-xs font-serif text-amazon-dark uppercase tracking-wide">
                  Service Interested In
                </label>
                <select
                  className="w-full border border-border rounded-sm py-2.5 px-3 text-sm text-amazon-dark focus:outline-none focus:border-amazon-orange bg-amazon-surface appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a service...
                  </option>
                  <option value="ghostwriting">Ghostwriting</option>
                  <option value="editing">Editing</option>
                  <option value="cover-design">Cover Design</option>
                  <option value="publishing">Publishing</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>
            </div>

            <button className="w-full bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-bold text-sm py-3 rounded-sm transition-colors duration-150 uppercase tracking-wide cursor-pointer">
              Get a Free Consultation →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
