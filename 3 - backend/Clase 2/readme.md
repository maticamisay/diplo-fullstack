# Ruteo en Express.js

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Creando Rutas](#creando-rutas)
3. [Parámetros de Ruta](#parámetros-de-ruta-route-parameters)
4. [Parámetros de Consulta](#parámetros-de-consulta-query-parameters)
5. [Rutas Avanzadas con Router](#rutas-avanzadas-con-router)
6. [Resumen](#resumen)
7. [Lectura Adicional](#lectura-adicional)

## Introducción

El ruteo (o routing en inglés) se refiere a cómo una aplicación responde a una solicitud de cliente en un endpoint específico, que es un URI (o ruta) y un método de solicitud HTTP específico (GET, POST, etc.).

En Express.js, las rutas se definen mediante el uso de métodos de un objeto Express, que corresponden a los métodos HTTP.

## Creando Rutas

Un ejemplo básico de ruteo en Express.js es:

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});
```

En este caso, se define una ruta para el endpoint '/', que maneja las solicitudes GET.

Podemos agregar rutas para manejar otros métodos HTTP y rutas:

```javascript
app.post("/", (req, res) => {
  res.send("POST request to the homepage");
});

app.put("/user", (req, res) => {
  res.send("PUT request to /user");
});

app.delete("/user", (req, res) => {
  res.send("DELETE request to /user");
});
```

## Parámetros de Ruta (Route Parameters)

Los parámetros de ruta son segmentos de la URL que se utilizan para capturar los valores especificados en la ubicación actual. Se definen con la sintaxis `:nombreParametro` en la URL de la ruta.

```javascript
app.get("/users/:userId", (req, res) => {
  let userId = req.params.userId;
  res.send(`Usuario con ID: ${userId}`);
});
```

Aquí, `:userId` es un parámetro de ruta en la ruta `/users/:userId`.

## Parámetros de Consulta (Query Parameters)

Además de los parámetros de ruta, también puedes manejar parámetros de consulta en tus rutas. Los parámetros de consulta son la parte de una URL que sigue el signo `?` y que se utiliza para proporcionar datos que no forman parte de la ruta en sí.

```javascript
app.get("/search", (req, res) => {
  let query = req.query.q;
  res.send(`Buscar resultados para: ${query}`);
});
```

En este caso, si alguien visita `/search?q=Node`, la aplicación responderá con 'Buscar resultados para: Node'.

## Rutas Avanzadas con Router

Express.js también ofrece una funcionalidad de Router, que te permite crear manejadores de rutas modulares y montables en una aplicación Express. Esto es particularmente útil para separar rutas en diferentes archivos basados en su funcionalidad.

```javascript
const express = require("express");
const router = express.Router();

// Respond to GET request on the root route (`/`), the application’s home page
router.get("/", (req, res) => {
  res.send("Home page");
});

// Respond to a GET request to the `/about` route
router.get("/about", (req, res) => {
  res.send("About page");
});

module.exports = router;
```

Este router puede ser importado y usado en el archivo principal de tu aplicación.

## Resumen

En este README hemos aprendido sobre cómo Express.js maneja el ruteo, incluyendo rutas básicas, parámetros de ruta, parámetros de consulta y el uso de la funcionalidad de Router. En los siguientes READMEs, seguiremos explorando más funcionalidades de Express.js.

## Lectura Adicional

Para profundizar en otros temas de Express.js, puedes consultar los siguientes READMEs:

1. [Express.js y EJS: Plantillas dinámicas para aplicaciones web](./intro-ejs.md)
2. [Ejercicios EJS - Parte 1](./ejercicios.md)
3. [Explicacion ejercicio 2](./ejercicio2.md)
