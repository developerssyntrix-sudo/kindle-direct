import Link from "next/link";

export default function BookWritingKindleCreate() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="text-[#008296] text-xs font-semibold uppercase tracking-widest">Prepare beautifully</p>
            <h2 className="text-2xl md:text-3xl font-serif text-[#131a22]">
              We can help you get started with Kindle Create
            </h2>
            <p className="text-[#565959] text-sm leading-relaxed">
              Turn your manuscript into a beautiful book. Whether you&apos;re writing a comic book, cookbook, travel guide, or novel, our formatting support helps prepare your manuscript for publication.
            </p>
            <Link
              href="/about"
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
  );
}
