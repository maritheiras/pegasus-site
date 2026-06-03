"use client";

import { useEffect } from "react";

const clientScripts = [
  {
    id: "pegasus-shader-script",
    src: "/scripts/shader-hero.js?v=stable-fade",
  },
  {
    id: "pegasus-site-script",
    src: "/scripts/site.js?v=post-hydration",
  },
];

export function ClientScripts() {
  useEffect(() => {
    clientScripts.forEach(({ id, src }) => {
      if (document.getElementById(id)) {
        return;
      }

      const script = document.createElement("script");
      script.id = id;
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    });
  }, []);

  return null;
}
