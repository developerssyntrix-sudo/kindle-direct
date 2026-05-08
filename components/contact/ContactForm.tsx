"use client";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, ChevronDown } from "lucide-react";

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

/* ── Reusable label wrapper ── */
function FieldLabel({ htmlFor, label, required }: { htmlFor: string; label: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="block text-amazon-dark font-semibold text-xs mb-1.5">
      {label}{" "}
      {required && <span className="text-destructive">*</span>}
    </label>
  );
}

/* ── Reusable error text ── */
function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-destructive text-xs mt-1.5">{msg}</p>;
}

/* Shared input class builder */
const inputCls = (hasError: boolean) =>
  `w-full border rounded-lg px-4 py-2.5 text-sm text-amazon-dark placeholder:text-muted-foreground/60
   focus:outline-none focus:ring-2 focus:ring-amazon-orange/40 focus:border-amazon-orange
   transition-colors ${hasError ? "border-destructive bg-red-50/60" : "border-border bg-white"}`;

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(empty);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
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

  /* ── Success state ── */
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-amazon-orange/10 border-2 border-amazon-orange flex items-center justify-center mb-5">
          <CheckCircle2 size={32} className="text-amazon-orange" />
        </div>
        <h3 className="text-amazon-dark font-extrabold text-xl mb-2">We&apos;ve Got Your Message!</h3>
        <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
          Our team will review your project details and reach out within 1 business hour. Check your inbox!
        </p>
        <button
          onClick={() => { setForm(empty); setStatus("idle"); }}
          className="text-amazon-orange font-semibold text-sm hover:underline"
        >
          Submit another inquiry →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>

      {/* Row 1 — Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4 items-start">
        <div>
          <FieldLabel htmlFor="name" label="Full Name" required />
          <input
            id="name" type="text" placeholder="John Smith"
            value={form.name} onChange={set("name")}
            className={inputCls(!!errors.name)}
          />
          <FieldError msg={errors.name} />
        </div>
        <div>
          <FieldLabel htmlFor="email" label="Email Address" required />
          <input
            id="email" type="email" placeholder="john@example.com"
            value={form.email} onChange={set("email")}
            className={inputCls(!!errors.email)}
          />
          <FieldError msg={errors.email} />
        </div>
      </div>

      {/* Row 2 — Phone + Service */}
      <div className="grid sm:grid-cols-2 gap-4 items-start">
        <div>
          <FieldLabel htmlFor="phone" label="Phone Number" />
          <input
            id="phone" type="tel" placeholder="+1 (555) 000-0000"
            value={form.phone} onChange={set("phone")}
            className={inputCls(false)}
          />
        </div>
        <div>
          <FieldLabel htmlFor="service" label="Service Interested In" required />
          {/* Wrapper gives the select a custom arrow via absolute-positioned icon */}
          <div className="relative">
            <select
              id="service"
              value={form.service}
              onChange={set("service")}
              className={`${inputCls(!!errors.service)} appearance-none pr-10 cursor-pointer`}
            >
              <option value="">Select a service…</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <ChevronDown
              size={15}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
          </div>
          <FieldError msg={errors.service} />
        </div>
      </div>

      {/* Textarea — Message */}
      <div>
        <FieldLabel htmlFor="message" label="Tell Us About Your Book" required />
        <textarea
          id="message" rows={5}
          placeholder="Share your book idea, genre, target audience, timeline, and any questions you have…"
          value={form.message} onChange={set("message")}
          className={`${inputCls(!!errors.message)} resize-none`}
        />
        <FieldError msg={errors.message} />
      </div>

      {/* How did you hear */}
      <div>
        <FieldLabel htmlFor="source" label="How Did You Hear About Us?" />
        <div className="relative">
          <select
            id="source"
            value={form.source}
            onChange={set("source")}
            className={`${inputCls(false)} appearance-none pr-10 cursor-pointer`}
          >
            <option value="">Select…</option>
            {sources.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <ChevronDown
            size={15}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-amazon-orange hover:bg-amazon-orange-hover disabled:opacity-70 text-amazon-dark font-bold text-sm px-6 py-3.5 rounded transition-colors shadow-md shadow-amazon-orange/20 mt-1 outline outline-2 outline-offset-2 outline-amazon-orange/60"
      >
        {status === "loading" ? (
          <><Loader2 size={16} className="animate-spin" /> Sending…</>
        ) : (
          <>Send My Inquiry <ArrowRight size={15} /></>
        )}
      </button>

      <p className="text-muted-foreground text-xs text-center">
        We typically respond within 1 business hour · 100% confidential
      </p>
    </form>
  );
}
