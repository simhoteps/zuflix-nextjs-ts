/** @type {import('next').NextConfig} */
const nextConfig = {
  target: "experimental-serverless-trace",
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      // Add other pages as needed
      // '/about': { page: '/about' },
      // '/contact': { page: '/contact' },
      // ...
    };
  },
};

export default nextConfig;
