const App = require("../../");
const app = new App();

const validTypes = ["rfc", "rcc", "rfcp"];

exports.command = ["component <type> <componentName> [css]", "c"];

exports.describe = "Generate a component";

exports.builder = (yargs) => {
  yargs.positional("type", {
    describe: `Type of component
               rfc --> react functional component
               rcc --> react class component
               rfcp --> react functional component with proptypes`,
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
};

exports.handler = (argv) => {
  const { type, componentName, css } = argv;
  const task = `component`;
  app.run(task, {
    componentType: type,
    templateName: type,
    fileName: componentName,
    options: {
      css,
    },
  });
};
