/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [50, 75, 100],
    remotePatterns: [
      {
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
