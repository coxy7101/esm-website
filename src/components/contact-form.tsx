"use client";

import { Widget } from "@typeform/embed-react";

export function ContactForm() {
  return (
    <div className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl font-bold text-navy">Book Your Free Consultation</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Fill in the form and we&apos;ll get back to you within one working day.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg">
        <Widget
          id="REPLACE_WITH_YOUR_TYPEFORM_ID"
          className="w-full"
          style={{ minHeight: "500px" }}
        />
      </div>
    </div>
  );
}