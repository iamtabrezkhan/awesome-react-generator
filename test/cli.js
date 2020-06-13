const utils = require("../lib/utils");
const rg = "../../bin/react-generator.js";
const { spawnSync } = require("child_process");
const chai = require("chai");
const { assert, expect } = chai;
const should = chai.should();

// Chai plugins
const deepEqualInAnyOrder = require("deep-equal-in-any-order");

chai.use(deepEqualInAnyOrder);

const tempDir = "test/temp";

before("create temp folder", () => {
  utils.createFolder("test", "temp");
});

describe("component command", () => {
  // ========================================
  const componentName = "hello-world";
  const pascalName = utils.kebabCaseToPascalCase(componentName);
  const componentFileName = `${pascalName}.js`;
  const cssFileNameNormal = `${pascalName}.css`;
  const cssFileNameModular = `${pascalName}.module.css`;
  const testFileName = `${pascalName}.test.js`;
  // ========================================
  describe(`rg c rfc ${componentName}`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync("node", [rg, "c", "rfc", componentName], {
        cwd: tempDir,
      });
      const tempContents = utils.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = utils.getDirContents(
        `${tempDir}/${pascalName}`
      );
      assert.equal(componentContents.length, 2);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync("node", [rg, "c", "rfc", componentName], {
        cwd: tempDir,
      });
      const tempContents = utils.getDirContents(tempDir);
      assert.deepEqual(tempContents, [pascalName]);
      const componentContents = utils.getDirContents(
        `${tempDir}/${pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        componentFileName,
        cssFileNameNormal,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfc ${componentName} --css modular`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfc", componentName, "--css", "modular"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = utils.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = utils.getDirContents(
        `${tempDir}/${pascalName}`
      );
      assert.equal(componentContents.length, 2);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfc", componentName, "--css", "modular"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = utils.getDirContents(tempDir);
      assert.deepEqual(tempContents, [pascalName]);
      const componentContents = utils.getDirContents(
        `${tempDir}/${pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        componentFileName,
        cssFileNameModular,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfc ${componentName} --test`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfc", componentName, "--test"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = utils.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = utils.getDirContents(
        `${tempDir}/${pascalName}`
      );
      assert.equal(componentContents.length, 3);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfc", componentName, "--test"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = utils.getDirContents(tempDir);
      assert.deepEqual(tempContents, [pascalName]);
      const componentContents = utils.getDirContents(
        `${tempDir}/${pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        componentFileName,
        cssFileNameNormal,
        testFileName,
      ]);
    });
  });
});

after("remove temp folder", () => {
  utils.removeFolder("test", "temp");
});
