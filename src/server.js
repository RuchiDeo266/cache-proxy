#!/usr/bin/env node
import main from "./main.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command(
    "start",
    "start the server",
    {
      port: {
        type: "number",
        demandOption: true,
        describe: "Port to run the server on",
      },
      origin: {
        type: "string",
        demandOption: true,
        describe: "Target origin for the proxy",
      },
    },
    (argv) => {
      const server = new main(argv.port, argv.origin);
      server.start();
    }
  )
  .command(
    "clear",
    "clear the cache",
    {
      "clear-cache": {
        demandOption: false,
        describe: "Clear the cache",
      },
    },
    () => {
      const server = new main();
      server.deleteCache();
    }
  ).argv;
