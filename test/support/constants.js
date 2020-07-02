const utils = require("../../lib/utils");

const componentName = "hello-world";
const pascalName = utils.kebabCaseToPascalCase(componentName);

exports.fileNames = {
  component: {
    name: componentName,
    pascalName,
    js: `${pascalName}.js`,
    jsx: `${pascalName}.jsx`,
    tsx: `${pascalName}.tsx`,
  },
  css: {
    normal: `${pascalName}.css`,
    modular: `${pascalName}.module.css`,
  },
  test: {
    js: `${pascalName}.test.js`,
    tsx: `${pascalName}.test.tsx`,
    specJs: `${pascalName}.spec.js`,
    specTsx: `${pascalName}.spec.tsx`,
  },
};
