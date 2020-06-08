const fs = require("fs");
const path = require("path");

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
