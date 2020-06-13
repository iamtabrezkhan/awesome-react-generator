const App = require("../../");
const app = new App();

const validTypes = ["rfc", "rcc", "rfcp", "rafc", "rafcp", "rafcredux"];

exports.command = ["component <type> <componentName>", "c"];

exports.describe = "Generate a component";

exports.builder = (yargs) => {
  yargs.positional("type", {
    describe: `Type of component
               rfc --> react function component
               rcc --> react class component
               rfcp --> react functional component with proptypes
               rafc --> react arrow functional component
               rafcp --> react arrow functional component with proptypes
               rafcredux --> react arrow functional component with connected redux`,
    type: "string",
    default: "rfc",
    choices: validTypes,
  });
  yargs.positional("componentName", {
    describe: `Name of the component [in kebab-case] --> will be converted to PascalCase
               hello-world --> HelloWorld`,
    type: "string",
  });
  yargs.option("css", {
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
};

exports.handler = (argv) => {
  const { type, componentName, css, test, cwd } = argv;
  const task = `component`;
  app.run(task, {
    componentType: type,
    templateName: type,
    fileName: componentName,
    options: {
      css,
      test,
      cwd,
    },
  });
};
