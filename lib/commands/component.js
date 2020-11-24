const {
  getConfigData,
  ifExist,
  getDirContents,
  getUnique,
} = require("../utils");
const ComponentCommand = require("../classes/component");
const app = new ComponentCommand();
const colors = require("ansi-colors");
const path = require("path");

const config = getConfigData();
const { component = {} } = config;
const {
  options: { templateDir = "" },
} = component;
const completeTemplatesFolder = path.join(appRoot, templateDir);
let typesInTemplatesFolder = [];
if (ifExist(completeTemplatesFolder)) {
  typesInTemplatesFolder = getDirContents(completeTemplatesFolder);
}

const keys = Object.keys(component);
const types = keys.filter(key => {
  return key !== "options";
});
const validTypes = [
  "rfc",
  "rcc",
  "rccp",
  "rfcp",
  "rafc",
  "rafcp",
  "rafcredux",
  "rafcreduxp",
  "rfcredux",
  "rfcreduxp",
];
const allTypes = [...validTypes, ...types, ...typesInTemplatesFolder];
const finalTypes = getUnique(allTypes);

const validCssTypes = ["normal", "modular"];
const validTestOptions = [true, false];
const validTestExtensions = ["test-js", "spec-js", "test-tsx", "spec-tsx"];
const validCssExtensions = ["css", "scss", "less"];
const validJsExtensions = ["js", "jsx", "tsx"];

exports.command = ["component <type> <componentName>", "c"];

exports.describe = "Generate a component";

exports.builder = yargs => {
  yargs.positional("type", {
    describe: `Type of component
               rfc --> react function component
               rcc --> react class component
               rccp --> react class component with proptypes
               rfcp --> react functional component with proptypes
               rafc --> react arrow functional component
               rafcp --> react arrow functional component with proptypes
               rafcredux --> react arrow functional component with connected redux
               rafcreduxp --> react arrow functional component with connected redux & proptypes
               rfcredux --> react functional component with connected redux
               rfcreduxp --> react functional component with connected redux & proptypes`,
    type: "string",
    default: "rfc",
    choices: finalTypes,
  });
  yargs.positional("componentName", {
    describe: `Name of the component [in kebab-case] --> will be converted to PascalCase
               hello-world --> HelloWorld`,
    type: "string",
  });
  yargs.option("cssType", {
    describe: `Type of css file, in case of modular, it will create file as ->
               componentName.module.css`,
    default: "normal",
    choices: validCssTypes,
  });
  yargs.option("test", {
    describe: `Test file for component, it will create file as ->
               componentName.test.js`,
    default: false,
    choices: validTestOptions,
    type: "boolean",
  });
  yargs.option("testExt", {
    describe: `Change test file extension`,
    type: "string",
    default: "test-js",
    choices: validTestExtensions,
  });
  yargs.option("cwd", {
    describe: `Change current working directory`,
    type: "string",
  });
  yargs.option("css", {
    describe: `Change css file extension`,
    type: "string",
    default: "css",
    choices: validCssExtensions,
  });
  yargs.option("ext", {
    describe: `Change component file extension`,
    type: "string",
    default: "js",
    choices: validJsExtensions,
  });
};

exports.handler = argv => {
  const { type, componentName, ...cliOptions } = argv;
  const typeOptions = component[type] || {};
  const { options: configOptions = {} } = component;
  const options = { ...cliOptions, ...configOptions, ...typeOptions };
  const { cssType, css, ext, test, testExt } = options;
  if (!validCssTypes.includes(cssType)) {
    throw new Error(`Invalid css type. Valid choices: ${validCssTypes}`);
  }
  if (!validCssExtensions.includes(css)) {
    throw new Error(
      colors.redBright(
        `Invalid css extension. Valid choices: ${validCssExtensions}`
      )
    );
  }
  if (!validJsExtensions.includes(ext)) {
    console.log(ext);
    throw new Error(
      colors.redBright(
        `Invalid js file extension. Valid choices: ${validJsExtensions}`
      )
    );
  }
  if (!validTestOptions.includes(test)) {
    throw new Error(
      colors.redBright(
        `Invalid test option. Valid choices: ${validTestOptions}`
      )
    );
  }
  if (!validTestExtensions.includes(testExt)) {
    throw new Error(
      colors.redBright(
        `Invalid test extension. Valid choices: ${validTestExtensions}`
      )
    );
  }
  const task = `component`;
  const data = {
    componentType: type,
    componentName,
    options: {
      ...options,
    },
  };
  app.initializeData(data);
  app.run(task);
};
