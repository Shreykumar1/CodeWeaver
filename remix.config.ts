/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    serverBuildTarget: 'netlify',
    server: './server.js', // Required for Netlify adapter
    ignoredRouteFiles: ['**/.*'],
  };
  