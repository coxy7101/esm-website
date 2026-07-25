"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={
        scrolled || open
          ? "fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 transition-colors duration-300"
          : "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent transition-colors duration-300"
      }
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Essential Safety Management - Home">
          <Image
            src="/images/esm-logo.png"
            alt="Essential Safety Management logo"
            width={150}
            height={128}
            priority
            className="h-12 w-auto"
          />
          <span
            className={
              scrolled || open
                ? "hidden text-sm font-bold uppercase tracking-wider text-navy leading-tight sm:block transition-colors duration-300"
                : "hidden text-sm font-bold uppercase tracking-wider text-white leading-tight sm:block transition-colors duration-300"
            }
          >
            Essential Safety
            <br />
            Management
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const lightText = !scrolled && !open;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "relative text-sm font-semibold text-brand-green after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-brand-green after:content-['']"
                    : lightText
                    ? "relative text-sm font-medium text-white transition-colors hover:text-brand-green after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-green after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                    : "relative text-sm font-medium text-navy transition-colors hover:text-brand-green after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-green after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy-dark active:scale-[0.97]"
          >
            Book a Free Consultation
          </Link>
        </nav>

        <button
          type="button"
          className={
            scrolled || open
              ? "inline-flex items-center justify-center rounded-lg p-2 text-navy transition-colors duration-300 md:hidden"
              : "inline-flex items-center justify-center rounded-lg p-2 text-white transition-colors duration-300 md:hidden"
          }
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    isActive(link.href)
                      ? "rounded-lg bg-muted px-3 py-3 text-base font-semibold text-brand-green"
                      : "rounded-lg px-3 py-3 text-base font-medium text-navy transition-colors hover:bg-muted"
                  }
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-navy px-4 py-3 text-center text-base font-semibold text-white transition-all hover:bg-navy-dark active:scale-[0.97]"
              >
                Book a Free Consultation
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
