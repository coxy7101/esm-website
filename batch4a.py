#!/usr/bin/env python3
"""ESM Batch 4a — package renames and one-man-band rewording (partial, unblocked portion only)."""
import pathlib

def replace_one(path, old, new, label):
    p = pathlib.Path(path)
    src = p.read_text(encoding="utf-8")
    n = src.count(old)
    if n == 1:
        p.write_text(src.replace(old, new), encoding="utf-8")
        print(f"  OK    {path} [{label}]")
    else:
        print(f"  WARN  {path} [{label}] — found {n} matches, expected 1. Skipped.")

PKG = "src/data/packages.ts"
PAGE = "src/app/packages/page.tsx"

replace_one(PKG, '''    name: "Bronze",''', '''    name: "Essential Compliance",''', "rename Bronze")
replace_one(PKG, '''    name: "Silver",''', '''    name: "Managed Compliance",''', "rename Silver")
replace_one(PKG, '''    name: "Gold",''', '''    name: "Outsourced H&S Management",''', "rename Gold")

replace_one(PKG,
    '''      "Telephone & email H&S advice (Mon–Wed, 09:00–17:00)",''',
    '''      "Email and telephone advice within the agreed service hours and response times",''',
    "Bronze: reword Mon-Wed support line")

replace_one(PKG,
    '''      "Dedicated Competent H&S Advisor",''',
    '''      "Lead competent health and safety adviser with continuity of account knowledge",''',
    "Gold: reword Dedicated Advisor line")

replace_one(PAGE,
    '''                  <th className="bg-navy p-4 text-center font-bold uppercase tracking-wide text-white">Bronze</th>
                  <th className="bg-[#F4A020] p-4 text-center font-bold uppercase tracking-wide text-navy">Silver</th>
                  <th className="bg-navy p-4 text-center font-bold uppercase tracking-wide text-white">Gold</th>''',
    '''                  <th className="bg-navy p-4 text-center font-bold uppercase tracking-wide text-white">Essential Compliance</th>
                  <th className="bg-[#F4A020] p-4 text-center font-bold uppercase tracking-wide text-navy">Managed Compliance</th>
                  <th className="bg-navy p-4 text-center font-bold uppercase tracking-wide text-white">Outsourced H&amp;S Management</th>''',
    "comparison table headers")

print("\\nDone. Review WARN lines above before committing.")
