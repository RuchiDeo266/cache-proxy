import http from "http";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
const port_number = yargs(hideBin(process.argv)).option("port", {
  type: "number",
  demandOption: true,
  describe: "port number",
}).argv.port;

const options = {
  hostname: "localhost",
  port: port_number,
  path: "/",
  method: "GET",
};

const req = http.request(options, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log("Response from proxy:", data);
  });
});

req.on("error", (error) => {
  console.error("Error with the request:", error.message);
});

req.end();
