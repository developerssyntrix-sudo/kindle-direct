"use client";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

// Images
import Logo1 from "@/app/assets/images/Logos/1.png";
import Logo2 from "@/app/assets/images/Logos/2.png";
import Logo3 from "@/app/assets/images/Logos/3.png";
import Logo4 from "@/app/assets/images/Logos/4.png";
import Logo5 from "@/app/assets/images/Logos/5.png";
import Logo6 from "@/app/assets/images/Logos/6.png";
import Logo7 from "@/app/assets/images/Logos/7.png";
import Logo8 from "@/app/assets/images/Logos/8.png";

const logos = [
  { src: Logo1, alt: "Partner Logo 1" },
  { src: Logo2, alt: "Partner Logo 2" },
  { src: Logo3, alt: "Partner Logo 3" },
  { src: Logo4, alt: "Partner Logo 4" },
  { src: Logo5, alt: "Partner Logo 5" },
  { src: Logo6, alt: "Partner Logo 6" },
  { src: Logo7, alt: "Partner Logo 7" },
  { src: Logo8, alt: "Partner Logo 8" },
];

export default function LogoMarquee() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [AutoScroll({ speed: 1.5, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section className="bg-amazon-orange overflow-hidden select-none">
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-linear-to-r from-amazon-orange to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-linear-to-l from-amazon-orange to-transparent" />

        <div ref={emblaRef} className="overflow-hidden px-4">
          <div className="flex gap-6">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center justify-center h-auto w-auto"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  className="object-contain h-auto"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
