/**
 * Code from https://github.com/sindresorhus/log-symbols
 * I have removed chalk as a dependency and used ansi-colors (https://www.npmjs.com/package/ansi-colors) instead
 */

const color = require("ansi-colors");

const isSupported =
  process.platform !== "win32" ||
  process.env.CI ||
  process.env.TERM === "xterm-256color";

const main = {
  info: color.blue("ℹ"),
  success: color.green("✔"),
  warning: color.yellow("⚠"),
  error: color.red("✖"),
};

const fallbacks = {
  info: color.blue("i"),
  success: color.green("√"),
  warning: color.yellow("‼"),
  error: color.red("×"),
};

module.exports = isSupported ? main : fallbacks;
