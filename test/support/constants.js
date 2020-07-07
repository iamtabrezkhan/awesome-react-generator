const utils = require("../../lib/utils");

const componentName = "hello-world";
const pascalName = utils.kebabCaseToPascalCase(componentName);
const privateRoute = "PrivateRoute";
exports.fileNames = {
  component: {
    name: componentName,
    pascalName,
    js: `${pascalName}.js`,
    jsx: `${pascalName}.jsx`,
    tsx: `${pascalName}.tsx`,
  },
  route: {
    js: `${privateRoute}.js`,
    jsx: `${privateRoute}.jsx`,
    test: {
      js: `${privateRoute}.test.js`,
      specJs: `${privateRoute}.spec.js`,
    },
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
