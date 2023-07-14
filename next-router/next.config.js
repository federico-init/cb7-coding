/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
    @import "./src/styles/typography/font.scss";
    @import "./src/styles/utils/reset.scss";
    `,
  },
};

module.exports = nextConfig;
