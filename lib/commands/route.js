const RouteCommand = require("../classes/route");
const app = new RouteCommand();

const validTypes = ["pr"];

exports.command = ["route <type>", "r"];

exports.describe = "Generate a route component";

exports.builder = (yargs) => {
  yargs.positional("type", {
    describe: `Type of component
               pr --> private route component
               `,
    type: "string",
    default: "pr",
    choices: validTypes,
  });
  yargs.option("test", {
    describe: `Test file for component, it will create file as ->
               componentName.test.js`,
    default: false,
    choices: [true, false],
    type: "boolean",
  });
  yargs.option("testExt", {
    describe: `Change test file extension`,
    type: "string",
    default: "test-js",
    choices: ["test-js", "spec-js", "test-tsx", "spec-tsx"],
  });
  yargs.option("cwd", {
    describe: `Change current working directory`,
    type: "string",
  });
  yargs.option("ext", {
    describe: `Change component file extension`,
    type: "string",
    default: "js",
    choices: ["js", "jsx", "tsx"],
  });
};

exports.handler = (argv) => {
  const { type, ...options } = argv;
  const { ext } = options;
  const task = `route`;
  const data = {
    componentType: type,
    templateName: ext === "tsx" ? `${type}ts` : type,
    fileName: "private-route",
    options,
  };
  app.initializeData(data);
  app.run(task);
};
