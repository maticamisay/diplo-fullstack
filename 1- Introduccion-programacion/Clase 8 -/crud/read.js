const fs = require("fs");
const data = fs.readFileSync("./data.json", "utf8");

function read() {
  const dataParsed = JSON.parse(data);
  return dataParsed;
}

module.exports = { read };