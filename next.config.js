/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/dashboard/hero-image",
      destination: "/dashboard",
      permanent: true,
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "www.chitchatfruit.com",
      },
      {
        protocol: "https",
        hostname: "chitchatfruit.com",
      },
    ],
  },
};

module.exports = nextConfig;
