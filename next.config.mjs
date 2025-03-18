import { cache } from 'react';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.cache = {
            type: 'filesystem',
            compression: "gzip",
        };
        return config;
    },
};

export default nextConfig;
