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

## Routes

- **`routes/indexRoutes.js`**: Aquí definiremos las rutas principales de nuestra aplicación. Este archivo será responsable de renderizar las vistas principales utilizando el motor de plantillas EJS. A esta seccion se podrá acceder sin estar logeado.

- **`routes/adminRoutes.js`**: Este archivo contendrá las rutas relacionadas con las sección de administrador, a la que solo se podrá acceder si previamente han iniciado sesión.

- **`routes/productosRoutes.js`**: Este archivo contendrá las rutas relacionadas con las operaciones de los productos, como crear, leer, editar y eliminar. Utilizaremos el controlador de productos (`productosController.js`) para manejar la lógica asociada a estas operaciones.

### Extras

- **`views/index.ejs`**: Esta será la vista principal de nuestra aplicación. Utilizaremos el motor de plantillas EJS para renderizar esta vista y mostrar los datos relevantes.

- **`views/producto.ejs`**: Esta vista mostrará los detalles de un producto específico.

- **`productos.json`**: Este archivo JSON actuará como nuestra "base de datos" simulada. Contendrá los datos de los productos.

- **`app.js`**: Este archivo será el punto de entrada de nuestra aplicación Express. Aquí configuraremos las rutas, los middlewares y otros aspectos relacionados con la configuración de la aplicación.

- **`package.json`**: Este archivo contendrá las dependencias y la configuración de nuestro proyecto.

## CRUD de Productos - Instrucciones

En este proyecto, te guiaré paso a paso para crear un CRUD (Crear, Leer, Actualizar y Eliminar) para la gestión de productos en el proyecto Express. Asegúrate de tener el entorno de desarrollo configurado correctamente antes de comenzar.

### Paso 1: Crear las rutas de productos

En el archivo `productosRoutes.js`, crea las rutas necesarias para implementar las operaciones CRUD relacionadas con los productos. Debes incluir las siguientes rutas:

- Ruta para obtener todos los productos
- Ruta para obtener un producto por su ID
- Ruta para crear un nuevo producto
- Ruta para actualizar un producto existente
- Ruta para eliminar un producto

### Paso 2: Implementar los controladores de productos

En el archivo `productosController.js`, implementa los controladores correspondientes a cada ruta creada en el paso anterior. Cada controlador debe manejar la lógica necesaria para llevar a cabo la operación correspondiente (obtener todos los productos, obtener un producto por su ID, crear un nuevo producto, actualizar un producto existente y eliminar un producto).

### Paso 3: Conectar las rutas y los controladores

En el archivo principal `app.js`, importa y utiliza las rutas de productos (`productosRoutes.js`). Asegúrate de configurar las rutas para que se correspondan con las rutas definidas en `productosRoutes.js` y los controladores en `productosController.js`.

### Paso 4: Crear las vistas necesarias

Crea las vistas necesarias utilizando el motor de plantillas EJS. Debes tener una vista para mostrar todos los productos, una vista para mostrar los detalles de un producto específico, una vista para crear un nuevo producto y una vista para editar un producto existente.

### Paso 5: Establecer las peticiones HTTP desde las vistas

Desde las vistas correspondientes, establece las peticiones HTTP adecuadas para interactuar con las rutas de productos. Asegúrate de enviar los datos necesarios para realizar las operaciones CRUD (crear, leer, actualizar y eliminar productos) utilizando formularios HTML o mediante solicitudes AJAX.

### Paso 6: Probar el CRUD de productos

Inicia el servidor y prueba el CRUD de productos en tu aplicación. Verifica si puedes realizar todas las operaciones CRUD correctamente: crear nuevos productos, leer la lista de productos, actualizar productos existentes y eliminar productos.

¡Felicitaciones! Has creado un CRUD básico para la gestión de productos en tu proyecto Express. Ahora puedes expandir y mejorar la funcionalidad según tus necesidades.

## Conclusion

En este proyecto de Express, hemos utilizado una estructura de archivos modularizada para facilitar el desarrollo y el mantenimiento de nuestra aplicación web. Hemos dividido las funcionalidades en controladores, middlewares y rutas, y hemos utilizado el motor de plantillas EJS para renderizar nuestras vistas. Además, hemos simulado una "base de datos" utilizando un archivo JSON. Esta estructura modularizada nos permite tener un código más organizado y escalable, y facilita la colaboración en equipos de desarrollo.
