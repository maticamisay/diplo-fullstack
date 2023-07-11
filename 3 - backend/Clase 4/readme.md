# Arquitectura MVC y Estructura de Archivos en Express.js

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Arquitectura MVC](#arquitectura-mvc)
3. [Aplicando la Arquitectura MVC en Express.js](#aplicando-la-arquitectura-mvc-en-expressjs)
4. [Ejemplo de Rutas y Controladores](#ejemplo-de-rutas-y-controladores)
5. [Recursos Adicionales](#recursos-adicionales)

## Introducción

El patrón de arquitectura Modelo-Vista-Controlador (MVC) es una metodología popular que se utiliza para diseñar y organizar el código de una aplicación web de manera estructurada y ordenada.

## Arquitectura MVC

Esta arquitectura divide la aplicación en tres componentes interconectados:

1. **Modelo (Model)**: Maneja los datos de la aplicación. Incluye la lógica para recuperar y almacenar los datos del modelo en una base de datos.
2. **Vista (View)**: Es la representación visual de los datos, como el diseño de la página y los elementos de la interfaz de usuario.
3. **Controlador (Controller)**: Actúa como un intermediario entre el Modelo y la Vista. Toma las solicitudes de entrada del usuario, las procesa utilizando los modelos adecuados y devuelve los resultados a la vista.

## Aplicando la Arquitectura MVC en Express.js

Podemos implementar esta arquitectura en una aplicación Express.js dividiendo nuestra aplicación en diferentes archivos y directorios.

Por ejemplo, podríamos tener una estructura de archivos como la siguiente:

```
/project
  /controllers
    usersController.js
  /models
    userModel.js
  /views
    index.ejs
    users.ejs
  /routes
    index.js
    users.js
  app.js
```

Cada directorio contiene archivos relacionados con su componente específico en la arquitectura MVC.

- El directorio `controllers` contiene los controladores de nuestra aplicación. Cada controlador contiene la lógica para manejar una solicitud específica.

- El directorio `models` contiene los modelos de nuestra aplicación. Cada modelo contiene la lógica para manejar los datos de una entidad específica de la aplicación, como un usuario.

- El directorio `views` contiene las vistas de nuestra aplicación. Cada vista es un archivo de plantilla EJS que define cómo se presentan los datos al usuario.

- El directorio `routes` contiene las rutas de nuestra aplicación. Cada archivo de ruta define las rutas para un conjunto específico de solicitudes y delega el manejo de estas solicitudes a los controladores apropiados.

## Ejemplo de Rutas y Controladores

Para ejemplificar cómo se dividen las rutas y los controladores, consideremos una aplicación que tiene rutas para manejar solicitudes de usuario.

Primero, definimos nuestro controlador en `controllers/usersController.js`:

```javascript
const getUsers = (req, res) => {
  // Lógica para obtener usuarios
};

const getUser = (req, res) => {
  // Lógica para obtener un usuario específico
};

module.exports = {
  getUsers,
  getUser,
};
```

Luego, definimos nuestras rutas en `routes/users.js`:

```javascript
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/", usersController.getUsers);
router.get("/:userId", usersController.getUser);

module.exports = router;
```

Finalmente, importamos nuestras rutas en nuestro archivo `app.js`:

```javascript
const express = require("express");
const app = express();
const usersRoutes = require("./routes/users");

app.use("/users", usersRoutes);

// Resto del código de la aplicación
```

Con esta estructura de archivos, cada componente de nuestra aplicación tiene su propio lugar, lo que hace que nuestra aplicación sea más fácil de entender y mantener.

## Recursos Adicionales

Para profundizar en otros aspectos de Express.js y la arquitectura MVC, te recomendamos los siguientes recursos:

1. [Guía de Express.js](https://expressjs.com/es/guide/routing.html)
2. [Introducción middlewares](./intro-middlewares.md)
3. [Que es Model View Controller MVC - Curso Node.js](https://www.youtube.com/watch?v=HrSan9-un_8)
4. [Ejercicios](./ejercicios.md)
