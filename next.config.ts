import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        search: "",
      },
    ],
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
bodySizeLimit: "100mb"
  },
};

export default nextConfig;
