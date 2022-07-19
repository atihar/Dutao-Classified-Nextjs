const nextTranslate = require('next-translate')

  module.exports = nextTranslate({
    webpack: (config, { isServer, webpack }) => {
      return config;
    },
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['dutao-public.s3.amazonaws.com',
      'images.pexels.com', 
      'www.arabianbusiness.com',
      'i.pinimg.com',
      'www.cntravellerme.com'],
      formats: ['image/avif', 'image/webp'],
    },
  })