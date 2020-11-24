const fs = require("fs");
const path = require("path");
const os = require("os");
const ejs = require("ejs");

/**
 * Convert the given kebab case `string` to pascal case
 *
 * ```js
 * const pascalCase = kebabCaseToPascalCase('hello-world')
 * ```
 * @param {String} `string` kebab case string.
 * @api public
 */
exports.kebabCaseToPascalCase = string => {
  const stringArray = string.split("-");
  let result = "";
  for (const str of stringArray) {
    if (str) {
      const firstLetter = str[0].toUpperCase();
      const rest = str.substring(1);
      result += firstLetter + rest;
    }
  }
  return result;
};

exports.createFolder = dest => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
    return true;
  }
  return false;
};

exports.createFile = (dir, fileName, data) => {
  if (!fs.existsSync(dir)) {
    throw new Error(`dir -> ${dir}: does not exist!`);
  }
  const dest = path.join(dir, fileName);
  fs.writeFileSync(dest, data);
};

exports.ifExist = path => {
  return fs.existsSync(path);
};

exports.resolveTilde = path => {
  if (!path) {
    return "";
  }
  if (path[0] === "~" && (path[1] === "/" || path.length === 1)) {
    return path.replace("~", process.env.HOME || os.homedir());
  }
  return path;
};

exports.resolvePath = p => {
  if (!p) {
    return process.cwd();
  }
  const isWin = os.platform() === "win32";
  let newPath = p;
  if (!isWin) {
    newPath = exports.resolveTilde(p);
  }
  const result = path.resolve(newPath);
  if (!fs.existsSync(result)) {
    throw new Error(`Could not resolve path: ${result}`);
  }
  return result;
};

exports.getDirContents = dir => {
  return fs.readdirSync(dir);
};

exports.getDirContentsCount = dir => {
  const directory = fs.readdirSync(dir);
  return directory.length;
};

exports.getConfigData = () => {
  try {
    // appRoot variable is global, check /bin/react-generator.js
    const configFile = require(path.join(appRoot, "/.rgrc.js"));
    if (!configFile) {
      return {};
    }
    return configFile;
  } catch (error) {
    return {};
  }
};

const MARKERS = [".git", ".hg", "package.json"];
exports.markerExists = directory =>
  MARKERS.some(mark => fs.existsSync(path.join(directory, mark)));

exports.findProjectRoot = directory => {
  while (!exports.markerExists(directory)) {
    const parentDirectory = path.resolve(directory, "..");
    if (parentDirectory === directory) {
      break;
    }
    directory = parentDirectory;
  }
  return directory;
};

exports.renderFile = (source, data, dest) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(source, data, (err, str) => {
      if (err) {
        return reject(err);
      }
      fs.writeFileSync(dest, str);
      return resolve(dest);
    });
  });
};

exports.getUnique = arr => {
  const hashMap = {};
  for (const item of arr) {
    hashMap[item] = true;
  }
  return Object.keys(hashMap);
};
