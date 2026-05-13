import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contactInfo } from "@/data/contact";

const cards = [
  {
    icon: Phone,
    label: "Call Us",
    value: contactInfo.phone,
    sub: contactInfo.hours,
    href: contactInfo.phoneTel,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@amazonbookspublishing.com",
    sub: "We reply within 1 business hour",
    href: "mailto:hello@amazonbookspublishing.com",
  },
  {
    icon: MapPin,
    label: "Our Offices",
    value: "Seattle, WA · New York, NY",
    sub: "Remote-first, globally available",
    href: null,
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri: 9am – 6pm EST",
    sub: "Weekend replies for urgent projects",
    href: null,
  },
];

export default function ContactCards() {
  return (
    <section className="py-10 bg-[#f0f2f2]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {cards.map((c) => {
            const Icon = c.icon;
            const inner = (
              <div className="bg-white rounded border border-[#d5d9d9] p-3 h-full flex flex-col gap-3">
                <div className="w-9 h-9 rounded-full bg-[#e6f3f5] flex items-center justify-center">
                  <Icon size={16} className="text-[#008296]" />
                </div>
                <div>
                  <p className="text-[#131a22] font-semibold text-sm">{c.label}</p>
                  <p className="text-[#131a22] text-sm mt-0.5">{c.value}</p>
                  <p className="text-[#565959] text-xs mt-1">{c.sub}</p>
                </div>
              </div>
            );

            return c.href ? (
              <a key={c.label} href={c.href} className="block hover:shadow-md transition-shadow">
                {inner}
              </a>
            ) : (
              <div key={c.label}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
