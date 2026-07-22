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
    default: "Essential Safety Management | Health & Safety Consultancy, West Midlands",
    template: "%s | Essential Safety Management",
  },
  description:
    "Expert health & safety consultancy for West Midlands businesses. Audits, risk assessments, policies and documentation done right. Based in Bulkington, Warwickshire.",
  openGraph: {
    title: "Essential Safety Management | Health & Safety Consultancy",
    description:
      "Expert health & safety consultancy for West Midlands businesses. Audits, risk assessments, policies and documentation done right.",
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
