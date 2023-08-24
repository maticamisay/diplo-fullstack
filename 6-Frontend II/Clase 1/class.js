// ejemplo de una clase en javascrit

class Alumno {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  }
}

const alumno1 = new Alumno("Juan", 20);
const alumno2 = new Alumno("Pedro", 19);

alumno1.saludar();
alumno2.saludar();
