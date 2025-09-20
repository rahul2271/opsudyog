/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/products/:slug*",
        destination: "https://darkcyan-gnu-869252.hostingersite.com/products/:slug*",
      },
    ];
  },
};

export default nextConfig;
