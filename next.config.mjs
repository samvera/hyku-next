/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "",
  basePath: process.env.NODE_ENV === "production" ? "/hyku-next/" : "",
  experimental: {
    esmExternals: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
