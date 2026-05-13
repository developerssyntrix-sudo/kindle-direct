import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    label: "Step 1:",
    title: "Prepare your manuscript and cover files",
    bullets: [
      {
        text: "Format your manuscript file and create your front, body, and back matter, such as your title page, table of contents, and author bio.",
        link: { label: "Kindle Create", href: "/services/book-writing" },
        linkSuffix: " can help you format your books.",
      },
      {
        text: "Use our free ",
        link: { label: "Cover Creator tool", href: "/services/book-publishing" },
        linkSuffix: ", download a template, or create your own cover file.",
      },
    ],
    image: "https://m.media-amazon.com/images/G/01/Prelogin/img_publish_1a.png",
    imageRight: true,
  },
  {
    label: "Step 2:",
    title: "Publish in print and digital formats",
    bullets: [
      {
        text: "Enter your book details such as title, author name, and book description.",
        link: null,
        linkSuffix: "",
      },
      {
        text: "Upload and preview your prepared manuscript and book cover using our ",
        link: { label: "online previewer", href: "/services/book-publishing" },
        linkSuffix: ".",
      },
      {
        text: "Select your ",
        link: { label: "publishing rights and pricing", href: "/services/book-publishing" },
        linkSuffix: " and publish your book.",
      },
    ],
    image: "https://m.media-amazon.com/images/G/01/Prelogin/img_publish_2a.png",
    imageRight: false,
  },
  {
    label: "Step 3:",
    title: "Promote your book to readers",
    bullets: [
      {
        text: "Offer your eBook on Kindle Unlimited by enrolling in ",
        link: { label: "KDP Select", href: "/services/book-marketing" },
        linkSuffix: ".",
      },
      {
        text: "Create an ",
        link: { label: "Author Page", href: "/about" },
        linkSuffix: " to share information about yourself and your books.",
      },
      {
        text: "Set up ",
        link: { label: "Sponsored Products ads", href: "/services/book-marketing" },
        linkSuffix: " to reach more readers through Amazon Advertising.",
      },
    ],
    image: "https://m.media-amazon.com/images/G/01/Prelogin/img_publish_3.png",
    imageRight: true,
  },
];

export default function AboutSteps() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-[#131a22] tracking-tight mb-3">
            Publish with Amazon Books Publishing in 3 simple steps
          </h2>
        </div>

        <div className="space-y-20">
          {steps.map((step) => (
            <div
              key={step.label}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${!step.imageRight ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Text */}
              <div>
                <h3 className="text-2xl md:text-3xl font-serif text-[#131a22] mb-6 leading-snug">
                  <span className="">{step.label}</span>{" "}
                  {step.title}
                </h3>

                <ul className="space-y-5 mb-8">
                  {step.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 items-start text-[#232f3e] text-base leading-relaxed">
                      <span className="mt-1.5 w-3 h-3 rounded-full bg-amazon-orange shrink-0" />
                      <span>
                        {b.text}
                        {b.link && (
                          <Link href={b.link.href} className="text-[#008296] hover:underline">
                            {b.link.label}
                          </Link>
                        )}
                        {b.linkSuffix}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="flex items-center justify-center">
                <div className="rounded-[2.5rem]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={560}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
