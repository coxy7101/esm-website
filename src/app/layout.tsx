import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://essentialsafetymanagement.com"),
  title: {
    default: "Health & Safety Consultancy UK | Essential Safety Management",
    template: "%s | Essential Safety Management",
  },
  description:
    "UK-wide health and safety consultancy providing audits, risk assessments, policies, training, CDM support and retained competent-person services.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Health & Safety Consultancy UK | Essential Safety Management",
    description:
      "UK-wide health and safety consultancy providing audits, risk assessments, policies, training, CDM support and retained competent-person services.",
    url: "https://essentialsafetymanagement.com",
    siteName: "Essential Safety Management",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full antialiased bg-background`}>
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
