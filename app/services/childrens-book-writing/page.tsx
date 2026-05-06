import type { Metadata } from "next";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceIncludes from "@/components/service-page/ServiceIncludes";
import ServiceProcess from "@/components/service-page/ServiceProcess";
import ServiceWhyUs from "@/components/service-page/ServiceWhyUs";
import ServicePackages from "@/components/service-page/ServicePackages";
import ServiceTestimonials from "@/components/service-page/ServiceTestimonials";
import ServiceFaqs from "@/components/service-page/ServiceFaqs";
import ServiceCta from "@/components/service-page/ServiceCta";
import {
  Star,
  Layers,
  MessageSquare,
  BookOpen,
  CheckCircle2,
  Globe,
  Clock,
  Sparkles,
  Heart,
  Rocket,
  Users,
  ShieldCheck,
  PenLine,
  FileEdit,
  Target,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Children's Book Writing & Publishing Services | Amazon Books Publishing",
  description:
    "Expert children's book writing, illustration coordination, and Amazon KDP publishing. From picture books to middle grade — we handle everything.",
};

const ageGroups = [
  { range: "0–3 yrs", type: "Board Books", words: "Under 500 words", color: "bg-rose-50 border-rose-200" },
  { range: "3–7 yrs", type: "Picture Books", words: "500–1,000 words", color: "bg-amber-50 border-amber-200" },
  { range: "6–9 yrs", type: "Early Readers", words: "1,000–10,000 words", color: "bg-emerald-50 border-emerald-200" },
  { range: "8–12 yrs", type: "Middle Grade", words: "20,000–50,000 words", color: "bg-blue-50 border-blue-200" },
];

