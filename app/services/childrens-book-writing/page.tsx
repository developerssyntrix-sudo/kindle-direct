import type { Metadata } from "next";
import ServicePageLayout from "@/components/service-page/ServicePageLayout";

export const metadata: Metadata = {
  title: "Children's Book Writing & Publishing Services | Kindle Publisher House",
  description:
    "Expert children's book writing, illustration coordination, and Amazon KDP publishing. From picture books to middle grade — we handle everything.",
};

const steps = [
  {
    step: "Step 1",
    title: "Build your story concept and characters",
    bullets: [
      "We develop story arc, characters, and age-appropriate language for your target reader.",
      "The concept is shaped to support illustration, read-aloud flow, and story impact.",
      "You approve the narrative direction before writing begins.",
    ],
    tags: ["Board Book", "Picture Book", "Middle Grade"],
    image:
      "https://images.unsplash.com/photo-1567711601167-cd0efb1f8a99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    step: "Step 2",
    title: "Write, illustrate, and format the book",
    bullets: [
      "We write page spreads, dialogue, and narrative pacing for young readers.",
      "Illustration direction and layout are coordinated to make every spread pop.",
      "Your book is formatted for KDP and print-ready specifications.",
    ],
    tags: ["Illustration", "Layout", "KDP"],
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "Publish and distribute to parents, schools, and libraries",
    bullets: [
      "We publish your book on Amazon KDP and arrange print and eBook distribution.",
      "Library and school-friendly channels are added through IngramSpark.",
      "Your story becomes available globally in the formats families prefer.",
    ],
    tags: ["Amazon KDP", "IngramSpark", "Libraries"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
];

const faqItems = [
  {
    q: "Do you write and publish illustrated children's books?",
    a: "Yes. We write your story, provide illustration briefs, coordinate illustrators, and publish the final book on KDP and IngramSpark.",
  },
  {
    q: "Can you help with educational or school-market books?",
    a: "Absolutely. We set up school and library distribution through IngramSpark and optimize your book for educational buyers.",
  },
  {
    q: "What age groups do you cover?",
    a: "We write board books, picture books, early readers, and middle grade stories with age-appropriate language and pacing.",
  },
  {
    q: "Will my child's book look professional?",
    a: "Yes. We deliver fully formatted book files ready for print, with layout designed for children's book spreads and reading flow.",
  },
];

export default function ChildrensBookWritingPage() {
  return (
    <ServicePageLayout
      badge="Children's Book Writing"
      title="Children's Books That"
      highlight="Kids Actually Love"
      description="We write, illustrate, format, and publish children's books that readers treasure — from board books to middle grade novels."
      serviceName="Children's Book Writing"
      bgImage="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1170&auto=format&fit=crop"
      symbolVariant="spark"
      stats={[
        { value: "350+", label: "Children's Books Published" },
        { value: "4", label: "Age Groups Covered" },
        { value: "100%", label: "Illustration Coordinated" },
        { value: "#1", label: "Category Expertise" },
      ]}
      steps={steps}
      faqItems={faqItems}
    />
  );
}
