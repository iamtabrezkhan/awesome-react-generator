const ReactGenerator = require("../..");
const utils = require("../utils");
const path = require("path");

class ComponentCommand extends ReactGenerator {
  constructor() {
    super();
    this.initializeTasks(this.runner);
  }
  initializeTasks(runner) {
    // =================================================
    // ============== component task ===================
    runner.task("component", (done) => {
      runner.task("component:init", (initDone) => {
        console.log("");
        const { fileName, template } = runner.data;
        const pascalCaseName = utils.kebabCaseToPascalCase(fileName);
        const { cssType, cwd, css, ext } = runner.get("options");
        let templateAfterAddingName = utils.setComponentName(
          template,
          pascalCaseName
        );
        const i = templateAfterAddingName.indexOf("\n");
        const firstLine = templateAfterAddingName.substring(0, i + 1);
        const rest = templateAfterAddingName.substring(i + 1);
        let importCssLine = `import "./${pascalCaseName}.${css}";\n`;
        if (cssType === "modular") {
          importCssLine = `import styles from "./${pascalCaseName}.module.${css}";\n`;
        }
        templateAfterAddingName = firstLine + importCssLine + rest;
        runner.set({
          folderName: pascalCaseName,
          folderDest: utils.resolvePath(cwd),
          fileName: pascalCaseName,
          fileDest: path.join(utils.resolvePath(cwd), pascalCaseName),
          fileData: templateAfterAddingName,
          ext: `.${ext}`,
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
        const { css, cssType } = runner.get("options");
        let ext = `.${css}`;
        runner.set({
          ext: cssType === "modular" ? `.module${ext}` : ext,
          fileData: "",
        });
        runner.run(["create:file"], (err) => {
          if (err) throw err;
          cssDone();
        });
      });
      runner.task("component:test", (testDone) => {
        const { testExt } = runner.get("options");
        let ext = `.${testExt.replace("-", ".")}`;
        runner.set("templateName", "det");
        runner.run("get:template", (err) => {
          if (err) throw err;
          runner.set({
            ext: ext,
            fileData: runner.get("template"),
          });
          runner.run(["create:file"], (err) => {
            if (err) throw err;
            testDone();
          });
        });
      });
      const { test } = runner.get("options");
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
  }
}

module.exports = ComponentCommand;
