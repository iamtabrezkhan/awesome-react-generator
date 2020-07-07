#!/usr/bin/env node

const yargs = require("yargs");
yargs
  .usage("Usage: $0 <command> [options]")
  .command(require("../lib/commands/component"))
  .command(require("../lib/commands/route"))
  .alias("h", "help")
  .demandCommand()
  .recommendCommands()
  .strict()
  .help().argv;
