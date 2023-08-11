/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

const withExportImages = require("next-export-optimize-images");

module.exports = withExportImages(nextConfig);
