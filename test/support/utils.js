const rimraf = require("rimraf");
const fs = require("fs");
const path = require("path");
const utils = require("../../lib/utils");

exports.removeFolder = (dir, folderName) => {
  const d = utils.resolvePath(dir);
  if (!fs.existsSync(d)) {
    throw new Error(`dir -> ${d}: does not exist!`);
    return;
  }
  const dest = path.join(d, folderName);
  rimraf.sync(dest);
};

exports.getDirContents = (dir) => {
  return fs.readdirSync(dir);
};

exports.getDirContentsCount = (dir) => {
  return this.getDirContents(dir).length;
};
