/** @type {import('next').NextConfig} */
const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  reactStrictMode: true,
  exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/pages/test': { page: '/pages/[handle]' },
    }
  },
});
