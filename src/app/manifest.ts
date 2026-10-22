import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fresh - pranje tepiha Zagreb",
    short_name: "Fresh",
    description: "Strojno pranje tepiha u Zagrebu uz besplatno preuzimanje i dostavu.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2c549d",
    lang: "hr",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
