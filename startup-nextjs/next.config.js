/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        port: "",
      },
    ], 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fitnessprogramer.com",
        port: "",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.inspireusafoundation.org",
        port: "",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sporium.net",
        port: "",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "liftingfaq.com",
        port: "",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "newlife.com.cy",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
