import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import Quote from "@/app/assets/images/hero-images/Quote.png"

export default function AboutHero() {
  return (
    <>
      <section className="pb-10 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
            <div className="">
              <h1 className="text-4xl font-serif md:text-6xl tracking-tight text-[#131a22] leading-tight mb-4">
                Publish with us
              </h1>
              <p className="text-[#3a4553] text-base md:text-lg leading-relaxed max-w-xl mb-7">
                With Kindle Direct Publishing (KDP), it’s simple to publish and sell your book around the world on Amazon.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#f7b731] hover:bg-[#f2aa1f] text-[#131a22] font-semibold px-6 py-3 rounded-md transition-colors"
                >
                  Start now <ArrowRight size={15} />
                </Link>
                <Link
                  href="https://kdp.amazon.com/en_US/publish"
                  className="inline-flex items-center bg-transparent border border-[#c9d2de] hover:border-[#8b99ab] text-[#131a22] font-semibold px-6 py-3 rounded-md transition-colors"
                >
                  Learn more
                </Link>
              </div>
            </div>

            <div className="absolute -top-20 right-0">
              <Image src={Quote} height={"100"} width={700} alt="Hero Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
