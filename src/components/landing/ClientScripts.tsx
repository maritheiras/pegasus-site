import Script from "next/script";

export function ClientScripts() {
  return (
    <>
      <Script src="/scripts/shader-hero.js" strategy="afterInteractive" />
      <Script src="/scripts/site.js?v=social-nav-smooth-visuals" strategy="afterInteractive" />
    </>
  );
}

