"use client";
import { useState } from "react";

const budgetRanges = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+",
];

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up form submission
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* ── Left: Form ── */}
        <div>
          <h2 className="text-3xl font-serif text-gray-900 mb-8">
            Reach out to us today!
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amazon-orange/50 focus:border-amazon-orange transition"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amazon-orange/50 focus:border-amazon-orange transition"
            />

            {/* Phone with country code prefix */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-amazon-orange/50 focus-within:border-amazon-orange transition">
              <select
                className="bg-gray-50 border-r border-gray-300 px-3 py-3 text-sm text-gray-700 focus:outline-none shrink-0"
                defaultValue="+1"
              >
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+971">🇦🇪 +971</option>
              </select>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone"
                className="flex-1 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>

            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-amazon-orange/50 focus:border-amazon-orange transition bg-white"
            >
              <option value="" disabled>
                Select Budget Range
              </option>
              {budgetRanges.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amazon-orange/50 focus:border-amazon-orange transition resize-y"
            />

            <button
              type="submit"
              className="w-full bg-amazon-dark hover:bg-amazon-dark/90 text-white font-bold text-sm py-3.5 rounded-lg transition-colors"
            >
              Get Started
            </button>
          </form>
        </div>

        {/* ── Right: Trust badges image ── */}
        <div className="flex items-center justify-center">
          <img
            src="https://amzsite.vercel.app/assets/images/mix/2.webp"
            alt="Our trusted partners and ratings — Google Partner, Clutch 4.9/5.0, Yelp, Crunchbase, Trustpilot"
            className="w-full max-w-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
