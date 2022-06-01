/** @type {import('next').NextConfig} */
const withImageLoader=require('next-image-loader')
module.exports = {
  reactStrictMode: true,
}

module.exports = withImageLoader({
reactStrictMode:true,
env:{
  NEXT_PUBLIC_IMAGE_DOMAIN: 'https://res.cloudinary.com'
}
})
