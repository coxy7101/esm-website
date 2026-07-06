"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const bars = [
  { color: "bg-brand-red", height: "h-28 md:h-36", delay: 0.2 },
  { color: "bg-brand-amber", height: "h-40 md:h-52", delay: 0.4 },
  { color: "bg-brand-green", height: "h-52 md:h-68", delay: 0.6 },
];

export function Hero() {
  return (
    <section className="bg-navy-dark text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl lg:text-6xl"
          >
            From Risk to Compliance{" "}
            <span className="text-brand-green">— Handled.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="max-w-lg text-lg leading-relaxed text-white/75 text-pretty"
          >
            Expert health &amp; safety consultancy for West Midlands businesses. Audits, risk assessments, and
            documentation done right.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="rounded-lg bg-brand-green px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-brand-green/85"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-white/30 px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Our Services
            </Link>
          </motion.div>
        </div>

        <div className="relative flex items-end justify-center gap-5 pb-6 md:justify-end md:pr-10" aria-hidden="true">
          {bars.map((bar) => (
            <motion.div
              key={bar.color}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: bar.delay, ease: "easeOut" }}
              style={{ originY: 1 }}
              className={`w-16 rounded-t-md md:w-20 ${bar.color} ${bar.height}`}
            />
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
            className="absolute -bottom-4 right-1/2 translate-x-1/2 md:right-4 md:translate-x-0"
          >
            <div className="flex size-14 items-center justify-center rounded-full bg-white shadow-lg">
              <Check className="size-8 text-navy" strokeWidth={3.5} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
