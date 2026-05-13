import type { Metadata } from "next";
import { Suspense } from "react";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGenres from "@/components/portfolio/PortfolioGenres";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";
import BrandsSection from "@/components/sections/BrandsSection";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import WhyAmzKindlePublishers from "@/components/sections/WhyAmzKindlePublishers";
import AboutSection from "@/components/sections/AboutSection";
import WhatWePublish from "@/components/sections/WhatWePublish";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Portfolio — Published Books | Amazon Books Publishing",
  description: "Browse 2,500+ books we've published across every genre — from Amazon #1 bestsellers to debut authors finding their first readers.",
};

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f5f2eb] text-[#1f2937]">
        <PortfolioHero />
        <BrandsSection />
        <WhatWeOffer />
        <div className="bg-[#f5f2eb] mb-30">
          <WhyAmzKindlePublishers />
        </div>
        <PortfolioGenres />

        <section id="portfolio-grid" className="py-10 bg-[#f5f2eb]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif text-[#131a22] tracking-tight mb-3">
                Browse <span className="text-[#f59e0b]">Recent Work</span>
              </h2>
            </div>
            <Suspense fallback={null}>
              <PortfolioGrid />
            </Suspense>
          </div>
        </section>

        <AboutSection />
        <WhatWePublish />
        <ContactFormSection />
        <PortfolioCTA />
      </main>
      <SiteFooter />
    </>
  );
}
