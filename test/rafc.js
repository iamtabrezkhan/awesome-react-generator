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

const tempDir = "test/rafc";

before("create temp folder", () => {
  utils.createFolder("test", "rafc");
});

describe("component command", () => {
  // ========================================
  const componentName = "hello-world";
  const pascalName = utils.kebabCaseToPascalCase(componentName);
  const componentFileName = `${pascalName}.js`;
  const componentFileNameJSX = `${pascalName}.jsx`;
  const cssFileNameNormal = `${pascalName}.css`;
  const cssFileNameModular = `${pascalName}.module.css`;
  const testFileNameJS = `${pascalName}.test.js`;
  const testFileNameTSX = `${pascalName}.test.tsx`;
  const specFileNameJS = `${pascalName}.spec.js`;
  const specFileNameTSX = `${pascalName}.spec.tsx`;
  // ========================================
  describe(`rg c rafc ${componentName}`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    // ======================================
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync("node", [rg, "c", "rafc", componentName], {
        cwd: tempDir,
      });
      console.log(`STDOUT: ${nodeProcess.stdout}`);
      console.log(`STDERR: ${nodeProcess.stderr}`);
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = support.getDirContents(
        `${tempDir}/${pascalName}`
      );
      assert.equal(componentContents.length, 2);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync("node", [rg, "c", "rafc", componentName], {
        cwd: tempDir,
      });
      const tempContents = support.getDirContents(tempDir);
      assert.deepEqual(tempContents, [pascalName]);
      const componentContents = support.getDirContents(
        `${tempDir}/${pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        componentFileName,
        cssFileNameNormal,
      ]);
    });
  });
  // ========================================
  describe(`rg c rafc ${componentName} --cssType modular`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafc", componentName, "--cssType", "modular"],
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
        [rg, "c", "rafc", componentName, "--cssType", "modular"],
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
        componentFileName,
        cssFileNameModular,
      ]);
    });
  });
  // ========================================
  describe(`rg c rafc ${componentName} --test`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafc", componentName, "--test"],
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
        [rg, "c", "rafc", componentName, "--test"],
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
        componentFileName,
        cssFileNameNormal,
        testFileNameJS,
      ]);
    });
  });
  // ========================================
  describe(`rg c rafc ${componentName} --test --testExt test-tsx`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafc", componentName, "--test", "--testExt", "test-tsx"],
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
        [rg, "c", "rafc", componentName, "--test", "--testExt", "test-tsx"],
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
        componentFileName,
        cssFileNameNormal,
        testFileNameTSX,
      ]);
    });
  });
  // ========================================
  describe(`rg c rafc ${componentName} --test --testExt spec-js`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafc", componentName, "--test", "--testExt", "spec-js"],
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
        [rg, "c", "rafc", componentName, "--test", "--testExt", "spec-js"],
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
        componentFileName,
        cssFileNameNormal,
        specFileNameJS,
      ]);
    });
  });
  // ========================================
  describe(`rg c rafc ${componentName} --test --testExt spec-tsx`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafc", componentName, "--test", "--testExt", "spec-tsx"],
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
        [rg, "c", "rafc", componentName, "--test", "--testExt", "spec-tsx"],
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
        componentFileName,
        cssFileNameNormal,
        specFileNameTSX,
      ]);
    });
  });
  // ========================================
  describe(`rg c rafc ${componentName} --ext jsx`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafc", componentName, "--ext", "jsx"],
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
        [rg, "c", "rafc", componentName, "--ext", "jsx"],
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
});

after("remove temp folder", () => {
  support.removeFolder("test", "rafc");
});
