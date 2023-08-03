//   obtener el segundo elemento hijo del elemento con id "parent-id"
//   y asignarle el valor "Hola Mundo Modificado"
const parent = document.getElementById("parent-id");
const child = parent.children[3];
child.innerHTML = "Hola Mundo Modificado";
child.style.color = "red";

const allDataGroupes = document.querySelectorAll("[data-grupo]");

allDataGroupes.forEach(function (item) {
  item.innerHTML = "Hola Mundo foreach";
});
