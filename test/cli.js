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
    // ======================================
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
  // ========================================
  describe(`rg c rcc ${componentName}`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    // ======================================
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync("node", [rg, "c", "rcc", componentName], {
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
      const nodeProcess = spawnSync("node", [rg, "c", "rcc", componentName], {
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
  describe(`rg c rcc ${componentName} --css modular`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rcc", componentName, "--css", "modular"],
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
        [rg, "c", "rcc", componentName, "--css", "modular"],
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
  describe(`rg c rcc ${componentName} --test`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rcc", componentName, "--test"],
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
        [rg, "c", "rcc", componentName, "--test"],
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
  // ========================================
  describe(`rg c rfcp ${componentName}`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    // ======================================
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync("node", [rg, "c", "rfcp", componentName], {
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
      const nodeProcess = spawnSync("node", [rg, "c", "rfcp", componentName], {
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
  describe(`rg c rfcp ${componentName} --css modular`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcp", componentName, "--css", "modular"],
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
        [rg, "c", "rfcp", componentName, "--css", "modular"],
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
  describe(`rg c rfcp ${componentName} --test`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rfcp", componentName, "--test"],
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
        [rg, "c", "rfcp", componentName, "--test"],
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
  // ========================================
  describe(`rg c rafc ${componentName}`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    // ======================================
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync("node", [rg, "c", "rafc", componentName], {
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
      const nodeProcess = spawnSync("node", [rg, "c", "rafc", componentName], {
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
  describe(`rg c rafc ${componentName} --css modular`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafc", componentName, "--css", "modular"],
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
        [rg, "c", "rafc", componentName, "--css", "modular"],
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
  describe(`rg c rafc ${componentName} --test`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafc", componentName, "--test"],
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
        [rg, "c", "rafc", componentName, "--test"],
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
  // ========================================
  describe(`rg c rafcp ${componentName}`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    // ======================================
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync("node", [rg, "c", "rafcp", componentName], {
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
      const nodeProcess = spawnSync("node", [rg, "c", "rafcp", componentName], {
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
  describe(`rg c rafcp ${componentName} --css modular`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafcp", componentName, "--css", "modular"],
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
        [rg, "c", "rafcp", componentName, "--css", "modular"],
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
  describe(`rg c rafcp ${componentName} --test`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafcp", componentName, "--test"],
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
        [rg, "c", "rafcp", componentName, "--test"],
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
  // ========================================
  describe(`rg c rafcredux ${componentName}`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
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
        [rg, "c", "rafcredux", componentName],
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
      ]);
    });
  });
    // ========================================
  describe(`rg c rafcredux ${componentName} --css modular`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafcredux", componentName, "--css", "modular"],
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
        [rg, "c", "rafcredux", componentName, "--css", "modular"],
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
  describe(`rg c rafcredux ${componentName} --test`, () => {
    afterEach(() => {
      utils.removeFolder(tempDir, pascalName);
    });
    it("should create correct number of files/folders", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "c", "rafcredux", componentName, "--test"],
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
        [rg, "c", "rafcredux", componentName, "--test"],
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
