"use client";

import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sessionType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (!formspreeId) {
      // Fallback for development
      console.log("Form submission (no Formspree ID configured):", formData);
      setSubmitted(true);
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          "session-preference": formData.sessionType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-matcha-light/30 rounded-3xl p-10 md:p-14 text-center">
        <h3 className="font-display text-3xl md:text-4xl text-warm-charcoal mb-4">
          Thank you
        </h3>
        <p className="text-warm-muted leading-relaxed max-w-md mx-auto">
          Your message has been sent. I&apos;ll get back to you within 24-48
          hours. Looking forward to hearing from you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-warm-charcoal font-medium text-sm mb-2"
        >
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-5 py-3.5 rounded-2xl bg-oat-dark/60 border border-warm-charcoal/10 text-warm-charcoal placeholder:text-warm-light focus:outline-none focus:border-terracotta/40 focus:ring-2 focus:ring-terracotta/10 transition-all"
          placeholder="What should I call you?"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-warm-charcoal font-medium text-sm mb-2"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-5 py-3.5 rounded-2xl bg-oat-dark/60 border border-warm-charcoal/10 text-warm-charcoal placeholder:text-warm-light focus:outline-none focus:border-terracotta/40 focus:ring-2 focus:ring-terracotta/10 transition-all"
          placeholder="your@email.com"
        />
      </div>

      {/* Session Preference */}
      <div>
        <label
          htmlFor="sessionType"
          className="block text-warm-charcoal font-medium text-sm mb-2"
        >
          How would you prefer your sessions?
        </label>
        <div className="grid grid-cols-2 gap-3">
          {["Video (Zoom)", "Phone"].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFormData({ ...formData, sessionType: option })}
              className={`px-5 py-3.5 rounded-2xl border text-sm font-medium transition-all cursor-pointer ${
                formData.sessionType === option
                  ? "bg-terracotta/10 border-terracotta/40 text-terracotta"
                  : "bg-oat-dark/60 border-warm-charcoal/10 text-warm-muted hover:border-warm-charcoal/20"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-warm-charcoal font-medium text-sm mb-2"
        >
          Anything you&apos;d like to share{" "}
          <span className="text-warm-light font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-5 py-3.5 rounded-2xl bg-oat-dark/60 border border-warm-charcoal/10 text-warm-charcoal placeholder:text-warm-light focus:outline-none focus:border-terracotta/40 focus:ring-2 focus:ring-terracotta/10 transition-all resize-none"
          placeholder="No pressure, you can share as much or as little as you like."
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again or email me directly at hcounselling@outlook.com.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
        {submitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-warm-light text-xs mt-3">
        Your information is completely confidential and will never be shared.
      </p>
    </form>
  );
}
