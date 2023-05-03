const fs = require("fs");

// Array original
const estudiantes = [
  { nombre: "Juan", apellido: "Perez", edad: 20 },
  { nombre: "Maria", apellido: "Garcia", edad: 22 },
  { nombre: "Pedro", apellido: "Gonzalez", edad: 21 },
];

// Modificar array en memoria
estudiantes.push({ nombre: "Ana", apellido: "Lopez", edad: 19 });

// Escribir nuevo array en archivo
fs.writeFile("estudiantes.json", JSON.stringify(estudiantes), (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Archivo guardado exitosamente");
  }
});
