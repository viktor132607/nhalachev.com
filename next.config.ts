import path from "path"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      { source: "/", destination: "/bg", permanent: true },
      { source: "/about", destination: "/bg/about", permanent: true },
      { source: "/contact", destination: "/bg/contact", permanent: true },
      { source: "/privacy", destination: "/bg/privacy", permanent: true },
      { source: "/terms", destination: "/bg/terms", permanent: true },
      { source: "/cookies", destination: "/bg/cookies", permanent: true },
    ]
  },
}

export default nextConfig