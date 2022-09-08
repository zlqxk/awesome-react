const path = require("path");

/**
 * 客户端
 */
require("esbuild")
  .build({
    entryPoints: [path.resolve(__dirname, "../client/index.tsx")],
    outfile: path.resolve(__dirname, "../dist/static/index.js"),
    bundle: true,
    platform: "browser",
    watch: {
      onRebuild(error) {
        if (error) console.error("client build failed:", error);
        else console.log("client build end");
      },
    },
  })
  .then(() => console.log("client start"))
  .catch(() => process.exit(1));
