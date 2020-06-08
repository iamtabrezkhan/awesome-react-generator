const utils = require("./lib/utils");
const path = require("path");

class ReactGenerator {
  constructor() {
    const Generate = require("generate");
    this.generate = new Generate();
    this.initTasks(this.generate);
  }
  run = (task, data) => {
    this.generate.cache.data = { ...this.generate.cache.data, ...data };
    this.generate.build(["get:template", task, "clean"], (err) => {
      if (err) return console.log(err);
    });
  };
  initTasks = (generate) => {
    // =================================================
    // ============== component task ===================
    generate.task("component", (done) => {
      const { componentType } = generate.cache.data;
      generate.task("component:init", (initDone) => {
        const { fileName, template } = generate.cache.data;
        const pascalCaseName = utils.kebabCaseToPascalCase(fileName);
        const { css } = generate.cache.data.options;
        let templateAfterAddingName = utils.setComponentName(
          template,
          pascalCaseName
        );
        if (css === "modular") {
          const i = templateAfterAddingName.indexOf("\n");
          const firstLine = templateAfterAddingName.substring(0, i + 1);
          const rest = templateAfterAddingName.substring(i + 1);
          const importCssLine = `import Classes from "./${pascalCaseName}.module.css";\n`;
          templateAfterAddingName = firstLine + importCssLine + rest;
        }
        generate.cache.data = {
          ...generate.cache.data,
          folderName: pascalCaseName,
          folderDest: process.cwd(),
          fileName: pascalCaseName,
          fileDest: path.join(process.cwd(), pascalCaseName),
          fileData: templateAfterAddingName,
          ext: ".js",
        };
        initDone();
      });
      generate.task("component:folder", (folderDone) => {
        generate.build("create:folder", (err) => {
          if (err) throw err;
          folderDone();
        });
      });
      generate.task("component:file", (fileDone) => {
        generate.build("create:file", (err) => {
          if (err) throw err;
          fileDone();
        });
      });
      generate.task("component:css", (cssDone) => {
        const { css } = generate.cache.data.options;
        generate.cache.data = {
          ...generate.cache.data,
          ext: css === "modular" ? ".module.css" : ".css",
          fileData: "",
        };
        generate.build(["create:file"], function (err) {
          if (err) throw err;
          cssDone();
        });
      });
      generate.build(
        [
          "component:init",
          "component:folder",
          "component:file",
          "component:css",
        ],
        (err) => {
          if (err) throw err;
          done();
        }
      );
    });
    // =================================================

    // =================================================

    // ============== general tasks ====================
    generate.task("get:template", function (cb) {
      const { templateName } = generate.cache.data;
      const template = utils.getTemplate(templateName);
      generate.cache.data = { ...generate.cache.data, template };
      cb();
    });
    generate.task("clean", (done) => {
      generate.cache.data = {};
      done();
    });
    generate.task("create:folder", (done) => {
      const { folderName, folderDest } = generate.cache.data;
      utils.createFolder(folderDest, folderName);
      done();
    });
    generate.task("create:file", (done) => {
      const { fileName, fileDest, fileData, ext } = generate.cache.data;
      utils.createFile(fileDest, `${fileName}${ext}`, fileData);
      done();
    });
  };
}

module.exports = ReactGenerator;
