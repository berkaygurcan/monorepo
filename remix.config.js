/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  appDirectory: "./src",
  serverDependenciesToBundle: ["@apollo/client"],
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
};
