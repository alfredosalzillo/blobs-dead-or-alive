import createWithPWA from '@ducanh2912/next-pwa';

const withPWA = createWithPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  output: 'export',
  basePath: '/blobs-dead-or-alive',
  experimental: {
    appDir: true,
  },
});

export default nextConfig;
