"use client";

import { Widget } from "@typeform/embed-react";
import { setCookieConsent, useCookieConsent } from "@/lib/cookie-consent";

export function ContactForm() {
  const consent = useCookieConsent();

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl font-bold text-navy">Book Your Free Consultation</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Fill in the form and we&apos;ll get back to you within one working day.
        </p>
      </div>

      {consent === "accepted" ? (
        <div className="overflow-hidden rounded-lg">
          <Widget id="R18Wsndb" className="w-full" style={{ minHeight: "500px" }} />
        </div>
      ) : (
        <div className="flex flex-col items-start gap-4 rounded-lg border border-dashed border-border bg-muted p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Our booking form is provided by Typeform, which sets non-essential cookies. Accept cookies to load it, or
            call or email us directly using the details on this page.
          </p>
          <button
            type="button"
            onClick={() => setCookieConsent("accepted")}
            className="rounded-lg bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green/85"
          >
            Accept cookies &amp; load form
          </button>
        </div>
      )}
    </div>
  );
}