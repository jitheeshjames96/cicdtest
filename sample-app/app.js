const express = require("express");
const os = require("os");
const bcrypt = require("bcrypt");

const app = express();

app.get("/", async (req, res) => {
  const hash = await bcrypt.hash("demo", 10);

  res.json({
    status: "running",
    arch: os.arch(),
    platform: os.platform(),
    cpu: os.cpus()[0].model,
    hash_sample: hash
  });
});

app.get("/health", (req, res) => res.send("OK"));

app.get("/build-info", (req, res) => {
  res.send(require("fs").readFileSync("./build-info.txt", "utf8"));
});

app.listen(3001, () => console.log("App running"));

