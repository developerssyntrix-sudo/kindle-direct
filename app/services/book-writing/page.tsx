import type { Metadata } from "next";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceFaqs from "@/components/service-page/ServiceFaqs";
import BookWritingSteps from "@/components/services/book-writing/BookWritingSteps";
import BookWritingTestimonials from "@/components/services/book-writing/BookWritingTestimonials";
import BookWritingKindleCreate from "@/components/services/book-writing/BookWritingKindleCreate";
import BookWritingTools from "@/components/services/book-writing/BookWritingTools";
import BookWritingCTA from "@/components/services/book-writing/BookWritingCTA";
import BrandsSection from "@/components/sections/BrandsSection";
import LogoMarquee from "@/components/sections/LogoMarquee";
import PublishedAuthor from "@/components/sections/PublishedAuthor";
import ContactFormSection from "@/components/sections/ContactFormSection";

export const metadata: Metadata = {
  title: "Book Writing & Ghostwriting Services | Kindle Direct Publishing House",
  description: "Professional ghostwriting services for fiction, non-fiction, memoirs, and business books. 800+ manuscripts delivered. NDA protected. You own all rights.",
  keywords: ["book writing services", "ghostwriting services", "hire a ghostwriter", "memoir writing", "Kindle Direct Publishing House ghostwriting"],
  openGraph: {
    title: "Book Writing & Ghostwriting Services | Kindle Direct Publishing House",
    description: "Professional ghostwriting services for fiction, non-fiction, memoirs, and business books. 800+ manuscripts delivered. NDA protected.",
    type: "website",
  }
};

export default function BookWritingPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-[#131a22]">
        <ServiceHero
          badge="Ghostwriting & Book Writing"
          title="Professional Book Writing"
          highlight="By Expert Ghostwriters"
          description="From a rough idea to a market-ready manuscript — our seasoned ghostwriters craft compelling books in your voice, across every genre. You get full credit, full rights, and a book you're proud of."
          serviceName="Book Writing"
          bgImage="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1073&auto=format&fit=crop"
          symbolVariant="hash"
          stats={[
            { value: "800+", label: "Manuscripts Delivered" },
            { value: "60+", label: "Genres Covered" },
            { value: "100%", label: "NDA Protected" },
            { value: "8 Wks", label: "Average Delivery" },
          ]}
        />
        <BrandsSection />
        <BookWritingSteps />
        <LogoMarquee />
        <BookWritingTestimonials />
        <BookWritingKindleCreate />
        <PublishedAuthor />
        <BookWritingTools />
        <ServiceFaqs
          heading="Book Writing FAQs"
          faqs={[
            { q: "Will the book actually sound like me?", a: "Yes — that's our #1 priority. We use multi-session voice interviews, sample analysis, and iterative feedback loops to capture your natural tone, vocabulary, and rhythm. Most clients say they can't tell the difference from their own writing." },
            { q: "How many revisions are included?", a: "All Professional and Premium packages include unlimited revisions until you're 100% satisfied. Starter packages include 3 rounds, with additional rounds available at a flat fee." },
            { q: "Is the NDA legally binding?", a: "Yes. We use a mutual NDA drafted by our legal team that covers both parties. It's fully enforceable and we've never had a confidentiality breach in our history." },
            { q: "Can I provide chapters I've already written?", a: "Absolutely. Many clients have existing drafts, notes, or partially written chapters. We'll incorporate your existing work and match the style throughout the new content." },
            { q: "Do your writers have published credentials?", a: "Every writer on our team has published work under their own name. We match you to a writer with demonstrated experience in your specific genre — not just a general freelancer." },
            { q: "What if I want to change direction mid-project?", a: "It happens, and we plan for it. Minor direction changes are absorbed into the project. Major structural changes may affect the timeline but are handled with a change-order process, not a new contract." },
            { q: "Do I get to review the work as it's being written?", a: "Yes. We deliver chapter batches (typically 3–5 chapters at a time) so you can review, give feedback, and approve as we go. You're never waiting months to see the first page." },
          ]}
        />
        <BookWritingCTA />
        <ContactFormSection />
      </main>
      <SiteFooter />
    </>
  );
}
