const rimraf = require("rimraf");
const fs = require("fs");
const path = require("path");

exports.removeFolder = (dir, folderName) => {
  if (!fs.existsSync(dir)) {
    throw new Error(`dir -> ${dir}: does not exist!`);
    return;
  }
  const dest = path.join(dir, folderName);
  rimraf.sync(dest);
};

exports.getDirContents = (dir) => {
  return fs.readdirSync(dir);
};

exports.getDirContentsCount = (dir) => {
  const directory = fs.readdirSync(dir);
  return directory.length;
};
