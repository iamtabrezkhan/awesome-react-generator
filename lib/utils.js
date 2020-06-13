const fs = require("fs");
const path = require("path");
const os = require("os");

exports.getTemplate = (filename) => {
  const templateDir = `${__dirname}/templates`;
  const buffer = fs.readFileSync(`${templateDir}/${filename}`);
  const fileContent = buffer.toString();
  return fileContent;
};

/**
 * Convert the given kebab case `string` to pascal case
 *
 * ```js
 * const pascalCase = kebabCaseToPascalCase('hello-world')
 * ```
 * @param {String} `string` kebab case string.
 * @api public
 */
exports.kebabCaseToPascalCase = (string) => {
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

exports.setComponentName = (fileContent, name) => {
  return fileContent.replace(/<<<cmpname>>>/g, name);
};

exports.createFolder = (dir, folderName) => {
  const dest = path.join(dir, folderName);
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
};

exports.createFile = (dir, fileName, data) => {
  if (!fs.existsSync(dir)) {
    throw new Error(`dir -> ${dir}: does not exist!`);
    return;
  }
  const dest = path.join(dir, fileName);
  fs.writeFileSync(dest, data);
};

exports.ifExist = (path) => {
  return fs.existsSync(path);
};

exports.resolveTilde = (path) => {
  if (!path) {
    return "";
  }
  if (path[0] === "~" && (path[1] === "/" || path.length === 1)) {
    return path.replace("~", process.env.HOME || os.homedir());
  }
  return path;
};

exports.resolvePath = (p) => {
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

exports.getDirContents = (dir) => {
  return fs.readdirSync(dir);
};

exports.getDirContentsCount = (dir) => {
  const directory = fs.readdirSync(dir);
  return directory.length;
};
