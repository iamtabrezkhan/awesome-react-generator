const utils = require("./lib/utils");
const Runner = require("awesome-task-runner");
const path = require("path");
const colors = require("ansi-colors");

class ReactGenerator {
  constructor() {
    this.runner = new Runner({ silent: true });
    this.initTasks(this.runner);
  }
  run(task, data) {
    this.runner.set(data);
    this.runner.run(["get:template", task, "clean"], (err) => {
      if (err) return console.log(err);
    });
  }
  initTasks(runner) {
    // =================================================
    // ============== component task ===================
    runner.task("component", (done) => {
      runner.task("component:init", (initDone) => {
        const { fileName, template } = runner.data;
        const pascalCaseName = utils.kebabCaseToPascalCase(fileName);
        const options = runner.get("options");
        const { css, cwd } = options;
        let templateAfterAddingName = utils.setComponentName(
          template,
          pascalCaseName
        );
        const i = templateAfterAddingName.indexOf("\n");
        const firstLine = templateAfterAddingName.substring(0, i + 1);
        const rest = templateAfterAddingName.substring(i + 1);
        let importCssLine = `import Classes from "./${pascalCaseName}.css";\n`;
        if (css === "modular") {
          importCssLine = `import Classes from "./${pascalCaseName}.module.css";\n`;
        }
        templateAfterAddingName = firstLine + importCssLine + rest;
        runner.set({
          folderName: pascalCaseName,
          folderDest: utils.resolvePath(cwd),
          fileName: pascalCaseName,
          fileDest: path.join(utils.resolvePath(cwd), pascalCaseName),
          fileData: templateAfterAddingName,
          ext: ".js",
        });
        initDone();
      });
      runner.task("component:folder", (folderDone) => {
        runner.run("create:folder", (err) => {
          if (err) throw err;
          folderDone();
        });
      });
      runner.task("component:file", (fileDone) => {
        runner.run("create:file", (err) => {
          if (err) throw err;
          fileDone();
        });
      });
      runner.task("component:css", (cssDone) => {
        const options = runner.get("options");
        const { css } = options;
        runner.set({
          ext: css === "modular" ? ".module.css" : ".css",
          fileData: "",
        });
        runner.run(["create:file"], (err) => {
          if (err) throw err;
          cssDone();
        });
      });
      runner.task("component:test", (testDone) => {
        runner.set({
          ext: ".test.js",
          fileData: "",
        });
        runner.run(["create:file"], (err) => {
          if (err) throw err;
          testDone();
        });
      });
      const options = runner.get("options");
      const { test } = options;
      const tasks = [
        "component:init",
        "component:folder",
        "component:file",
        "component:css",
      ];
      if (test) {
        tasks.push("component:test");
      }
      runner.run(tasks, (err) => {
        if (err) throw err;
        done();
      });
    });
    // =================================================

    // =================================================

    // ============== general tasks ====================
    runner.task("get:template", function (cb) {
      const templateName = runner.get("templateName");
      const template = utils.getTemplate(templateName);
      runner.set({ template });
      cb();
    });
    runner.task("clean", (done) => {
      runner.clear();
      done();
    });
    runner.task("create:folder", (done) => {
      const { folderName, folderDest } = runner.data;
      utils.createFolder(folderDest, folderName);
      console.log(
        colors.greenBright(`Created: ${path.join(folderDest, folderName)}`)
      );
      done();
    });
    runner.task("create:file", (done) => {
      const { fileName, fileDest, fileData, ext } = runner.data;
      utils.createFile(fileDest, `${fileName}${ext}`, fileData);
      console.log(
        colors.greenBright(`Created: ${path.join(fileDest, fileName + ext)}`)
      );
      done();
    });
  }
}

module.exports = ReactGenerator;
