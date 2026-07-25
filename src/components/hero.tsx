"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-dark text-white">
      {/* Background photograph */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-window-cleaners.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center", filter: "grayscale(100%)" }}
          priority
        />
        <div className="absolute inset-0" style={{ background: "rgba(18,41,77,0.78)" }} />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-bold uppercase tracking-tight text-balance md:text-5xl lg:text-6xl"
          >
            From Risk to Compliance <span className="text-brand-green"> - Handled.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="max-w-lg text-lg leading-relaxed text-white/75 text-pretty"
          >
            Expert health &amp; safety consultancy for West Midlands businesses. Audits, risk assessments, and
            documentation done right.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
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

        <div className="relative flex items-end justify-center pb-6 md:justify-end md:pr-10" aria-hidden="true">
          <div className="relative w-64 md:w-80">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.1, delay: 0.3, ease: "easeInOut" }}
            >
              <Image
                src="/images/logo-bars-only.png"
                alt=""
                width={1280}
                height={1290}
                className="h-auto w-full"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.3, type: "spring", stiffness: 200, damping: 12 }}
              className="absolute inset-0 drop-shadow-[0_0_25px_rgba(255,255,255,0.45)]"
            >
              <Image
                src="/images/logo-checkmark-only.png"
                alt=""
                width={1280}
                height={1290}
                className="h-auto w-full"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}