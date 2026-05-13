import Link from "next/link";

export default function BookWritingCTA() {
  return (
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
  );
}
