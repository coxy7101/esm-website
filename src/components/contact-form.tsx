"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const industries = [
  "Construction",
  "Manufacturing & Logistics",
  "Corporate Offices",
  "Retail & Hospitality",
  "Other",
];

const inputClasses =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        className="flex h-full min-h-80 flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card p-8 text-center shadow-sm"
        role="status"
      >
        <CheckCircle2 className="size-14 text-brand-green" aria-hidden="true" />
        <h3 className="text-xl font-bold text-navy">Request Received</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
          Thanks for getting in touch. We&apos;ll call you back within one working day to arrange your free
          consultation.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl font-bold text-navy">Book Your Free Consultation</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Fill in the form and we&apos;ll get back to you within one working day.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="full-name" className="text-sm font-semibold text-navy">
          Full Name
        </label>
        <input id="full-name" name="fullName" type="text" required autoComplete="name" placeholder="Jane Smith" className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="business-name" className="text-sm font-semibold text-navy">
          Business Name
        </label>
        <input
          id="business-name"
          name="businessName"
          type="text"
          required
          autoComplete="organization"
          placeholder="Smith Construction Ltd"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-semibold text-navy">
          Phone Number
        </label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="01234 567 890" className={inputClasses} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="industry" className="text-sm font-semibold text-navy">
          Industry Type
        </label>
        <select id="industry" name="industry" required defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Select your industry
          </option>
          {industries.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us a little about your business and what you need help with…"
          className={`${inputClasses} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="mt-1 rounded-lg bg-brand-green px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-green/85"
      >
        Schedule Free Consultation
      </button>
    </form>
  );
}
