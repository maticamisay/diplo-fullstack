// Hacer una función que reciba la edad de una persona y nos retorne “sos mayor de edad” 
// si la persona tiene al menos 18 años, sino debe retornar “sos menor de edad”.

let edad = 17;

function verificarEdad(age) {
  if (age >= 18) {
    return "Mayor de edad";
  } else {
    return "Menor de edad";
  }
}

const result = verificarEdad(edad);

console.log(result); //'Menor de edad'
