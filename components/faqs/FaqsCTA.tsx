import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/contact";

export default function FaqsCTA() {
  return (
    <section className="py-12 bg-white border-t border-[#d5d9d9]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-serif text-[#131a22] mb-3">
          Still Have a Question?
        </h2>
        <p className="text-[#565959] text-sm max-w-md mx-auto mb-7 leading-relaxed">
          Our team responds to every inquiry within 1 business hour. Call, email, or book a free consultation — whichever works best for you.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#008296] hover:bg-[#006e7f] text-white font-medium px-6 py-2.5 rounded text-sm transition-colors"
          >
            <MessageCircle size={14} /> Contact Us
          </Link>
          <a
            href={contactInfo.phoneTel}
            className="inline-flex items-center gap-2 border border-[#008296] text-[#008296] hover:bg-[#008296] hover:text-white font-medium px-6 py-2.5 rounded text-sm transition-colors"
          >
            <Phone size={14} /> Call {contactInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
