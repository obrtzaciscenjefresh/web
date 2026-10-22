import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/uvjeti-poslovanja",
        destination: "/opci-uvjeti-poslovanja",
        permanent: true,
      },
      {
        source: "/opci-uvjeti-poslovanja-pranje-tepiha",
        destination: "/opci-uvjeti-poslovanja",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
