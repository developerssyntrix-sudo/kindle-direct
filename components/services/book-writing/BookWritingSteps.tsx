const steps = [
  {
    step: "Step 1",
    title: "Prepare your manuscript and cover files",
    bullets: [
      "Format your manuscript file and create your front, back, and back matter.",
      "Set your title page, table of contents, and author bio.",
      "Create a cover that reflects your book and brand.",
    ],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "Publish in print and digital formats",
    bullets: [
      "Enter book details such as title, author, and description.",
      "Upload and preview your prepared manuscript and book cover.",
      "Select your publishing rights and price your book for launch.",
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "Promote your book to readers",
    bullets: [
      "Offer your eBook on Kindle Unlimited by enrolling in KDP Select.",
      "Create an author page to share information about yourself and your books.",
      "Set up advertising ads to reach more readers through Amazon Advertising.",
    ],
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function BookWritingSteps() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl mb-10">
          <p className="text-[#008296] text-xs font-semibold uppercase tracking-widest mb-2">How it works</p>
          <h2 className="text-2xl md:text-3xl font-serif text-[#131a22] tracking-tight">
            Publish with Kindle Direct Publishing in 3 simple steps
          </h2>
          <p className="mt-3 text-[#565959] text-sm leading-relaxed">
            We guide your book from manuscript preparation through publishing and promotion.
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
  );
}
