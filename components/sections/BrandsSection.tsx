import amazonKdpLogo from "@/app/assets/svgs/brands/Amazon-KDP.svg";
import googleBooksLogo from "@/app/assets/svgs/brands/Google-Books.svg";
import ingramSparkLogo from "@/app/assets/svgs/brands/Ingram-Spark.webp";
import draft2digitalLogo from "@/app/assets/svgs/brands/Draft2Digital.svg";
import scribdLogo from "@/app/assets/svgs/brands/Scribd.svg";
import barnesNobleLogo from "@/app/assets/svgs/brands/Barnes&Noble.svg";
import appleBooksLogo from "@/app/assets/svgs/brands/Apple-Books.svg";
import luluPressLogo from "@/app/assets/svgs/brands/Lulu-Press.svg";
import koboLogo from "@/app/assets/svgs/brands/Kobo.svg";

const brands: { name: string; src: string }[] = [
  { name: "Amazon KDP", src: amazonKdpLogo.src },
  { name: "Google Books", src: googleBooksLogo.src },
  { name: "IngramSpark", src: ingramSparkLogo.src },
  { name: "Draft2Digital", src: draft2digitalLogo.src },
  { name: "Scribd", src: scribdLogo.src },
  { name: "Barnes & Noble", src: barnesNobleLogo.src },
  { name: "Apple Books", src: appleBooksLogo.src },
  { name: "Lulu Press", src: luluPressLogo.src },
  { name: "Kobo", src: koboLogo.src },
];

function BrandLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="shrink-0 flex items-center justify-center px-5 mx-1 rounded-md bg-white border border-border hover:border-amazon-orange/30 hover:shadow-md transition-all h-24 w-44">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={name} className="h-20 w-auto max-w-[140px] object-contain" />
    </div>
  );
}

export default function BrandsSection() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-2 md:py-5 bg-amazon-surface border-y border-border overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-amazon-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-amazon-surface to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {doubled.map((b, i) => (
            <BrandLogo key={`${b.name}-${i}`} name={b.name} src={b.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
