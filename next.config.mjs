/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
        port: "5000",
      },
    ],
  },
};

export default nextConfig;
