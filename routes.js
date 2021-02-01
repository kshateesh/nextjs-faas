// This file was automatically added by xdn deploy.
// You should commit this file to source control.
const { Router } = require("@xdn/core/router");
const { nextRoutes } = require("@xdn/next");
const { existsSync, readFileSync } = require("fs");
const { join } = require("path");

// Read the Next.js build ID from '.next/BUILD_ID
const buildIdPath = join(process.cwd(), ".next", "BUILD_ID");

function getPrerenderRequests() {
  const prerenderRequests = [{ path: "/" }];

  if (existsSync(buildIdPath)) {
    // Derive the API requests from the HTML page URLs
    const buildId = readFileSync(buildIdPath, "utf8");
    const apiPaths = prerenderRequests.map((path) => ({
      path: `/data/${buildId}${path}.json`,
    }));
    prerenderRequests.push(...apiPaths);
  }

  return prerenderRequests;
}

module.exports = new Router()
  .match("/service-worker.js", ({ serviceWorker }) => {
    return serviceWorker(".next/static/service-worker.js");
  })
  .use(nextRoutes) // automatically adds routes for all files under /pages
  .prerender(getPrerenderRequests)
  .use(nextRoutes);
