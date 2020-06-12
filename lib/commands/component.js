const App = require("../../");
const app = new App();

const validTypes = ["rfc", "rcc", "rfcp"];

exports.command = ["component <type> <componentName>", "c"];

exports.describe = "Generate a component";

exports.builder = (yargs) => {
  yargs.positional("type", {
    describe: `Type of component
               rfc --> react function component
               rcc --> react class component`,
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
};

exports.handler = (argv) => {
  const { type, componentName, css, test } = argv;
  const task = `component`;
  app.run(task, {
    componentType: type,
    templateName: type,
    fileName: componentName,
    options: {
      css,
      test,
    },
  });
};
