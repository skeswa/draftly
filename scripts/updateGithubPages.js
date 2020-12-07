const path = require("path");
const ghPages = require("gh-pages");

const pathToProjectRoot = path.resolve(__dirname, "..", "public");

ghPages.publish(/* basePath= */ pathToProjectRoot, (err) => {
  if (!err) {
    return;
  }

  console.error("Failed to update github pages:", err);
  process.exit(/* code= */ 1);
});
