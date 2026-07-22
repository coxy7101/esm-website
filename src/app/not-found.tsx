import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-background">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
        <span className="text-sm font-bold uppercase tracking-widest text-brand-green">404 Error</span>
        <h1 className="text-4xl font-bold uppercase tracking-tight text-navy md:text-5xl">Page Not Found</h1>
        <p className="text-base leading-relaxed text-muted-foreground text-pretty">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
          >
            <Home className="size-4" aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-muted"
          >
            Contact Us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
