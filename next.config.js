/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    

  },
  
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
      reactStrictMode:false
}

module.exports = nextConfig
