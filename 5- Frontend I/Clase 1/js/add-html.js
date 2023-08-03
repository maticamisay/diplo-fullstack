const body = document.querySelector("body");
const div = document.createElement("div");
div.setAttribute("class", "div-id");
div.innerHTML = "Hola Mundo desde JS";

body.appendChild(div);

let array = ["Hola", "Mundo", "desde", "JS"];

console.log(array);
