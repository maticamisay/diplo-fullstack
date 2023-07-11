# Introducción a Express.js y Nodemon

## Tabla de Contenidos

1. [Instalación de Express y Nodemon](#instalación-de-express-y-nodemon)
2. [Configuración básica del servidor](#configuración-básica-del-servidor)
3. [Manejo de rutas](#manejo-de-rutas)
4. [Iniciando el servidor con Nodemon](#iniciando-el-servidor-con-nodemon)
5. [Conclusión](#conclusión)
6. [Lecturas adicionales](#lecturas-adicionales)

Express.js es un framework de desarrollo web rápido y minimalista para Node.js, mientras que Nodemon es una herramienta que reinicia automáticamente el servidor Node.js cuando se detectan cambios en los archivos. En este archivo, exploraremos los conceptos básicos de Express y cómo configurar Nodemon para agilizar el desarrollo.

## Instalación de Express y Nodemon

Antes de comenzar, asegúrate de tener instalado Node.js en tu sistema. Luego, puedes crear un nuevo proyecto de Node.js e instalar Express y Nodemon ejecutando los siguientes comandos en tu terminal:

```bash
 mkdir mi-proyecto-express
 cd mi-proyecto-express
 npm init -y
 npm install express
 npm install nodemon --save-dev
```

Estos comandos crean un nuevo directorio, inicializan un proyecto de Node.js con un archivo `package.json` y luego instalan Express y Nodemon como dependencias de desarrollo.

## Configuración básica del servidor

Para utilizar Express, crea un archivo `app.js` o `index.js` en tu proyecto y requiere el módulo `express`. A continuación, crea una instancia de la aplicación Express:

```javascript
const express = require("express");
const app = express();
```

En el código anterior, hemos creado una instancia de la aplicación Express llamada `app`.

## Manejo de rutas

Express proporciona un enrutador para manejar las diferentes rutas en tu aplicación. Puedes usar los métodos `get`, `post`, `put`, `delete`, entre otros, para definir las rutas y manejar las solicitudes HTTP correspondientes.

Aquí tienes un ejemplo de cómo definir una ruta de inicio ("/") y enviar una respuesta de "Hola Mundo!":

```javascript
app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});
```

En el código anterior, hemos utilizado el método `get` para definir la ruta de inicio ("/") y una función de controlador para manejar la solicitud. La función de controlador toma dos parámetros: `req` (la solicitud) y `res` (la respuesta). En este caso, simplemente enviamos la respuesta "Hola Mundo!" al cliente.

## Iniciando el servidor con Nodemon

Para que nuestra aplicación Express sea reiniciada automáticamente cuando se realicen cambios en los archivos, utilizaremos Nodemon. Para configurar Nodemon, actualiza el script `dev` en tu archivo `package.json` de la siguiente manera:

```json
"scripts": {
  "dev": "nodemon app.js"
},
```

Con esta configuración, puedes iniciar tu servidor ejecutando el comando `npm run dev`. Nodemon se encargará de reiniciar automáticamente el servidor cada vez que realices cambios en los archivos.

## Conclusión

En este archivo, hemos aprendido los conceptos básicos de Express.js y cómo configurar Nodemon para agilizar el desarrollo. Hemos visto cómo instalar Express y Nodemon, configurar el servidor Express, manejar rutas y utilizar Nodemon para reiniciar automáticamente el servidor cuando se detecten cambios en los archivos.

Express y Nodemon son herramientas poderosas que facilitan el desarrollo de aplicaciones web en Node.js. Continúa explorando y aprendiendo más sobre Express y sus capacidades adicionales para aprovechar al máximo este framework.

¡Feliz desarrollo con Express y Nodemon!

## Lecturas Adicionales

Para más práctica e información adicional sobre Express.js, consulta los siguientes documentos:

- [Ejercicios de Express](./ejercicios.md)
- [Express.js - req.params](./req.params.md)
