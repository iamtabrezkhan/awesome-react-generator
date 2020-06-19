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
        componentFileName,
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
        componentFileName,
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
        componentFileName,
        cssFileNameNormal,
        testFileName,
      ]);
    });
  });
  // ========================================
  describe(`rg c rcc ${componentName}`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    // ======================================
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync("node", [rg, "c", "rcc", componentName], {
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
      const nodeProcess = spawnSync("node", [rg, "c", "rcc", componentName], {
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
  describe(`rg c rcc ${componentName} --cssType modular`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rcc", componentName, "--cssType", "modular"],
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
        [rg, "c", "rcc", componentName, "--cssType", "modular"],
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
  describe(`rg c rcc ${componentName} --test`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rcc", componentName, "--test"],
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
        [rg, "c", "rcc", componentName, "--test"],
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
        testFileName,
      ]);
    });
  });
  // ========================================
  describe(`rg c rccp ${componentName}`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    // ======================================
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync("node", [rg, "c", "rccp", componentName], {
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
      const nodeProcess = spawnSync("node", [rg, "c", "rccp", componentName], {
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
  describe(`rg c rccp ${componentName} --cssType modular`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rccp", componentName, "--cssType", "modular"],
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
        [rg, "c", "rccp", componentName, "--cssType", "modular"],
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
  describe(`rg c rccp ${componentName} --test`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rccp", componentName, "--test"],
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
        [rg, "c", "rccp", componentName, "--test"],
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
        testFileName,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfcp ${componentName}`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    // ======================================
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync("node", [rg, "c", "rfcp", componentName], {
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
      const nodeProcess = spawnSync("node", [rg, "c", "rfcp", componentName], {
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
  describe(`rg c rfcp ${componentName} --cssType modular`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcp", componentName, "--cssType", "modular"],
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
        [rg, "c", "rfcp", componentName, "--cssType", "modular"],
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
  describe(`rg c rfcp ${componentName} --test`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcp", componentName, "--test"],
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
        [rg, "c", "rfcp", componentName, "--test"],
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
        testFileName,
      ]);
    });
  });
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
        testFileName,
      ]);
    });
  });
  // ========================================
  describe(`rg c rafcp ${componentName}`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    // ======================================
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync("node", [rg, "c", "rafcp", componentName], {
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
      const nodeProcess = spawnSync("node", [rg, "c", "rafcp", componentName], {
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
  describe(`rg c rafcp ${componentName} --cssType modular`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafcp", componentName, "--cssType", "modular"],
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
        [rg, "c", "rafcp", componentName, "--cssType", "modular"],
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
  describe(`rg c rafcp ${componentName} --test`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafcp", componentName, "--test"],
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
        [rg, "c", "rafcp", componentName, "--test"],
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
        testFileName,
      ]);
    });
  });
  // ========================================
  describe(`rg c rafcredux ${componentName}`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    // ======================================
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafcredux", componentName],
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
        [rg, "c", "rafcredux", componentName],
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
      ]);
    });
  });
  // ========================================
  describe(`rg c rafcredux ${componentName} --cssType modular`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafcredux", componentName, "--cssType", "modular"],
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
        [rg, "c", "rafcredux", componentName, "--cssType", "modular"],
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
  describe(`rg c rafcredux ${componentName} --test`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafcredux", componentName, "--test"],
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
        [rg, "c", "rafcredux", componentName, "--test"],
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
        testFileName,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfcredux ${componentName}`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    // ======================================
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcredux", componentName],
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
        [rg, "c", "rfcredux", componentName],
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
      ]);
    });
  });
  // ========================================
  describe(`rg c rfcredux ${componentName} --cssType modular`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcredux", componentName, "--cssType", "modular"],
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
        [rg, "c", "rfcredux", componentName, "--cssType", "modular"],
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
  describe(`rg c rfcredux ${componentName} --test`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcredux", componentName, "--test"],
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
        [rg, "c", "rfcredux", componentName, "--test"],
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
        testFileName,
      ]);
    });
  });
  // ========================================
  describe(`rg c rfcreduxp ${componentName}`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    // ======================================
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcreduxp", componentName],
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
        [rg, "c", "rfcreduxp", componentName],
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
      ]);
    });
  });
  // ========================================
  describe(`rg c rfcreduxp ${componentName} --cssType modular`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcreduxp", componentName, "--cssType", "modular"],
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
        [rg, "c", "rfcreduxp", componentName, "--cssType", "modular"],
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
  describe(`rg c rfcreduxp ${componentName} --test`, () => {
    afterEach(() => {
      support.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcreduxp", componentName, "--test"],
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
        [rg, "c", "rfcreduxp", componentName, "--test"],
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
        testFileName,
      ]);
    });
  });
});

after("remove temp folder", () => {
  support.removeFolder("test", "temp");
});
