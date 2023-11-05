const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")
const withVanillaExtract = createVanillaExtractPlugin()

console.log(process.env);
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["ui"],
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "8000",
                pathname: "/static/**",
            },
            {
                protocol: "https",
                hostname: process.env.NEXT_REMOTE_SERVER_URL,
                pathname: "/static/**",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/dashboard",
                permanent: false
            },
        ]
    },
}

module.exports = withVanillaExtract(nextConfig)
