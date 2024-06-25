/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "25mb",
    },
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*" },
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
