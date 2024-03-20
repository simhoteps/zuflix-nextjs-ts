/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
};

export default nextConfig;
