const { read } = require("./crud/read");
const { create } = require("./crud/create");
const { update, update2 } = require("./crud/update");
const { deleteTitle } = require("./crud/delete");
const { find } = require("./crud/find");
const { list } = require("./crud/list");
const { returnDescription } = require("./crud/return");

const data = process.argv;

const comand = (comando, param1, param2) => {
  switch (comando) {
    case "read":
      console.log(read());
      break;
    case "create":
      create(param1, param2);
      break;
    case "update":
      // update(param1, param2)
      update2(param1, param2);
      break;
    case "delete":
      deleteTitle(param1);
      break;
    case "find":
      console.log(find(param1));
      break;
    case "list":
      console.log(list());
      break;
    case "return":
      console.log(returnDescription(param1));
      break;
    default:
      console.log("no se encontró ningun comando que coincida");
      break;
  }
};

comand(data[2], data[3], data[4]);
