const nextTranslate = require('next-translate')

  module.exports = nextTranslate({
    webpack: (config, { isServer, webpack }) => {
      return config;
    },
    images: {
      domains: ['https://dutao-public.s3.amazonaws.com'],
      formats: ['image/avif', 'image/webp'],
    },
    reactStrictMode: true,
    swcMinify: true
  })