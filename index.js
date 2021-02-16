#!/usr/bin/env node

import program from "commander";
import { initInPath } from "./src/init.js";

program
  .version("1.0.0", "-v, --version")
  .command("init <path>")
  .description("initialize your meet config")
  .action(function (path) {
    initInPath(path);
  });

program.parse(process.argv);
