/**
 * Optional local, full-resolution photo pack. Once uploaded to the repo,
 * Netlify expands the archive before Next.js builds the storefront.
 * The image pack contains only vetted public/* assets and is created
 * from the shop owner's original images.
 */
const { existsSync } = require("node:fs");
const { resolve } = require("node:path");
const { execFileSync } = require("node:child_process");
const filename = "moorefamily-photo-upgrade.tar.gz";
const archive = resolve(process.cwd(), filename);

if (existsSync(archive)) {
  console.log("Restoring original quality storefront photos...");
  execFileSync("tar", ["-xzf", archive, "-C", process.cwd()], { stdio: "inherit" });
  console.log("Original-quality photos restored.");
} else {
  console.log("Optional photo archive not uploaded yet. Using existing image files.");
}
