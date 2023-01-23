/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
    domains: ["assets.coingecko.com"],
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
