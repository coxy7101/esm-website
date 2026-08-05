#!/usr/bin/env python3
"""ESM Batch 5 -- first-party contact form, remove Typeform + cookie consent system."""
import pathlib

def replace_one(path, old, new, label):
    p = pathlib.Path(path)
    src = p.read_text(encoding="utf-8")
    n = src.count(old)
    if n == 1:
        p.write_text(src.replace(old, new), encoding="utf-8")
        print(f"  OK    {path} [{label}]")
    else:
        print(f"  WARN  {path} [{label}] -- found {n} matches, expected 1. Skipped.")

pathlib.Path("src/app/api/contact").mkdir(parents=True, exist_ok=True)
pathlib.Path("src/app/api/contact/route.ts").write_text('''import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, organisation, contact, requirement } = await request.json();

    if (!name || !contact || !requirement) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Essential Safety Management <enquiries@essentialsafetymanagement.com>",
      to: "info@essentialsafetymanagement.com",
      replyTo: contact.includes("@") ? contact : undefined,
      subject: `New enquiry from ${name}${organisation ? ` (${organisation})` : ""}`,
      text: `Name: ${name}\\nOrganisation: ${organisation || "Not provided"}\\nEmail/Phone: ${contact}\\n\\nRequirement:\\n${requirement}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your enquiry. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
''', encoding="utf-8")
print("OK  created src/app/api/contact/route.ts")

pathlib.Path("src/components/contact-form.tsx").write_text('''"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      organisation: (form.elements.namedItem("organisation") as HTMLInputElement).value,
      contact: (form.elements.namedItem("contact") as HTMLInputElement).value,
      requirement: (form.elements.namedItem("requirement") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
        <h3 className="text-xl font-bold text-navy">Thanks, that&apos;s on its way</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We&apos;ve received your enquiry and will respond within one working day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl font-bold text-navy">Book Your Free Consultation</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Fill in the form and we&apos;ll get back to you within one working day.
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-semibold text-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-brand-green"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="organisation" className="text-sm font-semibold text-navy">
          Organisation
        </label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-brand-green"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact" className="text-sm font-semibold text-navy">
          Email or phone number
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-brand-green"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="requirement" className="text-sm font-semibold text-navy">
          Tell us what you need
        </label>
        <textarea
          id="requirement"
          name="requirement"
          rows={4}
          required
          className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-brand-green"
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-brand-red" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-lg bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-green/85 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}
''', encoding="utf-8")
print("OK  contact-form.tsx rewritten as first-party form")

replace_one("src/app/layout.tsx",
    '''import { JsonLd } from "@/components/json-ld";
import { CookieBanner } from "@/components/cookie-banner";''',
    '''import { JsonLd } from "@/components/json-ld";''',
    "remove CookieBanner import")

replace_one("src/app/layout.tsx",
    '''        <SiteFooter />
        <CookieBanner />
      </body>''',
    '''        <SiteFooter />
      </body>''',
    "remove CookieBanner usage")

replace_one("src/app/privacy-policy/page.tsx",
    '''              <p>
                Our website may use essential cookies to function correctly, and may use additional cookies for
                analytics or third-party embedded tools (such as our enquiry form). You can control cookie
                preferences through your browser settings.
              </p>''',
    '''              <p>
                Our website uses only essential cookies required for it to function correctly. We do not use
                third-party embedded tools or non-essential tracking cookies. You can control cookie preferences
                through your browser settings.
              </p>''',
    "privacy policy: cookies paragraph")

for f in ["src/lib/cookie-consent.ts", "src/components/cookie-banner.tsx"]:
    fp = pathlib.Path(f)
    if fp.exists():
        fp.unlink()
        print(f"OK  deleted {f}")
    else:
        print(f"SKIP  {f} not found")

print("\\nDone. Review WARN lines above before committing.")
