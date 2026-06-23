"use client";
import { useState } from "react";
import { CheckCircle2, Loader2, ChevronDown, AlertCircle } from "lucide-react";
import { validateName, validateEmail, validatePhone, validateRequired, validateMessage } from "@/lib/formValidation";

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

type Errors = Partial<Record<keyof FormData, string>>;

const empty: FormData = { name: "", email: "", phone: "", service: "", message: "", source: "" };

const inputCls = (hasError: boolean) =>
  `w-full border rounded px-3 py-2 text-sm text-[#131a22] placeholder:text-[#adb5bd]
   focus:outline-none focus:ring-1 transition-colors
   ${hasError
     ? "border-red-400 bg-red-50 focus:border-red-400 focus:ring-red-200"
     : "border-[#d5d9d9] bg-white focus:border-[#008296] focus:ring-[#008296]/30"
   }`;

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(empty);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");

  // Update field value and clear its inline error immediately
  const set = (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [key]: value }));
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
    };

  const validate = (): Errors => {
    const e: Errors = {};
    const name = validateName(form.name);           if (name) e.name = name;
    const email = validateEmail(form.email);         if (email) e.email = email;
    const phone = validatePhone(form.phone);         if (phone) e.phone = phone;
    const service = validateRequired(form.service, "Service"); if (service) e.service = service;
    const message = validateMessage(form.message);  if (message) e.message = message;
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setServerError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message.");
      setStatus("success");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
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
          onClick={() => { setForm(empty); setStatus("idle"); setServerError(""); setErrors({}); }}
          className="text-[#008296] text-sm hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>

      {status === "error" && serverError && (
        <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 rounded px-4 py-3 text-sm">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4 items-start">
        <div>
          <label htmlFor="name" className="block text-[#131a22] text-xs font-semibold mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name" type="text" placeholder="John Smith"
            value={form.name} onChange={set("name")}
            className={inputCls(!!errors.name)}
            autoComplete="name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-[#131a22] text-xs font-semibold mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email" type="email" placeholder="john@example.com"
            value={form.email} onChange={set("email")}
            className={inputCls(!!errors.email)}
            autoComplete="email"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.email}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 items-start">
        <div>
          <label htmlFor="phone" className="block text-[#131a22] text-xs font-semibold mb-1">
            Phone Number <span className="text-[#565959] font-normal">(optional)</span>
          </label>
          <input
            id="phone" type="tel" placeholder="+1 (555) 000-0000"
            value={form.phone} onChange={set("phone")}
            className={inputCls(!!errors.phone)}
            autoComplete="tel"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="service" className="block text-[#131a22] text-xs font-semibold mb-1">
            Service Interested In <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              id="service" value={form.service} onChange={set("service")}
              className={`${inputCls(!!errors.service)} appearance-none pr-8 cursor-pointer`}
            >
              <option value="">Select a service…</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#565959] pointer-events-none" />
          </div>
          {errors.service && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.service}</p>}
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
        {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.message}</p>}
      </div>

      <div>
        <label htmlFor="source" className="block text-[#131a22] text-xs font-semibold mb-1">
          How Did You Hear About Us? <span className="text-[#565959] font-normal">(optional)</span>
        </label>
        <div className="relative">
          <select
            id="source" value={form.source} onChange={set("source")}
            className={`${inputCls(false)} appearance-none pr-8 cursor-pointer`}
          >
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
