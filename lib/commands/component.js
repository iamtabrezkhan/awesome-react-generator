const ComponentCommand = require("../classes/component");
const app = new ComponentCommand();

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
  "rafctsx",
];

exports.command = ["component <type> <componentName>", "c"];

exports.describe = "Generate a component";

exports.builder = (yargs) => {
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
               rfcreduxp --> react functional component with connected redux & proptypes
               rafctsx --> react arrow functional component with typescript`,
    type: "string",
    default: "rfc",
    choices: validTypes,
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
    choices: ["normal", "modular"],
  });
  yargs.option("test", {
    describe: `Test file for component, it will create file as ->
               componentName.test.js`,
    default: false,
    choices: [true, false],
    type: "boolean",
  });
  yargs.option("cwd", {
    describe: `Change current working directory`,
    type: "string",
  });
  yargs.option("css", {
    describe: `Change css file extension`,
    type: "string",
    default: "css",
    choices: ["css", "scss", "less"],
  });
  yargs.option("ext", {
    describe: `Change component file extension`,
    type: "string",
    default: "js",
    choices: ["js", "jsx", "tsx"],
  });
};

exports.handler = (argv) => {
  const { type, componentName, ...options } = argv;
  const task = `component`;
  const data = {
    componentType: type,
    templateName: type,
    fileName: componentName,
    options,
  };
  app.initializeData(data);
  app.run(task);
};
