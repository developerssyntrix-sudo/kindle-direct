"use client";

import { useState } from "react";
import Image from "next/image";
import heroBg from "@/app/assets/images/hero-bg.jpg";
import { BookCheck, Users, Trophy, Star, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { validateEmail, validatePhone } from "@/lib/formValidation";

const stats = [
  { icon: BookCheck, value: "2,500+", label: "Books Published" },
  { icon: Users, value: "1,200+", label: "Happy Authors" },
  { icon: Trophy, value: "98%", label: "Satisfaction Rate" },
  { icon: Star, value: "10+", label: "Years Experience" },
];

const services = [
  { value: "ghostwriting", label: "Ghostwriting" },
  { value: "editing", label: "Editing" },
  { value: "cover-design", label: "Cover Design" },
  { value: "publishing", label: "Publishing" },
  { value: "marketing", label: "Marketing" },
  { value: "others", label: "Others" },
];

type FormFields = { bookTitle: string; phone: string; email: string; service: string; message: string };
type Errors = Partial<Record<keyof FormFields, string>>;
type Status = "idle" | "loading" | "success" | "error";

const fieldCls = (hasError?: boolean) =>
  `w-full border rounded-sm py-2.5 px-3 text-sm text-amazon-dark placeholder:text-muted-foreground
   focus:outline-none transition-colors bg-amazon-surface
   ${hasError
     ? "border-red-400 bg-red-50 focus:border-red-400 focus:ring-1 focus:ring-red-200"
     : "border-border focus:border-amazon-orange focus:ring-1 focus:ring-amazon-orange/30"
   }`;

export default function HeroSection() {
  const [form, setForm] = useState<FormFields>({ bookTitle: "", phone: "", email: "", service: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  const set = (field: keyof FormFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
    };

  const validate = (): Errors => {
    const e: Errors = {};
    const email = validateEmail(form.email); if (email) e.email = email;
    const phone = validatePhone(form.phone); if (phone) e.phone = phone;
    return e;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setServerError("");
    setStatus("loading");

    const fullMessage = [
      form.bookTitle.trim() ? `Book Title: ${form.bookTitle.trim()}` : "",
      form.message.trim(),
    ].filter(Boolean).join("\n\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: fullMessage,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message.");
      setStatus("success");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-white py-10 md:py-15">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src={heroBg} alt="" fill className="object-cover object-center" priority />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-1 bg-linear-to-b from-white via-white/90 to-transparent pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 z-2 opacity-20 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #D5D9D9 1px, transparent 1px)", backgroundSize: "22px 22px" }}
      />

      {/* Orange glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-amazon-orange/8 rounded-full blur-3xl pointer-events-none z-2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-serif md:text-5xl xl:text-6xl text-amazon-dark leading-[1.08] tracking-tight mb-5">
          Your Story Deserves{" "}
          <span className="text-amazon-orange relative inline-block">
            to Be Heard
            <svg className="absolute -bottom-1.5 left-0 w-full" height="5" viewBox="0 0 200 5" preserveAspectRatio="none" fill="none">
              <path d="M0 3 Q100 0 200 3" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          From manuscript to bestseller — we handle every step of your publishing journey with expert ghostwriters, designers, editors, and marketers.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10 bg-white border border-border rounded-md shadow-md overflow-hidden" noValidate>
          {/* Form header bar */}
          <div className="bg-secondary px-6 py-4 text-left">
            <h3 className="font-serif text-white text-base">Start Your Publishing Journey</h3>
            <p className="text-white/60 text-xs mt-0.5">Fill out the form below and we&apos;ll get back to you within 24 hours</p>
          </div>

          {/* Success state */}
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-14 px-6 text-center">
              <CheckCircle2 size={44} className="text-amazon-orange mb-4" />
              <h3 className="text-amazon-dark font-semibold text-lg mb-2">Message Sent!</h3>
              <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-5">
                Our publishing team received your inquiry and will get back to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => { setForm({ bookTitle: "", phone: "", email: "", service: "", message: "" }); setStatus("idle"); setServerError(""); setErrors({}); }}
                className="text-amazon-orange text-sm hover:underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <div className="px-6 py-6 flex flex-col gap-4">
              {status === "error" && serverError && (
                <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 rounded px-4 py-3 text-sm text-left">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span>{serverError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Book Title */}
                <div className="flex flex-col items-start gap-1">
                  <label className="text-xs font-serif text-amazon-dark uppercase tracking-wide">
                    Book Title 
                  </label>
                  <input
                    type="text" value={form.bookTitle} onChange={set("bookTitle")}
                    placeholder="Enter your book title"
                    className={fieldCls()}
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col items-start gap-1">
                  <label className="text-xs font-serif text-amazon-dark uppercase tracking-wide">
                    Phone Number 
                  </label>
                  <input
                    type="tel" value={form.phone} onChange={set("phone")}
                    placeholder="Enter your phone number" autoComplete="tel"
                    className={fieldCls(!!errors.phone)}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs flex items-center gap-1">
                      <AlertCircle size={11} />{errors.phone}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col items-start gap-1">
                  <label className="text-xs font-serif text-amazon-dark uppercase tracking-wide">
                    Email Address <span className="text-red-500 font-sans"></span>
                  </label>
                  <input
                    type="email" value={form.email} onChange={set("email")}
                    placeholder="Enter your email" autoComplete="email"
                    className={fieldCls(!!errors.email)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs flex items-center gap-1">
                      <AlertCircle size={11} />{errors.email}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div className="flex flex-col items-start gap-1 w-full">
                  <label className="text-xs font-serif text-amazon-dark uppercase tracking-wide">
                    Service Interested In <span className="text-muted-foreground font-sans normal-case"></span>
                  </label>
                  <div className="relative w-full">
                    <select
                      value={form.service} onChange={set("service")}
                      className={`${fieldCls()} pr-10 appearance-none cursor-pointer`}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s.value} value={s.label}>{s.label}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-amazon-dark">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col items-start gap-1">
                <label className="text-xs font-serif text-amazon-dark uppercase tracking-wide">
                  Tell Us About Your Project <span className="text-muted-foreground font-sans normal-case"></span>
                </label>
                <textarea
                  value={form.message} onChange={set("message")}
                  placeholder="Briefly describe your project (e.g., genre, estimated word count)..."
                  className={`${fieldCls()} min-h-[100px] resize-none w-full`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-amazon-orange hover:bg-amazon-orange-hover disabled:opacity-70 text-amazon-dark font-bold text-sm py-3 rounded-sm transition-colors duration-150 uppercase tracking-wide"
              >
                {status === "loading" ? (
                  <><Loader2 size={15} className="animate-spin" /> Sending…</>
                ) : "Get a Free Consultation →"}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
