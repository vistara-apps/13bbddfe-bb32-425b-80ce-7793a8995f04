/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['openrouter.ai', 'api.openai.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
