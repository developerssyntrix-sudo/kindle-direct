import type { Metadata } from "next";
import ServicePageLayout from "@/components/service-page/ServicePageLayout";

export const metadata: Metadata = {
  title: "Book Editing & Proofreading Services | Kindle Direct Publishing House",
  description:
    "Professional book editing and proofreading — developmental, line, copy editing, and final proofread. Genre-matched editors. Turnaround in 14–21 days.",
  keywords: ["book editing services", "proofreading services", "copy editing", "developmental editing", "Kindle Direct Publishing House editing"],
  openGraph: {
    title: "Book Editing & Proofreading Services | Kindle Direct Publishing House",
    description: "Professional book editing and proofreading — developmental, line, copy editing, and final proofread. Genre-matched editors.",
    type: "website",
  }
};

const steps = [
  {
    step: "Step 1",
    title: "Review your manuscript and sample edit",
    bullets: [
      "Submit your manuscript and receive a free sample edit for the first 2,000 words.",
      "We diagnose structure, pacing, voice, and technical issues before work begins.",
      "Choose the level of editing that fits your book: developmental, line, copy, or proofreading.",
    ],
    tags: ["Developmental", "Line", "Copy"],
    image:
      "https://images.unsplash.com/photo-1518933165971-611dbc9c412d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "Edit with clear comments and tracked changes",
    bullets: [
      "Receive manuscript edits in Word with tracked changes and inline commentary.",
      "We preserve your voice while improving clarity, flow, and readability.",
      "Regular check-ins ensure edits match your creative vision every step of the way.",
    ],
    tags: ["Feedback", "Voice Preservation", "Clarity"],
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "Finalize and deliver your publication-ready manuscript",
    bullets: [
      "We proofread the final draft for grammar, consistency, and formatting.",
      "You receive clean files ready for cover design, layout, or immediate publishing.",
      "Optional review call available to walk through the final edits and next steps.",
    ],
    tags: ["Proofreading", "Final Files", "Launch Ready"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
];

const faqItems = [
  {
    q: "What's included in your editing packages?",
    a: "Every package includes a full manuscript review, tracked changes, inline comments, and a summary of recommended revisions.",
  },
  {
    q: "Can I see a sample edit before committing?",
    a: "Yes. We provide a free 2,000-word sample edit so you can evaluate our quality before choosing a full package.",
  },
  {
    q: "Will editing change my voice?",
    a: "No. Our editors strengthen your voice and clarify your message — they do not rewrite your story unless you ask them to.",
  },
  {
    q: "How long does a full edit take?",
    a: "Most full edits are delivered in 14–21 business days depending on manuscript length and selected service level.",
  },
];

export default function BookEditingPage() {
  return (
    <ServicePageLayout
      badge="Editing & Proofreading"
      title="Professional Book Editing"
      highlight="That Elevates Every Page"
      description="Our genre-matched editors work at every level — from developmental structure to final-pass proofreading. The difference between a good book and a great one is great editing."
      serviceName="Book Editing & Proofreading"
      bgImage="https://images.unsplash.com/photo-1616711642010-f7822e169fb5?q=80&w=1170&auto=format&fit=crop"
      symbolVariant="diamond"
      stats={[
        { value: "3,000+", label: "Manuscripts Edited" },
        { value: "48 Hrs", label: "Sample Edit Turnaround" },
        { value: "4 Levels", label: "Of Editing Offered" },
        { value: "21 Days", label: "Avg. Full Edit Delivery" },
      ]}
      steps={steps}
      faqItems={faqItems}
    />
  );
}
