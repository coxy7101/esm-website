import Image from "next/image";
import { FadeUp } from "@/components/fade-up";

const credentials = [
  { src: "/images/nebosh-logo.png", alt: "NEBOSH Certified", width: 266, height: 297, className: "h-16 w-auto object-contain md:h-20" },
  { src: "/images/iosh-tech-logo.png", alt: "TechIOSH", width: 289, height: 368, className: "h-16 w-auto object-contain md:h-20" },
  { src: "/images/iosh-managing-safely-logo.png", alt: "IOSH Managing Safely", width: 651, height: 300, className: "h-14 w-auto object-contain md:h-16" },
  { src: "/images/licensed-insured-logo.png", alt: "Licensed and Insured", width: 594, height: 218, className: "h-9 w-auto object-contain md:h-10" },
];

export function TrustStrip() {
  return (
    <section className="relative z-10 -mt-28 md:-mt-36" aria-label="Credentials">
      <FadeUp
        delay={0.2}
        className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl bg-white px-6 py-5 shadow-xl md:px-10 md:py-6"
      >
        {credentials.map((cred) => (
          <Image
            key={cred.alt}
            src={cred.src}
            alt={cred.alt}
            width={cred.width}
            height={cred.height}
            className={cred.className}
          />
        ))}
      </FadeUp>
    </section>
  );
}
