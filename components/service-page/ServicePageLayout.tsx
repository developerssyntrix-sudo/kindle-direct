import Link from "next/link";
import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServiceFaqs from "@/components/service-page/ServiceFaqs";
import BrandsSection from "../sections/BrandsSection";
import LogoMarquee from "../sections/LogoMarquee";
import PublishedAuthor from "../sections/PublishedAuthor";
import ContactFormSection from "../sections/ContactFormSection";

interface StepItem {
  step: string;
  title: string;
  bullets: string[];
  tags: string[];
  image: string;
}

interface Testimonial {
  name: string;
  sub: string;
  quote: string;
  avatar: string;
}

type ServiceHeroVariant = "hash" | "at" | "ampersand" | "plus" | "diamond" | "spark" | "wave";

interface ServicePageLayoutProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  serviceName: string;
  bgImage: string;
  symbolVariant?: ServiceHeroVariant;
  stats: { value: string; label: string }[];
  steps: StepItem[];
  faqItems: { q: string; a: string }[];
  testimonials?: Testimonial[];
  processLabel?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Laura Rocca",
    sub: "Italy | Romance",
    quote: "Becoming a KDP author allowed me to finally live my childhood dream. The writer captured my voice and helped me launch a polished romance novel in months.",
    avatar: "https://m.media-amazon.com/images/G/01/Kindle/dp/design/author/img_author_LauraRocca_v1.png",
  },
  {
    name: "Sundari Venkatraman",
    sub: "India | Romance",
    quote: "My memoir was in pieces until the ghostwriter organized my story and made it feel true. I now have a book I can proudly share.",
    avatar: "https://m.media-amazon.com/images/G/01/Kindle/dp/design/author/img_author_SundariVenkatraman_v1.png",
  },
  {
    name: "Marah Woolf",
    sub: "Germany | Fantasy",
    quote: "I had no idea where to start. The team turned my idea into a real book and guided me all the way from outline to final manuscript.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
  },
];

export default function ServicePageLayout({
  badge,
  title,
  highlight,
  description,
  serviceName,
  bgImage,
  symbolVariant,
  stats,
  steps,
  faqItems,
  testimonials = defaultTestimonials,
}: ServicePageLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-[#131a22]">
        <ServiceHero
          badge={badge}
          title={title}
          highlight={highlight}
          description={description}
          serviceName={serviceName}
          bgImage={bgImage}
          symbolVariant={symbolVariant}
          stats={stats}
        />
        <BrandsSection />

        {/* Steps */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="max-w-2xl mb-10">
              <p className="text-[#008296] text-xs font-semibold uppercase tracking-widest mb-2">How it works</p>
              <h2 className="text-2xl md:text-3xl font-serif text-[#131a22] tracking-tight">
                Publish with Kindle Direct Publishing in 3 simple steps
              </h2>
              <p className="mt-3 text-[#565959] text-sm leading-relaxed">
                We guide your project from idea through delivery with the same clean, easy flow used by top KDP authors.
              </p>
            </div>

            <div className="space-y-10">
              {steps.map((item, idx) => (
                <div key={item.step} className="grid gap-8 items-center lg:grid-cols-2">
                  <div className={`space-y-4 ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                    <p className="text-[#008296] text-xs font-semibold uppercase tracking-widest">{item.step}</p>
                    <h3 className="text-xl font-serif text-[#131a22]">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-[#565959] text-sm leading-relaxed">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-[#008296] shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`overflow-hidden rounded border border-[#d5d9d9] ${idx % 2 === 1 ? "lg:order-first" : ""}`}>
                    <img src={item.image} alt={item.title} className="w-full h-64 md:h-80 object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LogoMarquee />

        {/* Testimonials */}
        <section className="py-12 bg-[#f0f2f2]">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="mb-8">
              <p className="text-[#008296] text-xs font-semibold uppercase tracking-widest mb-2">Real author stories</p>
              <h2 className="text-2xl md:text-3xl font-serif text-[#131a22]">Authors who trusted us with their story</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((author) => (
                <div key={author.name} className="bg-white border border-[#d5d9d9] rounded p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={author.avatar} alt={author.name} className="h-12 w-12 rounded-full object-cover border border-[#d5d9d9]" />
                    <div>
                      <p className="text-[#131a22] font-semibold text-sm">{author.name}</p>
                      <p className="text-[#565959] text-xs">{author.sub}</p>
                    </div>
                  </div>
                  <p className="text-[#565959] text-sm leading-relaxed italic">&ldquo;{author.quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kindle Create */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <p className="text-[#008296] text-xs font-semibold uppercase tracking-widest">Prepare beautifully</p>
                <h2 className="text-2xl md:text-3xl font-serif text-[#131a22]">
                  We can help you get started with Kindle Create
                </h2>
                <p className="text-[#565959] text-sm leading-relaxed">
                  Turn your manuscript into a beautiful book. Whether you&apos;re writing a comic book, cookbook, or novel, our formatting support helps prepare your manuscript for publication.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-[#008296] text-[#008296] hover:bg-[#008296] hover:text-white font-medium px-6 py-2.5 rounded text-sm transition-colors"
                >
                  Learn more about Kindle Create
                </Link>
              </div>
              <div className="border-2 border-[#008296] rounded overflow-hidden">
                <img
                  src="https://m.media-amazon.com/images/G/01/Prelogin/img_publish_KC_lipsum.png"
                  alt="Kindle Create preview"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <PublishedAuthor />

        {/* Free Tools */}
        <section className="py-12 bg-[#f0f2f2]">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="overflow-hidden rounded border border-[#d5d9d9]">
                <img
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop"
                  alt="Publishing tools"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-[#008296] text-xs font-semibold uppercase tracking-widest">Free tools</p>
                <h2 className="text-2xl md:text-3xl font-serif text-[#131a22]">
                  More free KDP tools to help publish your book
                </h2>
                <div className="space-y-4 pt-2">
                  {[
                    { title: "Kindle Previewer", desc: "See how your eBook will look before you publish it." },
                    { title: "Kindle Kids' Book Creator", desc: "Turn your illustrated children's books into great-looking eBooks." },
                    { title: "KDP Community", desc: "Join the conversation with new and accomplished KDP authors." },
                    { title: "Kindle Create", desc: "Convert your manuscript into a beautifully formatted eBook." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#008296] shrink-0" />
                      <div>
                        <p className="text-[#131a22] font-semibold text-sm">{item.title}</p>
                        <p className="text-[#565959] text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceFaqs heading={`${serviceName} FAQs`} faqs={faqItems} />

        {/* CTA */}
        <section className="py-12 bg-white border-t border-[#d5d9d9]">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-[#131a22] mb-3">
              Join our community of authors
            </h2>
            <p className="text-[#565959] text-sm leading-relaxed mb-7 max-w-md mx-auto">
              Have a question about your account or how to market your book? Ask for help from fellow publishers or lend a hand to someone new.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[#008296] text-[#008296] hover:bg-[#008296] hover:text-white font-medium px-8 py-3 rounded transition-colors text-sm"
            >
              Connect with experts and fellow authors
            </Link>
          </div>
        </section>
      </main>
      <ContactFormSection />
      <SiteFooter />
    </>
  );
}
