import type { Metadata } from "next";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import AboutHero from "@/components/about/AboutHero";
import AboutSteps from "@/components/about/AboutSteps";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutTools from "@/components/about/AboutTools";
import AboutCTA from "@/components/about/AboutCTA";
import BrandsSection from "@/components/sections/BrandsSection";

export const metadata: Metadata = {
  title: "About Us | Amazon Books Publishing",
  description: "Publish with us. Explore our 3-step publishing process, author support, and free tools inspired by the KDP experience.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f5f2eb] text-[#1f2937]">
        <AboutHero />
        <BrandsSection />
        <AboutSteps />
        <AboutTestimonials />
        <AboutTools />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
