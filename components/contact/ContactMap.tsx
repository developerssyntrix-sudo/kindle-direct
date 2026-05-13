import { MapPin, Phone, Mail } from "lucide-react";
import { contactInfo } from "@/data/contact";

const offices = [
  {
    city: "Seattle, WA",
    role: "Headquarters",
    address: "1000 2nd Ave, Seattle, WA 98104",
  },
  {
    city: "New York, NY",
    role: "East Coast Office",
    address: "350 5th Ave, New York, NY 10118",
  },
];

export default function ContactMap() {
  return (
    <section className="py-12 bg-white border-t border-[#d5d9d9]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif text-[#131a22] mb-2">Find Us</h2>
        <p className="text-[#565959] text-sm mb-8">Remote-first — serving authors worldwide from our offices.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {offices.map((o) => (
            <div key={o.city} className="border border-[#d5d9d9] rounded bg-[#f0f2f2] p-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#008296] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[#131a22] font-semibold text-sm">{o.city}</p>
                  <p className="text-[#008296] text-xs mb-1">{o.role}</p>
                  <p className="text-[#565959] text-xs">{o.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 text-sm text-[#131a22]">
          <a href={contactInfo.phoneTel} className="flex items-center gap-2 hover:text-[#008296] transition-colors">
            <Phone size={14} className="text-[#008296]" />
            {contactInfo.phone}
          </a>
          <a href="mailto:hello@amazonbookspublishing.com" className="flex items-center gap-2 hover:text-[#008296] transition-colors">
            <Mail size={14} className="text-[#008296]" />
            hello@amazonbookspublishing.com
          </a>
        </div>
      </div>
    </section>
  );
}
