import type { Metadata } from "next";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Essential Safety Management collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeUp className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold uppercase tracking-tight text-navy">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
          </div>

          <div className="flex flex-col gap-6 text-sm leading-relaxed text-foreground">
            <p>
              Essential Safety Management (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to
              protecting your privacy. This policy explains how we collect, use, and safeguard your personal
              information when you visit our website or get in touch with us.
            </p>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-navy">Who We Are</h2>
              <p>
                Essential Safety Management is a health &amp; safety consultancy based in Bulkington, Warwickshire.
                You can contact us at{" "}
                <a href="mailto:info@essentialsafetymanagement.com" className="text-brand-green underline">
                  info@essentialsafetymanagement.com
                </a>{" "}
                or 024 7601 2642.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-navy">What We Collect</h2>
              <p>When you contact us through our website, we may collect:</p>
              <ul className="ml-5 list-disc">
                <li>Your name and business name</li>
                <li>Email address and phone number</li>
                <li>Any details you provide about your enquiry</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-navy">How We Use Your Information</h2>
              <p>We use your information solely to:</p>
              <ul className="ml-5 list-disc">
                <li>Respond to your enquiry and provide the services you&apos;ve requested</li>
                <li>Follow up regarding consultations, quotes, or ongoing work</li>
                <li>Maintain records as required for our professional services</li>
              </ul>
              <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-navy">Legal Basis</h2>
              <p>
                We process your data under legitimate interest (responding to your enquiry) and, where you become a
                client, to perform our contract with you.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-navy">Data Retention</h2>
              <p>
                We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy,
                or as required by law or professional obligations.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-navy">Your Rights</h2>
              <p>Under UK GDPR, you have the right to:</p>
              <ul className="ml-5 list-disc">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to how we process your data</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:info@essentialsafetymanagement.com" className="text-brand-green underline">
                  info@essentialsafetymanagement.com
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-navy">Cookies</h2>
              <p>
                Our website may use essential cookies to function correctly, and may use additional cookies for
                analytics or third-party embedded tools (such as our enquiry form). You can control cookie
                preferences through your browser settings.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-navy">Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. Any changes will be posted on this page with an updated
                revision date.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-navy">Complaints</h2>
              <p>
                If you have concerns about how we handle your data, you can contact us directly, or lodge a complaint
                with the Information Commissioner&apos;s Office (ICO) at{" "}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-brand-green underline">
                  ico.org.uk
                </a>
                .
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
