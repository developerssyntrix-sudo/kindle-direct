import type { Metadata } from "next";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import FaqsHero from "@/components/faqs/FaqsHero";
import FaqsAccordion from "@/components/faqs/FaqsAccordion";
import FaqsCTA from "@/components/faqs/FaqsCTA";
import BrandsSection from "@/components/sections/BrandsSection";

export const metadata: Metadata = {
  title: "FAQs — Common Questions | Kindle Publisher House",
  description: "Everything you want to know about ghostwriting, publishing, editing, marketing, and pricing — answered honestly.",
};

export default function FaqsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-[#131a22]">
        <FaqsHero />
        <BrandsSection />
        <FaqsAccordion />
        <FaqsCTA />
      </main>
      <SiteFooter />
    </>
  );
}
