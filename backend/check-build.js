// check-build.js
const fs = require("fs");
const { execSync } = require("child_process");

const adminIndex = "./node_modules/@strapi/admin/dist/index.html";

if (!fs.existsSync(adminIndex)) {
  console.log("⚡ Admin UI not built. Running `strapi build`...");
  execSync("npm run build", { stdio: "inherit" });
} else {
  console.log("✅ Admin UI already built. Skipping build.");
}
