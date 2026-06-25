import type { Metadata } from "next";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import AboutHero from "@/components/about/AboutHero";
import AboutSteps from "@/components/about/AboutSteps";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutTools from "@/components/about/AboutTools";
import AboutCTA from "@/components/about/AboutCTA";
import BrandsSection from "@/components/sections/BrandsSection";
import AboutSection from "@/components/sections/AboutSection";
import WhatWePublish from "@/components/sections/WhatWePublish";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "About Us | Kindle Direct Publishing House",
  description: "Publish with us. Explore our 3-step publishing process, author support, and free tools inspired by the kindle direct publishing house experience.",
  keywords: ["about Kindle Direct Publishing House", "book publishing process", "publishing history", "author support services"],
  openGraph: {
    title: "About Us | Kindle Direct Publishing House",
    description: "Publish with us. Explore our 3-step publishing process, author support, and free tools inspired by the kindle direct publishing house experience.",
    type: "website",
  }
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f5f2eb] text-[#1f2937]">
        <AboutHero />
        <BrandsSection />
        <AboutSection />
        <WhatWePublish />
        <ContactFormSection />
        <AboutSteps />
        <AboutTestimonials />
        <AboutTools />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
