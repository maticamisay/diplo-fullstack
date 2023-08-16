# CALLBACK HELL

Se refiere al anidamiento profundo de funciones callback en JavaScript, que puede hacer que el código sea más difícil de seguir y mantener. A menudo se lo describe visualmente como una "pirámide de la perdición" debido a su forma triangular.

Aquí tienes un ejemplo simple de callback hell:

```javascript
const fs = require("fs");

fs.readFile("archivo1.txt", "utf8", function (err, data1) {
  if (err) {
    console.error("Error leyendo archivo1:", err);
  } else {
    fs.readFile("archivo2.txt", "utf8", function (err, data2) {
      if (err) {
        console.error("Error leyendo archivo2:", err);
      } else {
        fs.readFile("archivo3.txt", "utf8", function (err, data3) {
          if (err) {
            console.error("Error leyendo archivo3:", err);
          } else {
            console.log("Contenido de los archivos:", data1, data2, data3);
          }
        });
      }
    });
  }
});
```

En este ejemplo, queremos leer tres archivos de texto en orden secuencial. Sin embargo, como las operaciones de lectura de archivos son asincrónicas en Node.js, necesitamos usar callbacks para garantizar el orden. Como resultado, terminamos con múltiples niveles de funciones anidadas, que es lo que causa el "callback hell".

Hoy en día, este problema se mitiga comúnmente utilizando promesas, `async/await`, o bibliotecas como `async.js`. Estas herramientas permiten escribir código asincrónico de una manera más plana y legible.

# ASYNC AWAIT

Usando `async` y `await` podemos transformar el ejemplo anterior para que tenga una apariencia más plana y sea más legible.

Asumamos que estamos usando la biblioteca `fs.promises` de Node.js que proporciona versiones basadas en promesas de las funciones de `fs`.

```javascript
const fs = require("fs").promises;

async function leerArchivos() {
  try {
    const data1 = await fs.readFile("archivo1.txt", "utf8");
    const data2 = await fs.readFile("archivo2.txt", "utf8");
    const data3 = await fs.readFile("archivo3.txt", "utf8");

    console.log("Contenido de los archivos:", data1, data2, data3);
  } catch (err) {
    console.error("Error leyendo los archivos:", err);
  }
}

leerArchivos();
```

Lo que hemos hecho aquí es:

1. Usamos la palabra clave `async` para indicar que una función es asincrónica.
2. Dentro de esta función asincrónica, usamos `await` antes de cada operación asincrónica basada en promesas. Esto hace que la ejecución se "pausará" hasta que la promesa se resuelva.
3. Hemos rodeado las llamadas con un bloque `try/catch` para manejar cualquier error que pueda surgir de las operaciones asincrónicas.

El resultado es un código que se ve y se siente más síncrono, pero que en realidad es asincrónico y no bloqueante.
