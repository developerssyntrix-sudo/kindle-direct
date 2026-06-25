import type { Metadata } from "next";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import FaqsHero from "@/components/faqs/FaqsHero";
import FaqsAccordion from "@/components/faqs/FaqsAccordion";
import FaqsCTA from "@/components/faqs/FaqsCTA";
import BrandsSection from "@/components/sections/BrandsSection";

export const metadata: Metadata = {
  title: "FAQs — Common Questions | Kindle Direct Publishing House",
  description: "Everything you want to know about ghostwriting, publishing, editing, marketing, and pricing — answered honestly.",
  keywords: ["publishing FAQ", "book editing FAQ", "ghostwriting cost FAQ", "Kindle Direct Publishing House FAQ"],
  openGraph: {
    title: "FAQs — Common Questions | Kindle Direct Publishing House",
    description: "Everything you want to know about ghostwriting, publishing, editing, marketing, and pricing — answered honestly.",
    type: "website",
  }
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
