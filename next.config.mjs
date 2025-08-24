/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
        // hostname: "i.pinimg.com",
      },
    ],
  },
};

export default nextConfig;
