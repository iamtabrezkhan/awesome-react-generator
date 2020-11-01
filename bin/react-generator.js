#!/usr/bin/env node

const path = require("path");
const yargs = require("yargs");
const { findProjectRoot } = require("../lib/utils");

// ===============================================
// ================= GLOBALS =====================
global.appRoot = findProjectRoot(process.cwd());
global.cliRoot = path.resolve(__dirname, "..");
global.cliTemplatesPath = path.join(cliRoot, "lib", "templates");
// ===============================================

yargs
  .usage("Usage: $0 <command> [options]")
  .command(require("../lib/commands/component"))
  .alias("h", "help")
  .demandCommand()
  .recommendCommands()
  .strict()
  .help().argv;
