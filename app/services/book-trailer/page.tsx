import type { Metadata } from "next";
import ServicePageLayout from "@/components/service-page/ServicePageLayout";

export const metadata: Metadata = {
  title: "Book Trailer Production Services | Amazon Publisher House",
  description:
    "Cinematic book trailers that stop the scroll — concept, script, voiceover, motion graphics, and social media cuts included. Starting at $599.",
  keywords: ["book trailer production", "cinematic book trailer", "book video promo", "BookTok trailer", "Amazon Publisher House trailer"],
  openGraph: {
    title: "Book Trailer Production Services | Amazon Publisher House",
    description: "Cinematic book trailers that stop the scroll — concept, script, voiceover, motion graphics, and social media cuts included.",
    type: "website",
  }
};

const steps = [
  {
    step: "Step 1",
    title: "Define the concept and script",
    bullets: [
      "We identify the trailer's emotional hook, narrative structure, and visual style.",
      "Our script is written to convert viewers into readers and reflect your book's voice.",
      "You approve the direction before production begins.",
    ],
    tags: ["Concept", "Script", "Story"],
    image:
      "https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    step: "Step 2",
    title: "Produce the video and voiceover",
    bullets: [
      "We source footage, graphics, and licensed soundtrack for your genre.",
      "Professional voiceover and motion design bring your story to life.",
      "The first cut is delivered for review within days.",
    ],
    tags: ["Motion", "Voiceover", "Music"],
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "Review, revise, and publish across platforms",
    bullets: [
      "We revise the trailer until it feels perfect for your book.",
      "Final deliverables include formats for TikTok, Instagram, YouTube, and Facebook.",
      "You get every file ready to launch your campaign immediately.",
    ],
    tags: ["TikTok", "Instagram", "YouTube"],
    image:
      "https://images.unsplash.com/photo-1700667161479-61a7bb8c47fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const faqItems = [
  {
    q: "What does a book trailer cost?",
    a: "Our standard trailers start at $599, including script, footage, voiceover, and multiple format deliveries.",
  },
  {
    q: "How long does production take?",
    a: "Most trailers are delivered within 14 business days after concept approval. Rush delivery is available on request.",
  },
  {
    q: "Will the trailer work for BookTok?",
    a: "Yes. We deliver vertical and square versions optimized for TikTok, Instagram Reels, and other short-form platforms.",
  },
  {
    q: "Can I use my own voiceover or footage?",
    a: "Yes. You can provide your own assets, or we can handle everything end to end with our production team.",
  },
];

export default function BookTrailerPage() {
  return (
    <ServicePageLayout
      badge="Book Trailer Production"
      title="Cinematic Book Trailers"
      highlight="That Stop the Scroll"
      description="We produce emotionally compelling video trailers for your book — concept, script, voiceover, motion graphics, and social deliverables included."
      serviceName="Book Trailer"
      bgImage="https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1170&auto=format&fit=crop"
      symbolVariant="plus"
      stats={[
        { value: "400+", label: "Trailers Produced" },
        { value: "5M+", label: "Combined Views" },
        { value: "4 Styles", label: "Trailer Types" },
        { value: "14 Days", label: "Delivery Guarantee" },
      ]}
      steps={steps}
      faqItems={faqItems}
    />
  );
}
