const fs = require("fs");

function write(array) {
  const data = JSON.stringify(array);
  fs.writeFileSync("./data.json", data);
}

module.exports = { write };