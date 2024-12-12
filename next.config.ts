import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skidasvaedi.is",
        search: "",
        pathname: "/BlafjollCam/current.php",
      },
    ],
  },
};

export default nextConfig;
