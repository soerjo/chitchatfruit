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
};

module.exports = nextConfig;
