import type { Metadata } from "next";
import ServicePageLayout from "@/components/service-page/ServicePageLayout";

export const metadata: Metadata = {
  title: "Poetry Publishing Services | Amazon Publisher House",
  description:
    "Publish your poetry collection on Amazon KDP and globally. Editorial curation, interior typesetting, cover design, and marketing for poets who mean business.",
  keywords: ["poetry publishing services", "publish poetry book", "poetry collection formatting", "Amazon KDP poetry", "Amazon Publisher House poetry"],
  openGraph: {
    title: "Poetry Publishing Services | Amazon Publisher House",
    description: "Publish your poetry collection on Amazon KDP and globally. Editorial curation, interior typesetting, cover design, and marketing.",
    type: "website",
  }
};

const steps = [
  {
    step: "Step 1",
    title: "Curate your poems and refine the collection",
    bullets: [
      "We help organize your poems into a cohesive collection with a clear arc and theme.",
      "Title selection, sequence, and cover direction are chosen to reflect your poetic voice.",
      "The collection is polished while preserving your unique tone and imagery.",
    ],
    tags: ["Collection", "Curation", "Voice"],
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "Design beautiful interior and cover art",
    bullets: [
      "We create a cover that matches the mood of your poems and stands out on Amazon.",
      "Interior layout is designed for print and eBook readability while preserving poetic spacing.",
      "We prepare the files for both KDP and global ebook distribution.",
    ],
    tags: ["Cover", "Layout", "Formatting"],
    image:
      "https://plus.unsplash.com/premium_photo-1721762724240-5fc7a56c38f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    step: "Step 3",
    title: "Publish and promote your poetry to readers",
    bullets: [
      "We publish your collection on Amazon and global ebook platforms.",
      "Poetry-specific marketing notes help your book reach readers who love verse.",
      "You receive a polished, professional poetry book ready for launch."
    ],
    tags: ["KDP", "eBook", "Print"],
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop",
  },
];

const faqItems = [
  {
    q: "Can I publish a poetry collection on KDP?",
    a: "Yes. We publish poetry collections as both eBook and paperback, formatted to preserve line breaks and page spacing.",
  },
  {
    q: "Do you help with cover design for poetry?",
    a: "Yes. We design covers that reflect your voice and help your poetry stand out in Amazon search results.",
  },
  {
    q: "What if my poems are already published elsewhere?",
    a: "We can still publish your collection if you retain rights. We will help with metadata, acknowledgments, and rights language.",
  },
  {
    q: "Will the formatting work for print and ebook?",
    a: "Yes. We deliver a poetry-ready print PDF and ebook files formatted for Kindle with careful attention to spacing.",
  },
];

export default function PoetryPublishingPage() {
  return (
    <ServicePageLayout
      badge="Poetry Publishing"
      title="Publish Your Poetry"
      highlight="With Precision"
      description="We publish your poetry collection with care — editorial flow, cover design, formatting, and KDP publishing for readers who love verse."
      serviceName="Poetry Publishing"
      bgImage="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1170&auto=format&fit=crop"
      symbolVariant="wave"
      stats={[
        { value: "200+", label: "Poetry Collections Published" },
        { value: "30+", label: "Poetry Imprints Worked With" },
        { value: "100%", label: "Verse Formatting Accuracy" },
        { value: "7 Days", label: "Proof Delivery" },
      ]}
      steps={steps}
      faqItems={faqItems}
    />
  );
}
