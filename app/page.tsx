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
import ReadyToJoinCTA from "@/components/sections/ReadyToJoinCTA";
import ShareYourStory from "@/components/sections/ShareYourStory";
import BeYourOwnPublisher from "@/components/sections/BeYourOwnPublisher";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <BrandsSection />
        <AboutSection />
        <BeYourOwnPublisher />
        <KindleDirectPublishing />
        <ShareYourStory />
        {/* <ServicesSection /> */}
        <PublishedAuthor />
        {/* <PortfolioSection /> */}
        <WhyAmzKindlePublishers />
        <WhatWeOffer />
        {/* <ProcessSection /> */}
        <ManuscriptToWork />
        <WhatWePublish />
        <CtaSection />
        {/* <TestimonialsSection /> */}
        <FaqsSection />
        <ReadyToJoinCTA />
      </main>
      <SiteFooter />
    </>
  );
}
