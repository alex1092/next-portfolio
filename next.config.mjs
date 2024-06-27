/** @type {import('next').NextConfig} */
const nextConfig = {  
  swcMinify: true,

    reactStrictMode: true,
    images: {
        remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/photo-1591462906397-6d3b692f92a5**',
      },

    ],
    },
};

export default nextConfig;
