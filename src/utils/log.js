// const chalkPipe = require("chalk-pipe");
// import * as chalkPipe from "chalk-pipe";
import chalkPipe from "chalk-pipe";
import logSymbols from "log-symbols";
import Logger from "cute-logger";
import dayjs from "dayjs";

Logger.getDate = function () {
  return `[${dayjs().format("YYYY/MM/DD HH:mm:ss")}]`;
};

export const log = Logger;

// const link = chalkPipe("blue.underline");
// const error = chalkPipe("bgRed.#cccccc");
// const warning = chalkPipe("orange.bold");

// exports.link = link;
// exports.error = error;
// exports.warn = warning;
