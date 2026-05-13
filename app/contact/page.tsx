import type { Metadata } from "next";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import ContactSidebar from "@/components/contact/ContactSidebar";
import ContactMap from "@/components/contact/ContactMap";
import BrandsSection from "@/components/sections/BrandsSection";
import WhyAmzKindlePublishers from "@/components/sections/WhyAmzKindlePublishers";

export const metadata: Metadata = {
  title: "Contact Us — Free Consultation | Amazon Books Publishing",
  description: "Book your free 30-minute publishing consultation. We respond within 1 business hour. No pressure, no commitment — just clarity on your publishing path.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-[#131a22]">
        <ContactHero />
        <BrandsSection />
        <ContactCards />
        <div className="bg-white mb-30">
          <WhyAmzKindlePublishers />
        </div>

        <section className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-serif text-[#131a22] mb-1">Send Us a Message</h2>
                <p className="text-[#565959] text-sm mb-6">Fill in the form and we&apos;ll reach out within 1 business hour.</p>
                <div className="border border-[#d5d9d9] rounded p-6 bg-white">
                  <ContactForm />
                </div>
              </div>
              <ContactSidebar />
            </div>
          </div>
        </section>

        <ContactMap />
      </main>
      <SiteFooter />
    </>
  );
}
