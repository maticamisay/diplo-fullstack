# Vistas, Templates y Plantillas Dinámicas con Express.js y EJS

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Configuración de las Vistas](#configuración-de-las-vistas)
3. [Creación de Vistas con EJS](#creación-de-vistas-con-ejs)
4. [Archivos Públicos](#archivos-públicos)
5. [Pasos para completar los ejercicios](#pasos-para-completar-los-ejercicios)
6. [Recursos adicionales](#recursos-adicionales)
7. [Conclusión](#conclusión)
8. [Lectura Adicional](#lectura-adicional)

## Introducción

Express.js permite gestionar fácilmente las vistas y templates utilizando motores de plantillas (templating engines) que permiten incrustar datos de back-end en HTML. A través de ejercicios prácticos, aprenderemos a generar vistas dinámicas y funcionales en nuestras aplicaciones web con Express.js y EJS.

## Configuración de las Vistas

Para configurar el uso de vistas en tu aplicación Express.js, necesitas definir un directorio de vistas y especificar el motor de plantillas que utilizarás. Para hacerlo, utiliza los métodos set() de tu objeto de aplicación Express:

```javascript
const express = require("express");
const app = express();
const path = require("path");

// Definir el directorio de vistas
app.set("views", path.join(__dirname, "views"));

// Definir el motor de plantillas
app.set("view engine", "ejs");
```

Esto establece el directorio 'views' en el directorio actual como la ubicación de nuestras vistas, y establece EJS como nuestro motor de plantillas.

## Creación de las vistas

EJS, que significa "Embedded JavaScript", es un motor de plantillas simple pero potente. Permite generar HTML con JavaScript simple, y su sintaxis es muy similar a la de HTML, lo que lo hace fácil de aprender.

Un ejemplo básico de una plantilla EJS sería:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi Página</title>
  </head>
  <body>
    <h1>Hola, <%= nombre %>!</h1>
  </body>
</html>
```

La sintaxis `<%= nombre %>` nos permite incrustar JavaScript en nuestro HTML. En este caso, `nombre` sería una variable que se pasa a la vista desde nuestro servidor.

Para renderizar una vista, utilizamos el método `res.render()` en nuestra ruta:

```javascript
app.get("/", (req, res) => {
  res.render("index", { nombre: "Juan" });
});
```

Esto renderizará la vista `index.ejs` en el directorio de vistas, y le pasará un objeto con una propiedad `nombre` con el valor 'Juan'.

## Archivos Públicos

A menudo, querrás servir archivos estáticos como imágenes, CSS y JavaScript en tu aplicación Express.js. Para hacerlo, utiliza el middleware incorporado `express.static` en tu aplicación Express:

```javascript
app.use(express.static(path.join(__dirname, "public")));
```

Esto servirá archivos estáticos desde el directorio 'public' en el directorio actual. Por ejemplo, si tienes un archivo `style.css` en `public/styles`, podrías referenciarlo en tu HTML como sigue:

```html
<link rel="stylesheet" type="text/css" href="/styles/style.css" />
```

## Pasos para completar los ejercicios

### Paso 1: Configurar el proyecto

1. Crea una carpeta para el proyecto en tu sistema de archivos.
2. Inicializa un nuevo proyecto de Node.js ejecutando el siguiente comando en la terminal:

```bash
npm init -y
```

3. Instala los paquetes necesarios, Express y EJS, ejecutando el siguiente comando en la terminal:

```bash
npm install express ejs
npm install nodemon --save-dev
```

### Paso 2: Archivo `app.js`

En el archivo `app.js`, encontrarás el código base necesario para completar los ejercicios. Este archivo contiene:

- La configuración básica de una aplicación Express.
- El array de productos ficticios.
- Las rutas y los controladores para los ejercicios 2 y 3.
- La estructura básica para el ejercicio 4.

Debes completar el código para el ejercicio 4, donde se filtra y muestra un producto específico según su ID.

### Paso 3: Configuración de Nodemon

1. Abre el archivo `package.json` y agrega una nueva propiedad `"scripts"` debajo de la propiedad `"main"`:

```json
"scripts": {
  "dev": "nodemon app.js"
},
```

2. Guarda los cambios en el archivo `package.json`.

### Paso 4: Ejecutar la aplicación

1. Guarda todos los cambios realizados en el archivo `app.js`.
2. Ejecuta la aplicación ejecutando el siguiente comando en la terminal:

```bash
npm run dev
```

Al utilizar el comando `npm run dev`, se iniciará la aplicación con Nodemon, lo que permitirá que el servidor se reinicie automáticamente cada vez que se realicen cambios en los archivos.

## Recursos adicionales

Para obtener más información sobre el patrón de arquitectura MVC (Modelo-Vista-Controlador) y su aplicación en aplicaciones web con Express, te recomendamos leer el siguiente artículo: [El modelo de arquitectura MVC (Modelo-Vista-Controlador)](https://www.freecodecamp.org/espanol/news/el-modelo-de-arquitectura-view-controller-pattern/).

## Conclusión

En este README, hemos realizado una serie de ejercicios utilizando Express y EJS para crear vistas dinámicas y funcionales en nuestras aplicaciones web. Hemos aprendido a generar listas de elementos, mostrar detalles de productos y filtrar productos según su ID. Además, hemos explorado el patrón de arquitectura MVC y cómo se aplica en el contexto de Express.

## Lectura Adicional

Para profundizar en otros temas de Express.js, puedes consultar los siguientes READMEs:

1. [Ejercicios EJS](./ejercicios.md)
