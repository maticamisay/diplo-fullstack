**Asyncronismo en Node.js**

## Introducción

En Node.js, la asincronía es un concepto esencial debido a la naturaleza no bloqueante de la plataforma. Node.js está diseñado para manejar múltiples operaciones simultáneamente y aprovechar al máximo los recursos de la CPU y las E/S. En lugar de bloquear la ejecución de una tarea hasta que se complete, Node.js permite que varias operaciones se ejecuten de manera concurrente para mejorar la eficiencia y el rendimiento.

## Callbacks

Una de las formas más comunes de trabajar con asincronismo en Node.js es mediante el uso de callbacks. Un callback es simplemente una función que se pasa como argumento a otra función, y que será ejecutada más tarde, generalmente después de que se complete una operación asíncrona.

```javascript
// Ejemplo de función asincrónica con callback
function asyncFunction(callback) {
  setTimeout(() => {
    console.log("Operación asincrónica completada.");
    callback();
  }, 1000);
}

console.log("Inicio de la ejecución.");
asyncFunction(() => {
  console.log("Fin de la ejecución.");
});
```

## Promesas

Para manejar el anidamiento excesivo de callbacks (callback hell), Node.js introdujo las promesas. Las promesas son objetos que representan la eventual finalización o el fracaso de una operación asíncrona y permiten un manejo más limpio y estructurado del flujo asíncrono.

```javascript
// Ejemplo de función asincrónica con promesa
function asyncFunction() {
  //results: fullfilled, rejected, pending
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Operación asincrónica completada.");
      resolve();
    }, 1000);
  });
}

console.log("Inicio de la ejecución.");
asyncFunction()
  .then(() => {
    console.log("Fin de la ejecución.");
  })
  .catch((error) => {
    console.error("Ocurrió un error:", error);
  });
```

## async/await

El enfoque más moderno y legible para manejar la asincronía en Node.js es mediante el uso de las palabras clave `async` y `await`. Las funciones marcadas como `async` devuelven automáticamente una promesa, lo que nos permite usar `await` para esperar a que una operación asíncrona se complete.

```javascript
// Ejemplo de función asincrónica con async/await
function delay(ms) {
  // Simula una operación asincrónica, muestra un mensaje por consola
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Operación asincrónica completada.");
      resolve();
    }, [ms])
  );
}

async function main() {
  console.log("Inicio de la ejecución.");
  try {
    await delay(5000);
    console.log("Mensaje post promise");
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
  console.log("Fin de la ejecución.");
}

main();
```

## Conclusión

Node.js se destaca por su capacidad para manejar operaciones asíncronas eficientemente. Ya sea utilizando callbacks, promesas o async/await, es importante comprender cómo funciona el asincronismo en Node.js para escribir código efectivo y escalable. Cada enfoque tiene sus ventajas y desventajas, pero async/await suele ser la opción más recomendada debido a su legibilidad y facilidad de uso.
