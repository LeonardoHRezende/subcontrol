// next.config.js ou next.config.ts
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '1mb',
      allowedOrigins: ['*']
    }
  },
};

module.exports = nextConfig;
