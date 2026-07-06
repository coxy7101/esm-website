export const metadata = { title: "Contact | Essential Safety Management" };

export default function ContactPage() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold uppercase tracking-tight text-navy md:text-4xl">Contact Us</h1>
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        Book your free, no-obligation consultation. Email{" "}
        <a href="mailto:info@essentialsafetymanagement.co.uk" className="font-semibold text-navy underline">
          info@essentialsafetymanagement.co.uk
        </a>{" "}
        or call <a href="tel:+441234567890" className="font-semibold text-navy underline">01234 567 890</a>.
      </p>
    </section>
  );
}
