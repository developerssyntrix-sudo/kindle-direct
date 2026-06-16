"use client";
import { useState } from "react";
import { X } from "lucide-react";

// Services list agar aapko dropdown mein dikhani hai
const services = [
  { label: "Book Writing" },
  { label: "Book Publishing" },
  { label: "Book Editing" },
  { label: "Book Marketing" },
  { label: "Book Trailer" },
  { label: "Children's Books" },
  { label: "Poetry Publishing" },
];

export default function GetStartedModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #1a2332 0%, #222e3e 60%, #1a2332 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #ff9900, #f0c040, #ff9900)" }} />
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white p-1 rounded-full hover:bg-white/10">
          <X size={20} />
        </button>

        <div className="px-8 pt-7 pb-8">
          {submitted ? (
            <div className="text-center py-6">
              <h3 className="text-white text-xl font-bold mb-2">You&apos;re All Set!</h3>
              <p className="text-white/60 text-sm mb-6">Thanks for reaching out!</p>
              <button onClick={onClose} className="bg-[#ff9900] text-white font-semibold text-sm px-8 py-2.5 rounded-lg">Close</button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <span className="text-[#ff9900] text-xs font-bold uppercase block mb-1">Free Consultation</span>
                <h2 className="text-white text-2xl font-bold">Start Your Publishing Journey</h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1 uppercase">Full Name *</label>
                  <input type="text" name="name" required placeholder="John Smith" value={form.name} onChange={handleChange} className="w-full rounded-lg px-4 py-2.5 text-sm text-white outline-none bg-white/5 border border-white/15" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-white/70 text-xs font-semibold mb-1 uppercase">Email *</label>
                    <input type="email" name="email" required placeholder="you@email.com" value={form.email} onChange={handleChange} className="w-full rounded-lg px-4 py-2.5 text-sm text-white outline-none bg-white/5 border border-white/15" />
                  </div>
                  <div>
                    <label className="block text-white/70 text-xs font-semibold mb-1 uppercase">Phone</label>
                    <input type="tel" name="phone" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} className="w-full rounded-lg px-4 py-2.5 text-sm text-white outline-none bg-white/5 border border-white/15" />
                  </div>
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1 uppercase">Service Interested In *</label>
                  <select name="service" required value={form.service} onChange={handleChange} className="w-full rounded-lg px-4 py-2.5 text-sm outline-none bg-[#222e3e] text-white border border-white/15">
                    <option value="" disabled>Select a service…</option>
                    {services.map((s) => <option key={s.label} value={s.label}>{s.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 text-xs font-semibold mb-1 uppercase">Tell Us About Your Project</label>
                  <textarea name="message" rows={3} placeholder="Briefly describe..." value={form.message} onChange={handleChange} className="w-full rounded-lg px-4 py-2.5 text-sm text-white outline-none bg-white/5 border border-white/15 resize-none" />
                </div>
                <button type="submit" className="w-full rounded-lg py-3 font-bold text-sm text-white bg-gradient-to-r from-[#ff9900] to-[#f0a500]">Submit — Get a Free Quote</button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}