/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // prior 12.3
    domains: [process.env.WP_IMAGES_URL],
    // for 12.3 and above
    // remotePatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: 'localhost',
    //     port: '10004',
    //     pathname: '/**',
    //   },
    // ],
  },
};
module.exports = nextConfig;
