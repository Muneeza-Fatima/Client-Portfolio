import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Faster page loads on every device: serve modern, smaller image
  // formats automatically wherever next/image is used.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;