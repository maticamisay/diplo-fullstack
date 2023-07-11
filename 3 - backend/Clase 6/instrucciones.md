# Backend - Clase 6

## Instalaciones previas a comenzar

```
npm install express express-session cookie-parser ejs
npm install nodemon -D
```

## Temas a tratar

En esta clase del módulo de Backend, aprenderemos a utilizar sesiones y cookies con Express. También analizaremos cómo generar un hash utilizando el módulo bcrypt. Finalmente, aplicaremos estos conceptos en el desarrollo de una aplicación con inicio de sesión.

## Sesiones y Cookies

La necesidad de utilizar sesiones y cookies surge debido a que el protocolo HTTP no mantiene un estado persistente. Esto significa que, a nivel HTTP, cada solicitud y respuesta se procesa de forma independiente, lo que requiere que el usuario inicie sesión nuevamente en cada interacción, lo cual no brinda una buena experiencia de usuario.

Una sesión se almacena en el lado del servidor, mientras que una cookie se almacena en el lado del cliente. Cuando el servidor crea una sesión, se genera un ID único que se guarda en una cookie y se envía al cliente en cada solicitud. Esto permite mantener una sesión establecida, evitando que el usuario tenga que ingresar sus credenciales en cada interacción.

## Sesiones y Cookies con Express

En una aplicación de Express, por defecto, no se gestionan ni se tratan las sesiones y cookies. Sin embargo, podemos cambiar este comportamiento haciendo uso de módulos adicionales instalados a través de npm.

Para el manejo de sesiones en Express, podemos utilizar el módulo `express-session`, el cual se puede instalar ejecutando el siguiente comando en la terminal:

```
npm install express-session
```

El módulo `cookie-parser` se utiliza para el manejo de cookies y también debe ser instalado a través de npm:

```
npm install cookie-parser
```

## Implementando Sesiones y Cookies

Para utilizar los módulos `express-session` y `cookie-parser`, debemos importarlos en nuestra aplicación de Express de la siguiente manera:

```javascript
const cookieParser = require("cookie-parser");
const session = require("express-session");

const unDia = 1000 * 60 * 60 * 24; // Duración de la sesión en milisegundos (1 día)

// Configuración de las sesiones y cookies
app.use(
  session({
    secret: "123456", // Clave secreta para la sesión (se recomienda almacenarla de forma segura)
    saveUninitialized: true, // Permite guardar sesiones no inicializadas
    cookie: { maxAge: unDia }, // Duración de la cookie (1 día)
    resave: false, // Evita guardar la sesión en cada petición
  })
);

app.use(cookieParser());
```

En este ejemplo, hemos configurado las opciones básicas de `express-session` y `cookie-parser`. Es importante ajustar la configuración según las necesidades de tu aplicación.

## Uso de Hashes

En aplicaciones que involucran contraseñas, es importante almacenarlas de forma segura y encriptada. Para lograr esto, se utiliza el concepto de "hash". Un hash es un algoritmo matemático que transforma una cadena de caracteres en una serie de caracteres con una longitud fija.

En Express y Node.js, podemos utilizar el módulo `bcrypt` para aplicar un algoritmo de hash a contraseñas. Para instalarlo, ejecutamos el siguiente comando en la terminal:

```
npm install bcrypt
```

Una vez instalado, podemos utilizarlo en nuestra aplicación de la siguiente manera:

```javascript
const bcrypt = require("bcrypt");

// Comparación de contraseñas hasheadas
const

 esValidoElPasswordHasheado = bcrypt.compareSync(
  passwordIngresado,
  passwordGuardado
);
```

En este ejemplo, `bcrypt.compareSync()` compara la contraseña ingresada por el usuario con la contraseña almacenada en una base de datos, por ejemplo. El resultado de la comparación es un valor booleano: `true` si la contraseña es válida y `false` en caso contrario.

Recuerda que, por motivos de seguridad, en una aplicación real se debería utilizar una base de datos en lugar de arrays u objetos para almacenar los usuarios y sus contraseñas.

## Práctica

En la práctica, implementaremos un formulario de inicio de sesión en nuestra aplicación. El usuario ingresará un nombre de usuario y una contraseña. Validaremos estos datos utilizando sesiones, cookies y hashes.

- Cuando el usuario ingrese un nombre de usuario y contraseña válidos, se creará una sesión y se enviará una cookie al cliente. Esto evitará que el usuario tenga que iniciar sesión en cada interacción.

- Si se ingresan datos inválidos, se redirigirá a una vista de error.

Recuerda importar los módulos `express-session` y `cookie-parser` y configurarlos correctamente en tu aplicación de Express.

## Conclusiones

En esta clase, hemos aprendido a utilizar sesiones y cookies con Express. Estas funcionalidades nos permiten mantener sesiones de usuario y mejorar la experiencia del usuario al evitar la necesidad de iniciar sesión repetidamente. Además, hemos explorado el uso de hashes utilizando el módulo `bcrypt` para almacenar contraseñas de forma segura. La combinación de estas técnicas nos ayuda a construir aplicaciones más seguras y confiables.
````
