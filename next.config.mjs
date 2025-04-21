/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'utils']
  }
};

export default withContentlayer(nextConfig);
