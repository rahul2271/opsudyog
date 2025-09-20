/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/products/:path*", 
        destination: "https://https://darkcyan-gnu-869252.hostingersite.com/products/:path*", 
      },
    ];
  },
};

module.exports = nextConfig;