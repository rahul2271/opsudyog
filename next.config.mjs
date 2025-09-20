/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // user visits yourdomain.com/products/some-slug
        source: "/products/:slug*", 
        // proxy to WordPress (note: singular /product/)
        destination: "https://darkcyan-gnu-869252.hostingersite.com/product/:slug*", 
      },
    ];
  },
};

export default nextConfig;
