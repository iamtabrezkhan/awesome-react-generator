const support = require("../support/utils");
const utils = require("../../lib/utils");
const rg = "../../bin/react-generator.js";
const { spawnSync } = require("child_process");
const chai = require("chai");
const { assert, expect } = chai;
const should = chai.should();
const { fileNames } = require("../support/constants");

// Chai plugins
const deepEqualInAnyOrder = require("deep-equal-in-any-order");

chai.use(deepEqualInAnyOrder);

const tempDir = "test/rfcredux";

describe("component command", () => {
  before("create temp folder", () => {
    utils.createFolder("test", "rfcredux");
  });
  // ========================================
  // ========================================
  describe(`rg c rfcredux ${fileNames.component.name}`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, fileNames.component.pascalName);
    });
    // ======================================
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcredux", fileNames.component.name],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = support.getDirContents(
        `${tempDir}/${fileNames.component.pascalName}`
      );
      assert.equal(componentContents.length, 2);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcredux", fileNames.component.name],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.deepEqual(tempContents, [fileNames.component.pascalName]);
      const componentContents = support.getDirContents(
        `${tempDir}/${fileNames.component.pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        fileNames.component.js,
        fileNames.css.normal,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfcredux ${fileNames.component.name} --cssType modular`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, fileNames.component.pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcredux", fileNames.component.name, "--cssType", "modular"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = support.getDirContents(
        `${tempDir}/${fileNames.component.pascalName}`
      );
      assert.equal(componentContents.length, 2);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcredux", fileNames.component.name, "--cssType", "modular"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.deepEqual(tempContents, [fileNames.component.pascalName]);
      const componentContents = support.getDirContents(
        `${tempDir}/${fileNames.component.pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        fileNames.component.js,
        fileNames.css.modular,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfcredux ${fileNames.component.name} --test`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, fileNames.component.pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcredux", fileNames.component.name, "--test"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = support.getDirContents(
        `${tempDir}/${fileNames.component.pascalName}`
      );
      assert.equal(componentContents.length, 3);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcredux", fileNames.component.name, "--test"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.deepEqual(tempContents, [fileNames.component.pascalName]);
      const componentContents = support.getDirContents(
        `${tempDir}/${fileNames.component.pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        fileNames.component.js,
        fileNames.css.normal,
        fileNames.test.js,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfcredux ${fileNames.component.name} --test --testExt test-tsx`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, fileNames.component.pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [
          rg,
          "c",
          "rfcredux",
          fileNames.component.name,
          "--test",
          "--testExt",
          "test-tsx",
        ],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = support.getDirContents(
        `${tempDir}/${fileNames.component.pascalName}`
      );
      assert.equal(componentContents.length, 3);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [
          rg,
          "c",
          "rfcredux",
          fileNames.component.name,
          "--test",
          "--testExt",
          "test-tsx",
        ],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.deepEqual(tempContents, [fileNames.component.pascalName]);
      const componentContents = support.getDirContents(
        `${tempDir}/${fileNames.component.pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        fileNames.component.js,
        fileNames.css.normal,
        fileNames.test.tsx,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfcredux ${fileNames.component.name} --test --testExt spec-js`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, fileNames.component.pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [
          rg,
          "c",
          "rfcredux",
          fileNames.component.name,
          "--test",
          "--testExt",
          "spec-js",
        ],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = support.getDirContents(
        `${tempDir}/${fileNames.component.pascalName}`
      );
      assert.equal(componentContents.length, 3);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [
          rg,
          "c",
          "rfcredux",
          fileNames.component.name,
          "--test",
          "--testExt",
          "spec-js",
        ],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.deepEqual(tempContents, [fileNames.component.pascalName]);
      const componentContents = support.getDirContents(
        `${tempDir}/${fileNames.component.pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        fileNames.component.js,
        fileNames.css.normal,
        fileNames.test.specJs,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfcredux ${fileNames.component.name} --test --testExt spec-tsx`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, fileNames.component.pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [
          rg,
          "c",
          "rfcredux",
          fileNames.component.name,
          "--test",
          "--testExt",
          "spec-tsx",
        ],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = support.getDirContents(
        `${tempDir}/${fileNames.component.pascalName}`
      );
      assert.equal(componentContents.length, 3);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [
          rg,
          "c",
          "rfcredux",
          fileNames.component.name,
          "--test",
          "--testExt",
          "spec-tsx",
        ],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.deepEqual(tempContents, [fileNames.component.pascalName]);
      const componentContents = support.getDirContents(
        `${tempDir}/${fileNames.component.pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        fileNames.component.js,
        fileNames.css.normal,
        fileNames.test.specTsx,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfcredux ${fileNames.component.name} --ext jsx`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, fileNames.component.pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcredux", fileNames.component.name, "--ext", "jsx"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = support.getDirContents(
        `${tempDir}/${fileNames.component.pascalName}`
      );
      assert.equal(componentContents.length, 2);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcredux", fileNames.component.name, "--ext", "jsx"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.deepEqual(tempContents, [fileNames.component.pascalName]);
      const componentContents = support.getDirContents(
        `${tempDir}/${fileNames.component.pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        fileNames.component.jsx,
        fileNames.css.normal,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfcredux ${fileNames.component.name} --ext tsx`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, fileNames.component.pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcredux", fileNames.component.name, "--ext", "tsx"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
      const componentContents = support.getDirContents(
        `${tempDir}/${fileNames.component.pascalName}`
      );
      assert.equal(componentContents.length, 2);
    });
    it("should create correct name of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcredux", fileNames.component.name, "--ext", "tsx"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.deepEqual(tempContents, [fileNames.component.pascalName]);
      const componentContents = support.getDirContents(
        `${tempDir}/${fileNames.component.pascalName}`
      );
      expect(componentContents).to.deep.equalInAnyOrder([
        fileNames.component.tsx,
        fileNames.css.normal,
      ]);
    });
  });
  after("remove temp folder", () => {
    support.removeFolder("test", "rfcredux");
  });
});
