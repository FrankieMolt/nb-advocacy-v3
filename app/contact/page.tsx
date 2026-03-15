"use client";

import { useState, FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { PageWrapper } from "@/components/PageWrapper";
import { BackLink } from "@/components/BackLink";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Mailto fallback - opens user's email client
    const subject = encodeURIComponent(
      `Contact from ${formData.name} - Reform NB`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:reformnb-tips@proton.me?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  return (
    <PageWrapper>
      <BackLink />

      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-16 h-16 bg-crisis-red rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(179,0,0,0.5)]"
          aria-hidden="true"
        >
          <Mail size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-black font-serif tracking-tight uppercase">
          Contact Us
        </h1>
      </div>

      <p className="text-neutral-400 mb-8 text-lg">
        Have a tip? Want to volunteer? Contact us below. All communications are
        confidential.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-neutral-900 p-8 rounded-xl border border-neutral-800"
        noValidate
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-neutral-400 mb-2 uppercase tracking-widest"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className={`w-full bg-black border rounded p-3 text-white focus:outline-none focus:border-crisis-red transition-colors ${
              errors.name ? "border-crisis-red" : "border-neutral-800"
            }`}
            aria-required="true"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-crisis-red text-xs mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-neutral-400 mb-2 uppercase tracking-widest"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`w-full bg-black border rounded p-3 text-white focus:outline-none focus:border-crisis-red transition-colors ${
              errors.email ? "border-crisis-red" : "border-neutral-800"
            }`}
            aria-required="true"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-crisis-red text-xs mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-bold text-neutral-400 mb-2 uppercase tracking-widest"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className={`w-full bg-black border rounded p-3 text-white focus:outline-none focus:border-crisis-red transition-colors resize-y ${
              errors.message ? "border-crisis-red" : "border-neutral-800"
            }`}
            aria-required="true"
            aria-invalid={!!errors.message}
          />
          {errors.message && (
            <p className="text-crisis-red text-xs mt-1" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-crisis-red text-white font-black py-3 px-8 rounded hover:bg-red-700 transition-all uppercase tracking-widest text-sm flex items-center gap-2"
          aria-label="Send message"
        >
          <Send size={16} />
          Send Message
        </button>

        {status === "sent" && (
          <p className="text-crisis-gold text-sm" role="status">
            Opening your email client...
          </p>
        )}
      </form>

      <div className="mt-12 p-8 bg-neutral-900/50 rounded-xl border border-neutral-800">
        <h2 className="text-xl font-black uppercase tracking-tight text-white mb-4">
          Encrypted Tips
        </h2>
        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
          For sensitive information, contact us via encrypted email:
        </p>
        <code className="text-crisis-red font-mono text-sm select-all">
          reformnb-tips@proton.me
        </code>
      </div>
    </PageWrapper>
  );
}
