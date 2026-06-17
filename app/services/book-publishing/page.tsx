import type { Metadata } from "next";
import ServicePageLayout from "@/components/service-page/ServicePageLayout";

export const metadata: Metadata = {
  title: "Book Publishing Services — Amazon KDP Experts | Amazon Publisher House",
  description:
    "Professional Amazon KDP publishing services. ISBN assignment, metadata optimization, global distribution, and a live book in 14 days or less.",
  keywords: ["Amazon KDP experts", "book publishing services", "ISBN assignment", "publish book on Amazon", "Amazon Publisher House publishing"],
  openGraph: {
    title: "Book Publishing Services — Amazon KDP Experts | Amazon Publisher House",
    description: "Professional Amazon KDP publishing services. ISBN assignment, metadata optimization, global distribution, and a live book in 14 days or less.",
    type: "website",
  }
};

const steps = [
  {
    step: "Step 1",
    title: "Prepare your manuscript, cover, and metadata",
    bullets: [
      "Format your book for KDP and print distribution with professional layout.",
      "Set your title, subtitle, author bio, keywords, and categories for discoverability.",
      "Create a cover that converts both in storefront and search results.",
    ],
    tags: ["KDP", "IngramSpark", "Global Distribution"],
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "Upload, proof, and approve your book",
    bullets: [
      "Upload your files into KDP and review the digital preview on every device.",
      "Order print proofs when needed and finalize the formatting and cover placement.",
      "Verify pricing, rights, and distribution options before publishing.",
    ],
    tags: ["Proof Copy", "Pricing", "Territories"],
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "Launch your book and monitor performance",
    bullets: [
      "Publish your book on Amazon and worldwide retail stores.",
      "Monitor sales rank, reviews, and early launch performance.",
      "Adjust pricing, keywords, and distribution based on real results.",
    ],
    tags: ["Launch", "Analytics", "Optimization"],
    image:
      "https://images.unsplash.com/photo-1623414686230-2d74a4d73cd5?q=80&w=1030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const faqItems = [
  {
    q: "Do you publish both paperback and eBook editions?",
    a: "Yes. We publish your title as an Amazon eBook and as a print-on-demand paperback. Hardcover publishing is also available in our Full Formats package.",
  },
  {
    q: "How long does publishing on KDP take?",
    a: "Once all files are received, we typically have your book live within 14 business days. Expedited 7-day delivery is available for select packages.",
  },
  {
    q: "Can you help me with ISBN and distribution?",
    a: "Absolutely. We assign ISBNs for print and eBook, set up KDP and IngramSpark, and configure global marketplace distribution.",
  },
  {
    q: "Will you optimize my metadata for Amazon search?",
    a: "Yes. We research keywords and categories, write optimized descriptions, and set your pricing to maximize discoverability.",
  },
];

export default function BookPublishingPage() {
  return (
    <ServicePageLayout
      badge="Book Publishing"
      title="Publish on Amazon"
      highlight="Like a Pro"
      description="We handle every technical detail of Amazon KDP publishing — from formatting and metadata to global distribution and a speedy launch."
      serviceName="Book Publishing"
      bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1170&auto=format&fit=crop"
      symbolVariant="at"
      stats={[
        { value: "2,500+", label: "Books Published" },
        { value: "40+", label: "Distribution Platforms" },
        { value: "14 Days", label: "Average Time to Live" },
        { value: "#1", label: "KDP-Certified Agency" },
      ]}
      steps={steps}
      faqItems={faqItems}
    />
  );
}
