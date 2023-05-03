// no es palabra reservada 'callback'
const callback = "hola";
console.log(callback);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const array3 = array.map(function (item) {
  return item * 2;
});

const array1 = ["a", "b", "c"];

array.map((item) => console.log(item * 2));

for (let i = 0; i < array1.length; i++) {
  console.log(array1[i] * 2);
}
array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// =========================================================

const carrito = [
  { nombre: "disco", precio: 3, cantidad: 1 },
  { nombre: "notebook", precio: 5, cantidad: 2 },
  { nombre: "papel", precio: 7, cantidad: 3 },
];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = carrito.reduce((accumulator, currentValue) => {
  console.log("accumulator", accumulator);
  console.log("que hay en current value? ", currentValue);
  return accumulator + currentValue.precio * currentValue.cantidad;
}, initialValue);

console.log(sumWithInitial);
// Expected output: 10

// =========================================================

// set time out ejemplo
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");
