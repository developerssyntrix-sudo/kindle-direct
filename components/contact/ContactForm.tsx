"use client";
import { useState } from "react";
import { CheckCircle2, Loader2, ChevronDown } from "lucide-react";

const services = [
  "Book Writing / Ghostwriting",
  "Book Publishing (KDP)",
  "Book Editing & Proofreading",
  "Book Marketing",
  "Book Trailer",
  "Children's Book Writing",
  "Poetry Publishing",
  "Full Publishing Package",
  "Not Sure — Need Guidance",
];

const sources = [
  "Google Search",
  "TikTok / BookTok",
  "Instagram",
  "Referral from a Friend",
  "Facebook",
  "YouTube",
  "Podcast",
  "Other",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source: string;
};

const empty: FormData = { name: "", email: "", phone: "", service: "", message: "", source: "" };

const inputCls = (hasError: boolean) =>
  `w-full border rounded px-3 py-2 text-sm text-[#131a22] placeholder:text-[#adb5bd]
   focus:outline-none focus:border-[#008296] focus:ring-1 focus:ring-[#008296]
   transition-colors ${hasError ? "border-red-500 bg-red-50" : "border-[#d5d9d9] bg-white"}`;

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(empty);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const set = (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const validate = (): Partial<FormData> => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!form.service) e.service = "Please select a service";
    if (!form.message.trim()) e.message = "Tell us a bit about your project";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1800);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle2 size={40} className="text-[#008296] mb-4" />
        <h3 className="text-[#131a22] font-semibold text-lg mb-2">Message Sent!</h3>
        <p className="text-[#565959] text-sm max-w-sm leading-relaxed mb-5">
          Our team will review your project and reach out within 1 business hour.
        </p>
        <button
          onClick={() => { setForm(empty); setStatus("idle"); }}
          className="text-[#008296] text-sm hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>

      <div className="grid sm:grid-cols-2 gap-4 items-start">
        <div>
          <label htmlFor="name" className="block text-[#131a22] text-xs font-semibold mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input id="name" type="text" placeholder="John Smith" value={form.name} onChange={set("name")} className={inputCls(!!errors.name)} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-[#131a22] text-xs font-semibold mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input id="email" type="email" placeholder="john@example.com" value={form.email} onChange={set("email")} className={inputCls(!!errors.email)} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 items-start">
        <div>
          <label htmlFor="phone" className="block text-[#131a22] text-xs font-semibold mb-1">Phone Number</label>
          <input id="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={set("phone")} className={inputCls(false)} />
        </div>
        <div>
          <label htmlFor="service" className="block text-[#131a22] text-xs font-semibold mb-1">
            Service Interested In <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select id="service" value={form.service} onChange={set("service")} className={`${inputCls(!!errors.service)} appearance-none pr-8 cursor-pointer`}>
              <option value="">Select a service…</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#565959] pointer-events-none" />
          </div>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-[#131a22] text-xs font-semibold mb-1">
          Tell Us About Your Book <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message" rows={5}
          placeholder="Share your book idea, genre, target audience, timeline, and any questions…"
          value={form.message} onChange={set("message")}
          className={`${inputCls(!!errors.message)} resize-none`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <div>
        <label htmlFor="source" className="block text-[#131a22] text-xs font-semibold mb-1">How Did You Hear About Us?</label>
        <div className="relative">
          <select id="source" value={form.source} onChange={set("source")} className={`${inputCls(false)} appearance-none pr-8 cursor-pointer`}>
            <option value="">Select…</option>
            {sources.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#565959] pointer-events-none" />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-[#008296] hover:bg-[#006e7f] disabled:opacity-70 text-white font-semibold text-sm px-6 py-3 rounded transition-colors"
      >
        {status === "loading" ? (
          <><Loader2 size={15} className="animate-spin" /> Sending…</>
        ) : (
          "Send My Inquiry"
        )}
      </button>

      <p className="text-[#565959] text-xs text-center">
        We typically respond within 1 business hour · 100% confidential
      </p>
    </form>
  );
}
