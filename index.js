const utils = require("./lib/utils");
const Runner = require("awesome-task-runner");
const path = require("path");
const colors = require("ansi-colors");

class ReactGenerator {
  constructor() {
    this.runner = new Runner({ silent: true });
    this.initializeGeneralTasks(this.runner);
  }
  initializeGeneralTasks(runner) {
    // ============== general tasks ====================
    runner.task("get:template", function (done) {
      const templateName = runner.get("templateName");
      const template = utils.getTemplate(templateName);
      runner.set({ template });
      done();
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

  initializeData(data) {
    this.runner.set(data);
  }

  run(task) {
    this.runner.run(["get:template", task, "clean"], (err) => {
      if (err) return console.log(err);
    });
  }
}

module.exports = ReactGenerator;
