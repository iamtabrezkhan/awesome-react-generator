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

const tempDir = "test/pr";

describe("route command", () => {
  before("create temp folder", () => {
    utils.createFolder("test", "pr");
  });
  // ========================================
  // ========================================
  describe(`rg r pr`, () => {
    afterEach(() => {
      support.removeFile(`${tempDir}/PrivateRoute.js`);
    });
    it("should create correct number of files", () => {
      const nodeProcess = spawnSync("node", [rg, "r", "pr"], {
        cwd: tempDir,
      });
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
    });
  });
  // ========================================
  describe(`rg r pr --test`, () => {
    afterEach(() => {
      support.removeFile(`${tempDir}/PrivateRoute.js`);
      support.removeFile(`${tempDir}/PrivateRoute.test.js`);
    });
    it("should create correct number of files", () => {
      const nodeProcess = spawnSync("node", [rg, "r", "pr", "--test"], {
        cwd: tempDir,
      });
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 2);
      expect(tempContents).to.deep.equalInAnyOrder([
        fileNames.route.js,
        fileNames.route.test.js,
      ]);
    });
  });
  // ========================================
  describe(`rg r pr --test --testExt spec-js`, () => {
    afterEach(() => {
      support.removeFile(`${tempDir}/PrivateRoute.js`);
      support.removeFile(`${tempDir}/PrivateRoute.spec.js`);
    });
    // ========================================
    it("should create correct number of files", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "r", "pr", "--test", "--testExt", "spec-js"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 2);
      expect(tempContents).to.deep.equalInAnyOrder([
        fileNames.route.js,
        fileNames.route.test.specJs,
      ]);
    });
  });
  // ========================================
  describe(`rg r pr --ext jsx`, () => {
    afterEach(() => {
      support.removeFile(`${tempDir}/PrivateRoute.jsx`);
    });
    it("should create correct number of files", () => {
      const nodeProcess = spawnSync("node", [rg, "r", "pr", "--ext", "jsx"], {
        cwd: tempDir,
      });
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 1);
    });
  });
  // ========================================
  describe(`rg r pr --ext jsx --test`, () => {
    afterEach(() => {
      support.removeFile(`${tempDir}/PrivateRoute.jsx`);
      support.removeFile(`${tempDir}/PrivateRoute.test.js`);
    });
    it("should create correct number of files", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "r", "pr", "--ext", "jsx", "--test"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 2);
      expect(tempContents).to.deep.equalInAnyOrder([
        fileNames.route.jsx,
        fileNames.route.test.js,
      ]);
    });
  });
  // ========================================
  describe(`rg r pr --ext jsx --test --testExt spec-js`, () => {
    afterEach(() => {
      support.removeFile(`${tempDir}/PrivateRoute.jsx`);
      support.removeFile(`${tempDir}/PrivateRoute.spec.js`);
    });
    // ========================================
    it("should create correct number of files", () => {
      const nodeProcess = spawnSync(
        "node",
        [rg, "r", "pr", "--ext", "jsx", "--test", "--testExt", "spec-js"],
        {
          cwd: tempDir,
        }
      );
      const tempContents = support.getDirContents(tempDir);
      assert.equal(tempContents.length, 2);
      expect(tempContents).to.deep.equalInAnyOrder([
        fileNames.route.jsx,
        fileNames.route.test.specJs,
      ]);
    });
  });
  after("remove temp folder", () => {
    support.removeFolder("test", "pr");
  });
});
