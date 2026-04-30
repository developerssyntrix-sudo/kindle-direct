import SiteHeader from "@/components/sections/SiteHeader";
import HeroSection from "@/components/sections/HeroSection";
import BrandsSection from "@/components/sections/BrandsSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import FaqsSection from "@/components/sections/FaqsSection";
import SiteFooter from "@/components/sections/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <BrandsSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <CtaSection />
        <FaqsSection />
      </main>
      <SiteFooter />
    </>
  );
}
