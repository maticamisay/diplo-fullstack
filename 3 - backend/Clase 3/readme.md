# Clase 3 - Plantillas dinámicas con EJS

En esta clase de ejercicios de EJS, exploraremos conceptos adicionales y aplicaremos nuestros conocimientos anteriores para crear aplicaciones web más dinámicas utilizando Express y EJS.

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

¡Diviértete completando los ejercicios y expandiendo tus conocimientos sobre Express y EJS!

## Conclusion

En esta clase, hemos realizado una serie de ejercicios utilizando Express y EJS para crear vistas dinámicas y funcionales en nuestras aplicaciones web. Hemos aprendido a generar listas de elementos, mostrar detalles de productos y filtrar productos según su ID. Además, hemos explorado el patrón de arquitectura MVC y cómo se aplica en el contexto de Express.
