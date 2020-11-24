const ReactGenerator = require("../..");
const utils = require("../utils");
const path = require("path");

const COMPONENT_FILE = "componentFile.js";
const CSS_FILE = "cssFile.js";
const TEST_FILE = "testFile.js";

class ComponentCommand extends ReactGenerator {
  constructor() {
    super();
    this.initializeTasks(this.runner);
  }
  initializeTasks(runner) {
    // =================================================
    // ============== component task ===================
    runner.task("component", done => {
      runner.task("component:init", initDone => {
        console.log("");
        const { componentType, componentName, options } = runner.data;
        const { templateDir = "", cwd } = options;
        const currentWorkingDir = utils.resolvePath(cwd);
        let completeTemplatePath = path.join(cliTemplatesPath, componentType);
        if (templateDir && typeof templateDir === "string") {
          completeTemplatePath = path.join(appRoot, templateDir, componentType);
        }
        if (!utils.ifExist(completeTemplatePath)) {
          completeTemplatePath = path.join(cliTemplatesPath, componentType);
        }
        const componentPascalName = utils.kebabCaseToPascalCase(componentName);
        let templateFiles = utils.getDirContents(completeTemplatePath);
        const componentFolderDest = path.join(
          currentWorkingDir,
          componentPascalName
        );
        runner.set({
          componentPascalName,
          templateFiles,
          completeTemplatePath,
          componentFolderDest,
          currentWorkingDir,
        });
        initDone();
      });
      runner.task("component:folder", folderDone => {
        const { currentWorkingDir, componentPascalName } = runner.data;
        runner.set({
          folderDest: path.join(currentWorkingDir, componentPascalName),
        });
        runner.run("create:folder", err => {
          if (err) throw err;
          folderDone();
        });
      });
      runner.task("component:file", fileDone => {
        const {
          completeTemplatePath,
          componentPascalName,
          templateFiles,
          options,
          componentFolderDest,
          componentType,
        } = runner.data;
        const { css, ext, test, testExt } = options;
        // ======= ======= =======
        if (!templateFiles.includes(COMPONENT_FILE)) {
          const filePath = path.join(
            cliTemplatesPath,
            componentType,
            COMPONENT_FILE
          );
          if (utils.ifExist(filePath)) {
            const dest = path.join(
              componentFolderDest,
              `${componentPascalName}.${ext}`
            );
            runner.set({
              filePath,
              fileDest: dest,
            });
            runner.run("render:file", err => {
              if (err) {
                throw err;
              }
            });
          }
        }
        if (!templateFiles.includes(CSS_FILE)) {
          const filePath = path.join(cliTemplatesPath, componentType, CSS_FILE);
          if (utils.ifExist(filePath)) {
            const dest = path.join(
              componentFolderDest,
              `${componentPascalName}.${css}`
            );
            runner.set({
              filePath,
              fileDest: dest,
            });
            runner.run("render:file", err => {
              if (err) {
                throw err;
              }
            });
          }
        }
        if (!templateFiles.includes(TEST_FILE) && test === true) {
          const filePath = path.join(
            cliTemplatesPath,
            componentType,
            TEST_FILE
          );
          if (utils.ifExist(filePath)) {
            const dest = path.join(
              componentFolderDest,
              `${componentPascalName}.${testExt.split("-").join(".")}`
            );
            runner.set({
              filePath,
              fileDest: dest,
            });
            runner.run("render:file", err => {
              if (err) {
                throw err;
              }
            });
          }
        }
        // ======= ======= =======
        for (const file of templateFiles) {
          const filePath = path.join(completeTemplatePath, file);
          let dest = path.join(componentFolderDest, file);
          switch (file) {
            case COMPONENT_FILE:
              dest = path.join(
                componentFolderDest,
                `${componentPascalName}.${ext}`
              );
              break;
            case CSS_FILE:
              dest = path.join(
                componentFolderDest,
                `${componentPascalName}.${css}`
              );
              break;
            case TEST_FILE:
              dest = path.join(
                componentFolderDest,
                `${componentPascalName}.${testExt.split("-").join(".")}`
              );
              break;
          }
          if (file === TEST_FILE && test === false) {
            continue;
          }
          runner.set({
            filePath,
            fileDest: dest,
          });
          runner.run("render:file", err => {
            if (err) {
              throw err;
            }
          });
        }
      });
      const tasks = ["component:init", "component:folder", "component:file"];
      runner.run(tasks, err => {
        if (err) throw err;
        done();
      });
    });
    // ==================================================
  }
}

module.exports = ComponentCommand;
