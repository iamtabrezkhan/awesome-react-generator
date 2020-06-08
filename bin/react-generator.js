#!/usr/bin/env node

const yargs = require("yargs");
yargs
  .usage("Usage: $0 <command> [options]")
  .command(require("../lib/commands/component"))
  .alias("h", "help")
  .demandCommand()
  .recommendCommands()
  .strict()
  .help().argv;
