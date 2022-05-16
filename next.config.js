/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["picsum.photos"] },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
