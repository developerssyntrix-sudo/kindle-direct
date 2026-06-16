import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import Quote from "@/app/assets/images/hero-images/Contact.png"


export default function ContactHero() {
  return (
    <section className="pb-10 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-serif md:text-6xl tracking-tight text-[#131a22] leading-tight mb-4">
              Contact Us
            </h1>
            <p className="text-[#3a4553] text-base md:text-lg leading-relaxed max-w-xl mb-7 mx-auto lg:mx-0">
              Whether you&apos;re just exploring or ready to start, we&apos;re here to help. Reach out through any of the channels below.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {/* <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f7b731] hover:bg-[#f2aa1f] text-[#131a22] font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Start now <ArrowRight size={15} />
              </Link> */}
              <Link
                href="/about"
                className="inline-flex items-center bg-transparent border border-[#c9d2de] hover:border-[#8b99ab] text-[#131a22] font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div className="absolute top-0 right-0 hidden lg:block">
            <Image src={Quote} height={"100"} width={600} alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
}
