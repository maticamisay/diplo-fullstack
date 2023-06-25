# Proyecto de Express con estructura de archivos modularizada

En este proyecto, crearemos una aplicación web utilizando el framework Express. La estructura de archivos estará dividida en rutas (routes), controladores (controllers) y middlewares. También utilizaremos un archivo JSON y el módulo 'fs' para simular una "base de datos". Además, utilizaremos el motor de plantillas EJS para renderizar nuestras vistas.

## Estructura de archivos

La estructura de archivos del proyecto será la siguiente:

```
- 📁 controllers
   - 📄 productosController.js
- 📁 middlewares
   - 📄 autenticacionMiddleware.js
- 📁 routes
   - 📄 adminRoutes.js
   - 📄 indexRoutes.js
   - 📄 productosRoutes.js
- 📁 views
   - 📄 index.ejs
   - 📄 producto.ejs
- 📄 productos.json
- 📄 app.js
- 📄 package.json
```

## Archivos y su funcionalidad

### Controllers

- **`controllers/productosController.js`**: Este archivo contendrá la lógica para manejar las operaciones relacionadas con los productos, como crear, leer, editar y eliminar.

- **`controllers/indexcontroller.js`**: Este archivo contendrá la lógica para renderizar cada vista ejs accesible al usuario.

- **`controllers/adminController.js`**: Este archivo contendrá la lógica para renderizar cada vista ejs accesible al administrador.

## Middlewares

- **`middlewares/autenticacionMiddleware.js`**: En este archivo, implementaremos un middleware que se encargará de la autenticación de los usuarios.

- **`middlewares/validators/productValidator.js`**: En este archivo, implementaremos un middleware que se encargará de la validación con `express-validator` de los campos requeridos para la creación de un producto.

- **`middlewares/validators/userValidator.js`**: En este archivo, implementaremos un middleware que se encargará de la validación con `express-validator` de los campos requeridos para la creación de un usuario.

### Routes

- **`routes/indexRoutes.js`**: Aquí definiremos las rutas principales de nuestra aplicación. Este archivo será responsable de renderizar las vistas principales utilizando el motor de plantillas EJS. A esta seccion se podrá acceder sin estar logeado.

- **`routes/adminRoutes.js`**: Este archivo contendrá las rutas relacionadas con las sección de administrador, a la que solo se podrá acceder si previamente han iniciado sesión.

- **`routes/productosRoutes.js`**: Este archivo contendrá las rutas relacionadas con las operaciones de los productos, como crear, leer, editar y eliminar. Utilizaremos el controlador de productos (`productosController.js`) para manejar la lógica asociada a estas operaciones.

### Extras

- **`views/index.ejs`**: Esta será la vista principal de nuestra aplicación. Utilizaremos el motor de plantillas EJS para renderizar esta vista y mostrar los datos relevantes.

- **`views/producto.ejs`**: Esta vista mostrará los detalles de un producto específico.

- **`productos.json`**: Este archivo JSON actuará como nuestra "base de datos" simulada. Contendrá los datos de los productos.

- **`app.js`**: Este archivo será el punto de entrada de nuestra aplicación Express. Aquí configuraremos las rutas, los middlewares y otros aspectos relacionados con la configuración de la aplicación.

- **`package.json`**: Este archivo contendrá las dependencias y la configuración de nuestro proyecto.

## Conclusion

En este proyecto de Express, hemos utilizado una estructura de archivos modularizada para facilitar el desarrollo y el mantenimiento de nuestra aplicación web. Hemos dividido las funcionalidades en controladores, middlewares y rutas, y hemos utilizado el motor de plantillas EJS para renderizar nuestras vistas. Además, hemos simulado una "base de datos" utilizando un archivo JSON. Esta estructura modularizada nos permite tener un código más organizado y escalable, y facilita la colaboración en equipos de desarrollo.
