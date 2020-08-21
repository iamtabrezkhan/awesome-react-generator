const ReactGenerator = require("../..");
const utils = require("../utils");
const path = require("path");

class RouteCommand extends ReactGenerator {
  constructor() {
    super();
    this.initializeTasks(this.runner);
  }
  initializeTasks(runner) {
    // =================================================
    // ============== route task ===================
    runner.task("route", (done) => {
      runner.task("route:init", (initDone) => {
        const { fileName, template } = runner.data;
        const pascalCaseName = utils.kebabCaseToPascalCase(fileName);
        const { cwd, ext } = runner.get("options");
        let templateAfterAddingName = utils.setComponentName(
          template,
          pascalCaseName
        );
        runner.set({
          fileName: pascalCaseName,
          fileDest: path.join(utils.resolvePath(cwd)),
          fileData: templateAfterAddingName,
          ext: `.${ext}`,
        });
        initDone();
      });
      runner.task("route:file", (fileDone) => {
        runner.run("create:file", (err) => {
          if (err) throw err;
          fileDone();
        });
      });
      runner.task("route:test", (testDone) => {
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
      const tasks = ["route:init", "route:file"];
      if (test) {
        tasks.push("route:test");
      }
      runner.run(tasks, (err) => {
        if (err) throw err;
        done();
      });
    });
    // =================================================
  }
}

module.exports = RouteCommand;