export default function ChildrensBookWritingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceHero
          badge="Children's Book Writing"
          title="Children's Books That"
          highlight="Kids Actually Love"
          description="We write, illustrate (coordination), format, and publish children's books that parents buy and kids request again and again — from cozy board books to adventurous middle grade novels."
          serviceName="Children's Book Writing"
          bgImage="https://images.unsplash.com/photo-1549737221-bef65e2604a6?q=80&w=1170&auto=format&fit=crop"
          stats={[
            { value: "350+", label: "Children's Books Published" },
            { value: "4 Age", label: "Groups Covered" },
            { value: "100%", label: "Illustration Coordinated" },
            { value: "#1", label: "Best-Ranked in Category" },
          ]}
        />

        {/* Age group cards */}
        <section className="py-10 md:py-15 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <p className="text-amazon-orange text-xs font-bold uppercase tracking-widest mb-2">
                Age Groups
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-amazon-dark tracking-tight">
                We Write for{" "}
                <span className="text-amazon-orange">Every Age</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ageGroups.map((a) => (
                <div
                  key={a.type}
                  className={`${a.color} border rounded-2xl p-5 text-center`}
                >
                  <span className="text-amazon-orange font-extrabold text-sm block mb-1">
                    {a.range}
                  </span>
                  <h3 className="text-amazon-dark font-bold text-base mb-1">{a.type}</h3>
                  <p className="text-muted-foreground text-xs">{a.words}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceIncludes
          heading="Complete Children's Book Production"
          subheading="From the first word to the published listing — we handle every creative and technical element."
          items={[
            {
              icon: MessageSquare,
              title: "Story Concept Development",
              desc: "Character concepts, moral/lesson themes, setting, and story arc developed collaboratively with you before writing begins.",
            },
            {
              icon: PenLine,
              title: "Age-Appropriate Writing",
              desc: "Professionally written prose calibrated for your target age group — vocabulary, sentence length, and reading level matched precisely.",
            },
            {
              icon: Heart,
              title: "Rhyme & Rhythm (If Needed)",
              desc: "For picture books requiring rhyme, our specialists write with natural meter and child-friendly patterns that read aloud beautifully.",
            },
            {
              icon: Sparkles,
              title: "Illustration Brief & Direction",
              desc: "A complete illustration brief for every spread — character descriptions, scene composition, color palette, and style direction.",
            },
            {
              icon: Layers,
              title: "Illustration Coordination",
              desc: "We connect you with a vetted illustrator from our network, manage the rounds, and ensure art aligns with the written content.",
            },
            {
              icon: FileEdit,
              title: "Interior Layout & Design",
              desc: "Professional spread-by-spread layout integrating text and illustrations — formatted to KDP and IngramSpark print specifications.",
            },
            {
              icon: BookOpen,
              title: "Cover Design",
              desc: "A vibrant, genre-appropriate cover designed to stand out in Amazon's children's category and convert in thumbnail view.",
            },
            {
              icon: Globe,
              title: "Amazon KDP Publishing",
              desc: "Full KDP setup, metadata, keywords, category selection, and distribution — both eBook (interactive PDF) and print formats.",
            },
            {
              icon: Users,
              title: "School & Library Distribution",
              desc: "IngramSpark distribution setup for access to school and library ordering systems via wholesale distribution channels.",
            },
          ]}
        />

        <ServiceProcess
          heading="How We Create Your Children's Book"
          subheading="A joyful, collaborative process designed to bring your story to life without the stress."
          steps={[
            {
              num: "01",
              icon: MessageSquare,
              title: "Story Discovery",
              desc: "We learn about your vision, the child's name (if personalized), the moral or theme, and the target age group.",
            },
            {
              num: "02",
              icon: PenLine,
              title: "Writing & Review",
              desc: "A complete manuscript delivered — page spreads, text placement notes, and character dialogue all ready for illustration.",
            },
            {
              num: "03",
              icon: Sparkles,
              title: "Illustration Coordination",
              desc: "Illustration brief delivered to your vetted illustrator. We manage communication, feedback rounds, and final file delivery.",
            },
            {
              num: "04",
              icon: Layers,
              title: "Layout & Design",
              desc: "Text and illustrations combined into a professional layout, proofed for print specs, and prepared for KDP upload.",
            },
            {
              num: "05",
              icon: Rocket,
              title: "Publish & Distribute",
              desc: "Book goes live on Amazon KDP and IngramSpark — available in print and eBook to buyers globally, including schools and libraries.",
            },
          ]}
        />

        <ServiceWhyUs
          heading="Why Parents & Authors"
          highlight="Trust Us With Their Stories"
          body="Children's books are uniquely challenging — balancing story, art, educational value, and read-aloud flow requires specialist experience that generalist agencies don't have."
          points={[
            {
              icon: Target,
              title: "Specialist Children's Writers",
              desc: "Every writer on our children's book team has published in the genre. They understand pacing, vocabulary level, and the magic that makes a children's book a classic.",
            },
            {
              icon: Sparkles,
              title: "Vetted Illustrator Network",
              desc: "We've built a trusted network of illustrators in every children's book style — whimsical, realistic, watercolor, and digital. We match style to story.",
            },
            {
              icon: Heart,
              title: "Read-Aloud Tested",
              desc: "Every manuscript is read aloud internally before delivery — because a children's book lives or dies by how it sounds read at bedtime.",
            },
            {
              icon: Globe,
              title: "School & Library Distribution",
              desc: "We set up IngramSpark wholesale distribution so your book can be ordered by schools, libraries, and bookstores — not just Amazon.",
            },
            {
              icon: ShieldCheck,
              title: "Content Safety Guarantee",
              desc: "All content is reviewed for age-appropriateness, inclusive representation, and educational suitability — guaranteed for every title we produce.",
            },
            {
              icon: HeartHandshake,
              title: "Personalization Available",
              desc: "We write personalized books with the child's name, likeness, and local setting woven into the story — a truly unique gift.",
            },
          ]}
        />

        <ServicePackages
          heading="Children's Book Packages"
          subheading="Includes writing, layout, and publishing. Illustration is coordinated separately based on your illustrator choice."
          packages={[
            {
              name: "Picture Book",
              price: "$1,999",
              note: "Board book or picture book",
              desc: "Complete writing, layout, and publishing for a 500–1,000 word picture book or board book.",
              features: [
                "Up to 1,000 words",
                "Spread-by-spread text layout",
                "Illustration brief for all spreads",
                "Illustrator coordination support",
                "Cover design",
                "KDP eBook + Print setup",
                "Amazon metadata & keywords",
                "3 revision rounds",
                "12-week delivery",
              ],
            },
            {
              name: "Early Reader",
              price: "$3,499",
              note: "Ages 6–9",
              desc: "Chapter-style writing with illustration coordination for a complete 32–64 page early reader.",
              features: [
                "Up to 10,000 words",
                "Chapter structure & pacing",
                "Full illustration brief",
                "Illustrator selection & management",
                "Interior layout & design",
                "Cover design",
                "KDP + IngramSpark publishing",
                "School distribution setup",
                "Unlimited revisions",
                "Priority project manager",
                "16-week delivery",
              ],
              featured: true,
            },
            {
              name: "Middle Grade",
              price: "$5,999",
              note: "Ages 8–12",
              desc: "A full middle grade novel with chapter artwork, professional editing, and complete global distribution.",
              features: [
                "Up to 30,000 words",
                "Full story development",
                "Chapter artwork coordination",
                "Developmental + copy edit",
                "Interior design & formatting",
                "Cover design",
                "KDP + IngramSpark + D2D",
                "School & library distribution",
                "Marketing launch kit",
                "Dedicated manager",
                "22-week delivery",
              ],
            },
          ]}
        />

        <ServiceTestimonials
          heading="Stories That Children Love — Parents Too"
          testimonials={[
            {
              name: "Rebecca O'Malley",
              role: "Author, The Dragon Who Couldn't Roar",
              initials: "RO",
              avatarColor: "bg-rose-500",
              rating: 5,
              quote:
                "My daughter asks for this book every single night. The writer captured exactly the gentle, slightly silly tone I described in our first call. The illustrator they matched me with brought the characters to life beyond what I could have imagined. It's now a gift for every child I know.",
            },
            {
              name: "Samuel Osei",
              role: "Author, Ama and the Market Day",
              initials: "SO",
              avatarColor: "bg-amber-600",
              rating: 5,
              quote:
                "I wanted to create a picture book celebrating West African culture and market life for my daughter's classroom. The team not only understood the cultural nuance — they brought in an illustrator with direct West African design experience. Teachers are requesting multiple copies for their classrooms.",
            },
            {
              name: "Jennifer Walsh",
              role: "Author, The Super Secret Club (Early Reader Series)",
              initials: "JW",
              avatarColor: "bg-blue-600",
              rating: 5,
              quote:
                "I now have a 3-book series, all produced by Amazon Books Publishing. The consistency of character voice, illustration style, and production quality across all three books is remarkable — as if one team wrote and produced them all. Because they did. Couldn't recommend them more highly.",
            },
          ]}
        />

        <ServiceFaqs
          heading="Children's Book FAQs"
          faqs={[
            {
              q: "Do you provide illustrations or just coordinate them?",
              a: "We coordinate illustrations — we don't produce them in-house. We match you with vetted illustrators from our network (based on style, budget, and timeline) and manage the production. Illustration costs are separate and quoted based on the illustrator and scope.",
            },
            {
              q: "Can I use my own illustrator?",
              a: "Absolutely. If you already have an illustrator in mind, we'll work with them directly and manage the collaboration. We handle the illustration brief, feedback rounds, and final file requirements.",
            },
            {
              q: "Can the book be personalized with my child's name?",
              a: "Yes — personalization is one of our most popular requests. We can weave a child's name, physical description, hometown, and even specific preferences into the story.",
            },
            {
              q: "Will my book be in physical bookstores?",
              a: "Yes — through IngramSpark, your book is available for wholesale ordering by any bookstore, school, or library in the US, UK, Canada, and Australia. Physical placement isn't guaranteed, but distribution access is.",
            },
            {
              q: "What age range do you write for?",
              a: "We write for all children's book age ranges: board books (0–3), picture books (3–7), early readers (6–9), and middle grade (8–12). Each requires a different writer specialization — we match accordingly.",
            },
            {
              q: "How long does the process take?",
              a: "A picture book takes 10–14 weeks from kickoff to publication (dependent on illustration turnaround). Early readers take 14–18 weeks. Middle grade takes 20–26 weeks. Illustration timing is the main variable.",
            },
          ]}
        />

        <ServiceCta
          heading="Every Child Deserves a Great Story"
          subheading="Book a free discovery call and we'll walk you through the process, show you illustration samples, and give you a complete production timeline for your children's book."
          primaryLabel="Book Free Discovery Call"
        />
      </main>
      <SiteFooter />
    </>
  );
}
