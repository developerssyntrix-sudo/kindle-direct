"use client"; // 1. Needed for Next.js App Router when using state hooks

import { useState } from "react"; // 2. Added missing useState import
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import GetStartedModal from "@/components/sections/GetStartedModal";

import Quote from "@/app/assets/images/hero-images/Quote.png";

export default function AboutHero() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      {showModal && <GetStartedModal onClose={() => setShowModal(false)} />}
      
      <section className="pb-10 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-serif md:text-6xl tracking-tight text-[#131a22] leading-tight mb-4">
                Publish with us
              </h1>
              <p className="text-[#3a4553] text-base md:text-lg leading-relaxed max-w-xl mb-7 mx-auto lg:mx-0">
                With Kindle Direct Publishing (KDP), it’s simple to publish and sell your book around the world on Amazon.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {/* Pro-tip: If this button only opens a modal, consider changing <Link> to a <button> for better HTML semantics */}
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2 bg-[#f7b731] hover:bg-[#f2aa1f] text-[#131a22] font-semibold px-6 py-3 rounded-md transition-colors"
                >
                  Start now <ArrowRight size={15} />
                </button>
                {/* <Link
                  href="/"
                  className="inline-flex items-center bg-transparent border border-[#c9d2de] hover:border-[#8b99ab] text-[#131a22] font-semibold px-6 py-3 rounded-md transition-colors"
                >
                  Learn more
                </Link> */}
              </div>
            </div>

            <div className="absolute -top-20 right-0 hidden lg:block">
              {/* Note: In Next.js Image component, numbers shouldn't be wrapped in quotes for width/height */}
              <Image src={Quote} height={100} width={700} alt="Hero Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}