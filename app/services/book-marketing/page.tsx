import type { Metadata } from "next";
import ServicePageLayout from "@/components/service-page/ServicePageLayout";

export const metadata: Metadata = {
  title: "Book Marketing Services — Amazon Ads & Launch Strategy | Amazon Publisher House",
  description:
    "Data-driven Amazon book marketing — AMS ads, ARC campaigns, BookTok strategy, and launch week execution. Turn your book into a bestseller.",
  keywords: ["book marketing services", "Amazon ads for books", "AMS ads", "book launch strategy", "Amazon Publisher House marketing"],
  openGraph: {
    title: "Book Marketing Services — Amazon Ads & Launch Strategy | Amazon Publisher House",
    description: "Data-driven Amazon book marketing — AMS ads, ARC campaigns, BookTok strategy, and launch week execution.",
    type: "website",
  }
};

const steps = [
  {
    step: "Step 1",
    title: "Audit your book and target audience",
    bullets: [
      "Review your cover, description, keywords, and current listing performance.",
      "Identify the ideal audience, genre placement, and launch positioning.",
      "Build a marketing plan based on your goals and your book's strengths.",
    ],
    tags: ["AMS", "ARC", "BookTok"],
    image:
      "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    step: "Step 2",
    title: "Launch campaigns that drive real sales",
    bullets: [
      "Set up and optimize Amazon ad campaigns with data-backed bids.",
      "Coordinate ARC readers, influencer outreach, and launch buzz.",
      "Create targeted ad copy and promotional assets for each stage.",
    ],
    tags: ["Launch", "Ads", "Reviews"],
    image:
      "https://images.unsplash.com/photo-1734171740579-599b0fba66ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    step: "Step 3",
    title: "Scale momentum and optimize for growth",
    bullets: [
      "Monitor performance, refine keywords, and expand profitable campaigns.",
      "Use sales data to improve your book listing and promotional strategy.",
      "Maintain momentum with ongoing optimization and campaign management.",
    ],
    tags: ["ROAS", "Optimization", "Growth"],
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
  },
];

const faqItems = [
  {
    q: "Do you run Amazon ads for every book?",
    a: "Yes. We set up AMS campaigns tailored to your book, genre, and launch timeline to maximize visibility and sales.",
  },
  {
    q: "What is an ARC campaign?",
    a: "ARC stands for Advance Review Copy. We coordinate readers who provide verified reviews before launch to build trust and traction.",
  },
  {
    q: "Can you market an already published book?",
    a: "Absolutely. We specialize in re-launch campaigns and book marketing for titles that need a fresh audience.",
  },
  {
    q: "How do you measure success?",
    a: "We track ROAS, sales velocity, Amazon rank, review growth, and discoverability metrics to measure launch performance.",
  },
];

export default function BookMarketingPage() {
  return (
    <ServicePageLayout
      badge="Book Marketing"
      title="Amazon Book Marketing"
      highlight="That Actually Sells Books"
      description="We build and execute data-driven campaigns that turn your book into a bestseller — Amazon ads, ARC readers, social launches, and full launch strategy included."
      serviceName="Book Marketing"
      bgImage="https://images.unsplash.com/photo-1591696205602-5f7b5ae97cf1?q=80&w=1170&auto=format&fit=crop"
      symbolVariant="ampersand"
      stats={[
        { value: "150+", label: "Bestseller Launches" },
        { value: "4.2x", label: "Average ROAS" },
        { value: "300%", label: "Sales Lift" },
        { value: "72 Hrs", label: "Bestseller List Time" },
      ]}
      steps={steps}
      faqItems={faqItems}
    />
  );
}
