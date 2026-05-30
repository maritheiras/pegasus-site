import { ClientScripts } from "@/components/landing/ClientScripts";
import { Footer, Header } from "@/components/layout";
import { FinalCtaSection, FounderSection, HeroSection, InsightsSection, ProductSection } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductSection />
      <InsightsSection />
      <FounderSection />
      <FinalCtaSection />
      <Footer />
      <ClientScripts />
    </>
  );
}
