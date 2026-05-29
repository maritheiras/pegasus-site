import {
  ClientScripts,
  FinalCtaSection,
  Footer,
  FounderSection,
  Header,
  HeroSection,
  InsightsSection,
  ProductSection,
} from "@/components/landing";

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
