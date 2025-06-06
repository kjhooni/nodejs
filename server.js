const express = require("express");
const os = require("os");

const PORT = 7777;

// APP
const app = express();
app.get("/", (req, res) => {
  const hostname = os.hostname();
  res.send(`Hello world from ${hostname}`);
});

app.listen(PORT);
console.log("server is running");
