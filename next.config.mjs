/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
dotenv.config();

const nextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH,
    NEXT_CONTENTFUL_SPACE_ID: process.env.NEXT_CONTENTFUL_SPACE_ID,
    NEXT_CONTENTFUL_ACCESS_TOKEN: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
    NEXT_CONTENTFUL_CMA_TOKEN: process.env.NEXT_CONTENTFUL_CMA_TOKEN,
  },
  eslint: {
    dirs: ["src"],
  },
  experimental: {
    esmExternals: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
