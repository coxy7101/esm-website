"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { packagesFaq } from "@/data/packages";

export function PackagesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4">
      {packagesFaq.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="overflow-hidden rounded-xl border border-border bg-card">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-bold text-navy">{item.question}</span>
              <ChevronDown
                className={`size-5 shrink-0 text-brand-green transition-transform ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6">
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
