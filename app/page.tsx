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
import PublishedAuthor from "@/components/sections/PublishedAuthor";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import WhyAmzKindlePublishers from "@/components/sections/WhyAmzKindlePublishers";
import ManuscriptToWork from "@/components/sections/ManuscriptToWork";
import WhatWePublish from "@/components/sections/WhatWePublish";
import KindleDirectPublishing from "@/components/sections/KindleDirectPublishing";
import ShareYourStory from "@/components/sections/ShareYourStory";
import BeYourOwnPublisher from "@/components/sections/BeYourOwnPublisher";
import ContactFormSection from "@/components/sections/ContactFormSection";
import LogoMarquee from "@/components/sections/LogoMarquee";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <BrandsSection />
        <AboutSection />
        <WhatWeOffer />
        <LogoMarquee />
        <ShareYourStory />
        <BeYourOwnPublisher />
        <KindleDirectPublishing />
        <PublishedAuthor />
        <WhyAmzKindlePublishers />
        <ManuscriptToWork />
        <WhatWePublish />
        <CtaSection />
        <FaqsSection />
        <ContactFormSection />
      </main>
      <SiteFooter />
    </>
  );
}
