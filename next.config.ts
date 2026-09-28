import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.197"],
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/crop-solutions/fruit-crops", destination: "/crop-solutions", permanent: true },
      { source: "/bn/crop-solutions/fruit-crops", destination: "/bn/crop-solutions", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          { key: "Link", value: '</llms.txt>; rel="describedby"' },
        ],
      },
    ];
  },
};

export default nextConfig;
