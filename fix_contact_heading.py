#!/usr/bin/env python3
import pathlib

p = pathlib.Path("src/app/contact/page.tsx")
src = p.read_text(encoding="utf-8")

old = '''              <h2
                id="contact-details-heading"
                className="text-3xl font-bold uppercase tracking-tight text-navy text-balance md:text-4xl"
              >
                Let&apos;s Talk Safety
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
                Call, email or send us a message - whichever suits you. We answer every enquiry personally, usually the
                same day.
              </p>'''

new = '''              <h2
                id="contact-details-heading"
                className="text-3xl font-bold uppercase tracking-tight text-navy text-balance md:text-4xl"
              >
                Discuss Your Health and Safety Requirements
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
                Tell us about your organisation, locations and priorities. Our team will review your enquiry and
                respond within one working day.
              </p>'''

n = src.count(old)
if n == 1:
    p.write_text(src.replace(old, new), encoding="utf-8")
    print("OK  contact heading + intro fixed")
else:
    print(f"WARN  found {n} matches, expected 1")
