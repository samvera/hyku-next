/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
dotenv.config();

const nextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  contentfulSpaceID: process.env.CONTENTFUL_SPACE_ID,
  contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  contentfulMgmtAccessToken: process.env.CONTENTFUL_CMA_TOKEN,
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
