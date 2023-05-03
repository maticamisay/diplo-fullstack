function prueba() {
  var a = "hola mundo";
  let b = "como andan";
  const c = "prueba";
  if (true) {
    var a = "hola mundo que tal";
    let b = "como estan chicos";
    console.log(a); // hola mundo que tal
    console.log(b); // como estan chicos
    if (true) {
      const c = "prueba 2";
      console.log(c); // prueba 2
    }
  }
  //   const c = "prueba 2";
  console.log(a); // hola mundo que tal
  console.log(b); // ReferenceError: b is not defined
  console.log(c); // SyntaxError: Identifier 'c' has already been declared
}

// prueba();

const arrayNombres = ["Juan", "Pedro", "Maria", "Jose"];
// const nombre1 = arrayNombres[0];
const [nombre1] = arrayNombres;
// console.log(nombre1);

// array de productos
const productos = [
  {
    id: 1,
    nombre: "Coca Cola",
  },
  {
    id: 2,
    nombre: "Sprite",
  },
  {
    id: 3,
    nombre: "Fanta",
  },
];

function pruebaDestructuring(products) {
  const [producto1, producto2, producto3] = products;
  console.log(producto1);
  console.log(producto2);
  console.log(producto3);
}

// pruebaDestructuring(productos);

const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  ciudad: "Buenos Aires",
  direccion: {
    calle: "Av. Corrientes",
    numero: 1234,
  },
};

function destructuringPersona(person) {
  const { nombre, apellido, edad, ...restoDatosPersona } = person;
  console.log(nombre);
  console.log(apellido);
  console.log(edad);
  console.log(restoDatosPersona);
}

// destructuringPersona(persona);

// ejemplo con array de personas
const personas = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    ciudad: "Buenos Aires",
    direccion: {
      calle: "Av. Corrientes",
      numero: 1234,
    },
  },
  {
    nombre: "Marcos",
    apellido: "Polo",
    edad: 22,
    ciudad: "Junin",
    direccion: {
      calle: "Av. Luro",
      numero: 1234,
    },
  },
];

function destructuringPersonas(persons) {
  const [persona1, persona2, persona3] = persons;
  const { nombre, apellido, edad, ...restoDatosPersona } = persona1;
  //   console.log(nombre);
  //   console.log(apellido);
  //   console.log(edad);
  //   console.log(restoDatosPersona);
  console.log();
}

destructuringPersonas(personas);

const personaSinNombre = {
  apellido: "Perez",
  edad: 30,
  ciudad: "Buenos Aires",
  direccion: {
    calle: "Av. Corrientes",
    numero: 1234,
  },
};

function obtenerNombre({ nombre = "usuario" }) {
  console.log(nombre);
}
// obtenerNombre(personaSinNombre)

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosyLetras = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
];

function concatenarNumeros(array) {
  let [primer, ...resto] = array;

  console.log(primer);
  console.log(resto);
  console.log("-----------------");
  console.log(array);
}
const [...nuevoArray] = arrayNumeros;
// concatenarNumeros(arrayNumeros)
// concatenarNumeros(numerosyLetras);

var nombre;

nombre = "matias";

probarFunction = () => {
  console.log("hola desde func flecha");
};

// probarFunction()

const personaConNombre = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  ciudad: "Buenos Aires",
  direccion: {
    calle: "Av. Corrientes",
    numero: 1234,
  },
};

console.log(personaConNombre.nombre);

const arrayNombresHombre = ["Juan", "Pedro", "Maria", "Jose"];

const nuevoArrayTransformado = arrayNombresHombre.map((nombre) => {
  return nombre + " Perez";
});

console.log(nuevoArrayTransformado);
