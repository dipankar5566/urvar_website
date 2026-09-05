import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.197"],
  images: {
    unoptimized: true,
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
