/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    siteMeta:{
      title: 'erp-sistem',
      description: 'erp, sistema erp!',
      imageUrl: 'https://i.ibb.co/r0z2dY1/erp.png',
      url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://erp-sistem.com.br',
    }
  },
  typescript: { ignoreBuildErrors: true },
}

module.exports = nextConfig
