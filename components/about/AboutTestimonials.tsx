import Image from "next/image";

const testimonials = [
  {
    name: "Laura Rocca",
    region: "Italy / Romance",
    quote: "\"Becoming a KDP author allowed me to fulfill my childhood dream, to make a living doing the work I love, to be a writer. I owe KDP the direct connection with thousands of readers and the opportunity to share my books with the public in absolute freedom.\"",
    image: "https://m.media-amazon.com/images/G/01/Prelogin/img_author_LauraRocca_v1.png",
    authorPageLabel: "Visit Laura Rocca's author page",
    authorPageHref: "https://www.amazon.com/stores/Laura-Rocca/author/B010Q2LUPA",
  },
  {
    name: "Sundari Venkatraman",
    region: "India / Romance",
    quote: "\"Amazon KDP is the reason I write and publish my novels at the speed at which I do. It's highly motivating to have a readymade service where I can reach out to a whole world of readers. And it's excessively thrilling to receive a monthly income. I am my own boss, which means FREEDOM!\"",
    image: "https://m.media-amazon.com/images/G/01/Prelogin/img_author_SundariVenkatraman_v1.png",
    authorPageLabel: "Visit Sundari Venkatraman's author page",
    authorPageHref: "https://www.amazon.com/stores/Sundari-Venkatraman/author/B00IBEUJV2",
  },
];

export default function AboutTestimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {testimonials.map((author) => (
            <div key={author.name} className="flex flex-col items-center text-center">
              {/* Abstract art + photo image from Amazon CDN */}
              <div className="w-full max-w-xs mb-6">
                <Image
                  src={author.image}
                  alt={author.name}
                  width={480}
                  height={220}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Name & region */}
              <h3 className="text-2xl font-serif text-[#131a22] mb-1">{author.name}</h3>
              <p className="text-sm text-[#6b7280] mb-5">{author.region}</p>

              {/* Quote */}
              <p className="text-[#3a4553] text-base italic leading-relaxed max-w-sm mb-6">
                {author.quote}
              </p>

              {/* Author page link */}
              <a
                href={author.authorPageHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008296] hover:underline text-sm font-medium"
              >
                {author.authorPageLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
