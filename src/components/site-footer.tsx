import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="w-fit rounded-lg bg-white p-3">
              <Image
                src="/images/esm-logo.png"
                alt="Essential Safety Management logo"
                width={140}
                height={120}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/70 text-pretty">
              Expert health &amp; safety consultancy helping West Midlands businesses move from risk to compliance.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Navigate</h2>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
            <p className="flex items-start gap-2 text-sm text-white/70">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-green" aria-hidden="true" />
              Bulkington, Warwickshire, West Midlands
            </p>
            <a
              href="tel:+441234567890"
              className="flex w-fit items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <Phone className="size-4 shrink-0 text-brand-green" aria-hidden="true" />
              01234 567 890
            </a>
            <a
              href="mailto:info@essentialsafetymanagement.co.uk"
              className="flex w-fit items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <Mail className="size-4 shrink-0 text-brand-green" aria-hidden="true" />
              info@essentialsafetymanagement.co.uk
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">TechIOSH | NEBOSH Certified | IOSH Managing Safely | Fully Insured</p>
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Essential Safety Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
