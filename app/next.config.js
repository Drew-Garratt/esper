/** @type {import('next').NextConfig} */
const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  reactStrictMode: true,
  exportPathMap: async function () {
    return {
      '/pages/test': { page: '/pages/[handle]' },
    }
  },
});
