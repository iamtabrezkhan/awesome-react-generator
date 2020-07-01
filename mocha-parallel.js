// https://gist.github.com/msyea/c402de0c01e2de837153b2fa5e751f9f#file-mocha-parallel-js

const { promisify } = require("util");
const { spawn } = require("child_process");

const originalGlob = require("glob");
const { loadOptions } = require("mocha/lib/cli/options");
const unparse = require("yargs-unparser");
const { aliases } = require("mocha/lib/cli/run-option-metadata");

const mochaPath = require.resolve("mocha/bin/_mocha");

const glob = promisify(originalGlob);

const getMochaArgs = (path) => {
  if (!Array.isArray(path)) {
    path = [path];
  }
  const mochaArgs = loadOptions([...path, "--timeout", "30000"]);
  return [].concat(mochaPath, unparse(mochaArgs, { alias: aliases }));
};

const children = [];

const runTests = (testFile) =>
  new Promise((resolve, reject) => {
    const child = spawn(process.execPath, getMochaArgs(testFile), {
      env: {
        NODE_ENV: "test",
      },
    });

    children.push(child);

    child.stdout.on("data", (data) => {
      const line = data.toString().trim();
      if (line) {
        console.log(`${testFile}: ${line}`);
      }
    });

    child.stderr.on("data", (data) => {
      const line = data.toString().trim();
      if (line) {
        console.error(`${testFile}: ${line}`);
      }
    });

    child.on("exit", (code, signal) => {
      const index = children.indexOf(child);
      if (index !== -1) {
        children.splice(index, 1);
      }
      if (code || signal) {
        reject(new Error(`something bad happened ${code || signal}`));
      } else {
        resolve();
      }
    });
  });

glob("test/**/*.js")
  .then((testFiles) => {
    return Promise.all(testFiles.map(runTests));
  })
  .then(() => {
    console.log("all tests pass");
    process.exit(0);
  })
  .catch((err) => {
    console.error("some tests failed", err);
    process.exit(1);
  });

// terminate children.
process.on("SIGINT", () => {
  children.forEach((child) => {
    child.kill("SIGINT"); // calls runner.abort()
    child.kill("SIGTERM"); // if that didn't work, we're probably in an infinite loop, so make it die.
  });
});
