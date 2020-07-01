const support = require("./support/utils");
const utils = require("../lib/utils");
const rg = "../../bin/react-generator.js";
const { spawnSync } = require("child_process");
const chai = require("chai");
const { assert, expect } = chai;
const should = chai.should();

// Chai plugins
const deepEqualInAnyOrder = require("deep-equal-in-any-order");

chai.use(deepEqualInAnyOrder);

const tempDir = "test/rfc";

describe("component command", () => {
  before("create temp folder", () => {
    utils.createFolder("test", "rfc");
  });
  // ========================================
  const componentName = "hello-world";
  const pascalName = utils.kebabCaseToPascalCase(componentName);
  const componentFileNameJS = `${pascalName}.js`;
  const componentFileNameJSX = `${pascalName}.jsx`;
  const componentFileNameTS = `${pascalName}.ts`;
  const componentFileNameTSX = `${pascalName}.tsx`;
  const cssFileNameNormal = `${pascalName}.css`;
  const cssFileNameModular = `${pascalName}.module.css`;
  const testFileNameJS = `${pascalName}.test.js`;
  const testFileNameTSX = `${pascalName}.test.tsx`;
  const specFileNameJS = `${pascalName}.spec.js`;
  const specFileNameTSX = `${pascalName}.spec.tsx`;
  // ========================================
  describe(`rg c rfc ${componentName}`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    // ======================================
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync("node", [rg, "c", "rfc", componentName], {
        cwd: tempDir,
      });
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = support.getDirContents(
        `${tempDir}/${pascalName}`
      );
      assert.equal(componentContents.length, 2);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync("node", [rg, "c", "rfc", componentName], {
        cwd: tempDir,
      });
      const tempContents = support.getDirContents(tempDir);
      assert.deepEqual(tempContents, [pascalName]);
      const componentContents = support.getDirContents(
        `${tempDir}/${pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        componentFileNameJS,
        cssFileNameNormal,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfc ${componentName} --cssType modular`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfc", componentName, "--cssType", "modular"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = support.getDirContents(
        `${tempDir}/${pascalName}`
      );
      assert.equal(componentContents.length, 2);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfc", componentName, "--cssType", "modular"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.deepEqual(tempContents, [pascalName]);
      const componentContents = support.getDirContents(
        `${tempDir}/${pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        componentFileNameJS,
        cssFileNameModular,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfc ${componentName} --test`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfc", componentName, "--test"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = support.getDirContents(
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
      const tempContents = support.getDirContents(tempDir);
      assert.deepEqual(tempContents, [pascalName]);
      const componentContents = support.getDirContents(
        `${tempDir}/${pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        componentFileNameJS,
        cssFileNameNormal,
        testFileNameJS,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfc ${componentName} --ext jsx`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfc", componentName, "--ext", "jsx"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = support.getDirContents(
        `${tempDir}/${pascalName}`
      );
      assert.equal(componentContents.length, 2);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfc", componentName, "--ext", "jsx"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.deepEqual(tempContents, [pascalName]);
      const componentContents = support.getDirContents(
        `${tempDir}/${pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        componentFileNameJSX,
        cssFileNameNormal,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfc ${componentName} --ext ts`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfc", componentName, "--ext", "ts"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = support.getDirContents(
        `${tempDir}/${pascalName}`
      );
      assert.equal(componentContents.length, 2);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfc", componentName, "--ext", "ts"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.deepEqual(tempContents, [pascalName]);
      const componentContents = support.getDirContents(
        `${tempDir}/${pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        componentFileNameTS,
        cssFileNameNormal,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfc ${componentName} --ext tsx`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfc", componentName, "--ext", "tsx"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = support.getDirContents(
        `${tempDir}/${pascalName}`
      );
      assert.equal(componentContents.length, 2);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfc", componentName, "--ext", "tsx"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.deepEqual(tempContents, [pascalName]);
      const componentContents = support.getDirContents(
        `${tempDir}/${pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        componentFileNameTSX,
        cssFileNameNormal,
      ]);
    });
  });
  after("remove temp folder", () => {
    support.removeFolder("test", "rfc");
  });
});
