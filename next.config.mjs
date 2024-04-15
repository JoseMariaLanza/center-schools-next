/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com', 'mdbcdn.b-cdn.net']
  },
  env: {
    // facebookAuthUrl: `${process.env.HOST}:${process.env.PORT}/${process.env.FACEBOOK_AUTH_URI}`
    facebookAuthUrl: `${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_FACEBOOK_AUTH_URI}`
  }
}

export default nextConfig
