const utils = require("./lib/utils");
const Runner = require("awesome-task-runner");
const colors = require("ansi-colors");

class ReactGenerator {
  constructor() {
    this.runner = new Runner({ silent: true });
    this.initializeGeneralTasks(this.runner);
  }
  initializeGeneralTasks(runner) {
    // ============== general tasks ====================
    runner.task("clean", done => {
      runner.clear();
      done();
    });
    runner.task("create:folder", done => {
      const { folderDest } = runner.data;
      const didCreateFolder = utils.createFolder(folderDest);
      if (!didCreateFolder) {
        throw new Error(colors.redBright(`Already exists: ${folderDest}\n`));
      }
      console.log(colors.greenBright(`Created: ${folderDest}`));
      done();
    });
    runner.task("render:file", done => {
      const { filePath, fileDest } = runner.data;
      const { componentPascalName, options } = runner.data;
      utils
        .renderFile(
          filePath,
          { componentName: componentPascalName, ...options },
          fileDest
        )
        .then(destPath => {
          console.log(colors.greenBright(`Created: ${destPath}`));
          done();
        })
        .catch(err => {
          throw err;
        });
    });
  }

  initializeData(data) {
    this.runner.set(data);
  }

  run(task) {
    this.runner.run([task, "clean"], err => {
      if (err) return console.log(err);
    });
  }
}

module.exports = ReactGenerator;
