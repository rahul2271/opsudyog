/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "darkcyan-gnu-869252.hostingersite.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
