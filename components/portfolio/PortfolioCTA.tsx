import Link from "next/link";

export default function PortfolioCTA() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-[#131a22] mb-6">
          Join our community of authors
        </h2>
        <p className="text-[#3a4553] text-lg md:text-xl leading-relaxed mb-8">
          Have a question about your account or how to market your book? Ask for help from fellow
          publishers or lend a hand to someone new.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center border border-[#008296] text-[#008296] hover:bg-[#008296] hover:text-white font-medium px-8 py-3 rounded transition-colors text-sm"
        >
          Connect with experts and fellow authors
        </Link>
      </div>
    </section>
  );
}
