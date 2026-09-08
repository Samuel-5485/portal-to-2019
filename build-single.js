const fs = require("fs");
const path = require("path");

const root = __dirname;
const img = fs.readFileSync(path.join(root, "images", "adey-abeba.png"));
const dataUri = `data:image/png;base64,${img.toString("base64")}`;

const css = fs.readFileSync(path.join(root, "css", "styles.css"), "utf8");
const js = fs.readFileSync(path.join(root, "js", "app.js"), "utf8");
let html = fs.readFileSync(path.join(root, "index.html"), "utf8");

html = html.replace('<link rel="stylesheet" href="css/styles.css" />', `<style>\n${css.replace('url("../images/adey-abeba.png")', "none")}\n</style>`);
html = html.replace('src="images/adey-abeba.png"', `src="${dataUri}"`);
html = html.replace('<script src="js/app.js"></script>', `<script>\n${js}\n</script>`);

fs.writeFileSync(path.join(root, "portal-to-2019.html"), html);
console.log("wrote portal-to-2019.html", fs.statSync(path.join(root, "portal-to-2019.html")).size);
