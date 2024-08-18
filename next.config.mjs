import createWithPWA from '@ducanh2912/next-pwa';
import addMdx from '@next/mdx';

const withPWA = createWithPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: false,
  workboxOptions: {
    skipWaiting: false,
  }
});

const withMdx = addMdx({
  extension: /\.mdx?$|\.md?$/,
});

/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx', 'md'],
  output: 'export',
  basePath: '/blobs-dead-or-alive',
}


export default [withMdx, withPWA].reduce((current, fn) => fn(current), config);
