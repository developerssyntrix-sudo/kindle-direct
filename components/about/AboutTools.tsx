import Image from "next/image";
import Link from "next/link";

export default function AboutTools() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif text-[#131a22] tracking-tight mb-5">
          We can help you get started with Kindle Create
        </h2>
        <p className="text-[#3a4553] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
          Turn your manuscript into a beautiful book. Whether you&apos;re writing a comic book,
          cookbook, travel guide, or novel, our free formatting tool will help you prepare your manuscript.
        </p>

        {/* Book preview image */}
        <div className="border-2 border-[#008296] rounded-2xl overflow-hidden mx-auto max-w-2xl mb-10">
          <Image
            src="https://m.media-amazon.com/images/G/01/Prelogin/img_publish_KC_lipsum.png"
            alt="Kindle Create book preview"
            width={800}
            height={520}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* CTA button */}
        <Link
          href="/services/book-writing"
          className="inline-flex items-center justify-center border border-[#008296] text-[#008296] hover:bg-[#008296] hover:text-white font-medium px-8 py-3 rounded transition-colors text-sm"
        >
          Learn more about Kindle Create
        </Link>
      </div>
    </section>
  );
}
