# Sesiones, Cookies y Seguridad en Express.js

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Cookies y Cookie-parser](#cookies-y-cookie-parser)
3. [Sesiones y Express-session](#sesiones-y-express-session)
4. [Seguridad y Bcrypt](#seguridad-y-bcrypt)
5. [Resumen](#Resumen)
6. [Recursos Adicionales](#recursos-adicionales)

## Introducción

En las aplicaciones web, las sesiones y las cookies se utilizan para mantener el estado entre diferentes solicitudes HTTP. Una sesión es una forma de almacenar información para un usuario individual en el servidor, mientras que una cookie es una forma de almacenar información en el cliente.

## Cookies y Cookie-parser

Las cookies se almacenan en el navegador del cliente y se envían al servidor en cada solicitud. Para trabajar con cookies en Express.js, puedes utilizar el middleware cookie-parser.

Primero, instala cookie-parser con npm:

```
npm install --save cookie-parser
```

Luego, puedes utilizarlo en tu aplicación Express:

```javascript
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
  // Establecer una cookie
  res.cookie("username", "Juan", { maxAge: 900000 });

  // Leer una cookie
  console.log("Username: ", req.cookies.username);

  // Resto del código de la aplicación...
});
```

## Sesiones y Express-session

Express-session es un middleware de Express.js para gestionar las sesiones. Almacena los datos de la sesión en el servidor y proporciona un ID de sesión al cliente, que se almacena en una cookie.

Primero, instala express-session con npm:

```
npm install --save express-session
```

Luego, puedes utilizarlo en tu aplicación Express:

```javascript
const express = require("express");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
  })
);

app.get("/", (req, res) => {
  // Establecer una variable de sesión
  req.session.username = "Juan";

  // Leer una variable de sesión
  console.log("Username: ", req.session.username);

  // Resto del código de la aplicación...
});
```

## Seguridad y Bcrypt

Para almacenar las contraseñas de los usuarios de manera segura, nunca debes almacenar la contraseña en texto plano. En su lugar, debes almacenar un hash de la contraseña.

Bcrypt es una biblioteca que te permite hashear las contraseñas de manera segura. Primero, instala bcrypt con npm:

```
npm install --save bcrypt
```

Luego, puedes utilizarlo para hashear y verificar las contraseñas:

```javascript
const bcrypt = require("bcrypt");

// Generar un hash
bcrypt.hash("myPassword", 10, (err, hash) => {
  // Almacenar el hash en la base de datos...
});

// Verificar una contraseña
bcrypt.compare("myPassword", hash, (err, result) => {
  if (result) {
    // Si la contraseña es correcta...
  } else {
    // Si la contraseña es incorrecta...
  }
});
```

## Resumen

En este README, hemos aprendido cómo utilizar las cookies y las sesiones en Express.js con los middlewares cookie-parser y express-session, y cómo hashear contraseñas de forma segura con bcrypt. Estos son componentes importantes para mantener el estado y la seguridad en tus aplicaciones Express.js.

## Recursos Adicionales

Para profundiad en otros aspectos de Express.js, te recomendamos los siguientes recursos:

- [Documentación de cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [Documentación de express-session](https://www.npmjs.com/package/express-session)
- [Documentación de bcrypt](https://www.npmjs.com/package/bcrypt)
- [Ejercicio de ejemplo](./instrucciones.md)
