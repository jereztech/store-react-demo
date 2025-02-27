import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === 'production' ? '/store-react-demo' : '';

const nextConfig: NextConfig = {
    output: 'export',
    basePath,
    assetPrefix: basePath,
    images: {
        unoptimized: true,
        remotePatterns: [
            { protocol: 'https', hostname: 'flagcdn.com' },
            { protocol: 'https', hostname: 'fakestoreapi.com' },
        ],
    },
};

export default nextConfig;
