import Image from "next/image"

const testimonials = [
  {
    name: "Tricia O'Malley",
    meta: "USA / Romance",
    quote:
      '"Self-publishing through KDP and Amazon has changed my life. My books have made it to the New York Times, USA Today, and Wall Street Journal bestseller lists."',
    link: { label: "Visit Tricia O'Malley's author page", href: "#" },
    img: "https://m.media-amazon.com/images/G/01/Prelogin/img_author_TriciaOMalley_v1.png",
  },
  {
    name: "Jéssica Macedo",
    meta: "Brazil / Fantasy",
    quote:
      '"I always dreamed of living off books, but it was something that seemed unattainable until I discovered Amazon KDP. With KDP, I gained readers in my country and even around the world."',
    link: { label: "Visit Jéssica Macedo's author page", href: "#" },
    img: "https://m.media-amazon.com/images/G/01/Prelogin/img_author_JessicaMacedo_v1.png",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {testimonials.map(({ name, meta, quote, link, img }) => (
          <div key={name} className="flex flex-col items-center text-center gap-4">
            {/* Author image (circles are baked into the image) */}
            <Image
              src={img}
              alt={name}
              width={320}
              height={260}
              className="object-contain"
            />

            <h3 className="text-secondary font-semibold text-xl mt-2">{name}</h3>
            <p className="text-muted-foreground text-sm">{meta}</p>

            <p className="text-secondary/80 text-sm italic leading-relaxed max-w-2xl">
              {quote}
            </p>

            <a
              href={link.href}
              className="text-amazon-teal text-sm hover:underline mt-1"
            >
              {link.label}
            </a>
          </div>
        ))}
      </div>
    </section >
  )
}