"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import amazonKdpLogo from "@/app/assets/svgs/brands/Amazon-KDP.svg";
import googleBooksLogo from "@/app/assets/svgs/brands/Google-Books.svg";
import ingramSparkLogo from "@/app/assets/svgs/brands/Ingram-Spark.webp";
import draft2digitalLogo from "@/app/assets/svgs/brands/Draft2Digital.svg";
import scribdLogo from "@/app/assets/svgs/brands/Scribd.svg";
import barnesNobleLogo from "@/app/assets/svgs/brands/Barnes&Noble.svg";
import appleBooksLogo from "@/app/assets/svgs/brands/Apple-Books.svg";
import luluPressLogo from "@/app/assets/svgs/brands/Lulu-Press.svg";
import koboLogo from "@/app/assets/svgs/brands/Kobo.svg";

const brands: { name: string; src: string }[] = [
  { name: "Amazon KDP", src: amazonKdpLogo.src },
  { name: "Google Books", src: googleBooksLogo.src },
  { name: "IngramSpark", src: ingramSparkLogo.src },
  { name: "Draft2Digital", src: draft2digitalLogo.src },
  { name: "Scribd", src: scribdLogo.src },
  { name: "Barnes & Noble", src: barnesNobleLogo.src },
  { name: "Apple Books", src: appleBooksLogo.src },
  { name: "Lulu Press", src: luluPressLogo.src },
  { name: "Kobo", src: koboLogo.src },
];

export default function BrandsSection() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [AutoScroll({ speed: 1.5, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section className="pt-5 pb-2 bg-amazon-surface border-y border-border">
      <div className="flex items-center flex-col mb-4 px-4 md:px-6">
        <h2 className="text-center text-4xl font-serif">Distributors</h2>
        <p className="text-center text-muted-foreground text-sm font-normal">
          We work with a wide array of online and physical distributors, working endlessly to ensure your work reaches the right audience.
        </p>
      </div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-3">
          {[...brands, ...brands].map((b, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center px-5 h-24 w-44">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={b.src}
                alt={b.name}
                className="h-20 w-auto max-w-[140px] object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
