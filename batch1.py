#!/usr/bin/env python3
"""ESM Batch 1 — site-wide literal fixes. Run from repo root."""
import re, pathlib

EXT  = {".tsx", ".ts", ".jsx", ".js", ".mdx"}
SKIP = {"node_modules", ".next", ".git", "public"}

RULES = [
 ("Six core services (cap)",
  r"\bSix core services\b",
  "Nine core services"),

 ("six core services (lower)",
  r"\bsix core services\b",
  "nine core services"),

 ("footer credential line",
  r"TechIOSH\s*\|\s*NEBOSH Certified\s*\|\s*IOSH Managing Safely\s*\|\s*Fully Insured",
  "Evidence of professional competence and insurance is available on request."),

 ("footer description",
  r"Expert health\s*(?:&amp;|&)\s*safety consultancy helping West Midlands businesses move from risk to compliance\.",
  "Essential Safety Management is a UK-wide health and safety consultancy supporting "
  "organisations with audits, risk assessments, documentation, training and ongoing "
  "compliance management."),

 ("footer address",
  r"Bulkington, Warwickshire, West Midlands",
  "Head office: Bulkington, Warwickshire"),
]

hits = {label: 0 for label, _, _ in RULES}

for p in pathlib.Path(".").rglob("*"):
    if p.suffix not in EXT or any(s in p.parts for s in SKIP):
        continue
    src = p.read_text(encoding="utf-8")
    out = src
    for label, pat, rep in RULES:
        out, n = re.subn(pat, rep, out)
        if n:
            hits[label] += n
            print(f"  {p}  [{label}] x{n}")
    if out != src:
        p.write_text(out, encoding="utf-8")

print("\nSummary:")
for label, n in hits.items():
    print(("  OK    " if n else "  MISS  ") + f"{label}: {n}")
