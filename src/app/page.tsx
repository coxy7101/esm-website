import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { ServicesOverview } from "@/components/services-overview";
import { RagBand } from "@/components/rag-band";
import { FinalCta } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <RagBand />
      <FinalCta />
    </>
  );
}
