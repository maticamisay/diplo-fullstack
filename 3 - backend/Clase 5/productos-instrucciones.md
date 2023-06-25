# CRUD de Productos - Instrucciones

En este proyecto, te guiaré paso a paso para crear un CRUD (Crear, Leer, Actualizar y Eliminar) para la gestión de productos en el proyecto Express. Asegúrate de tener el entorno de desarrollo configurado correctamente antes de comenzar.

## Paso 1: Crear las rutas de productos

En el archivo `productosRoutes.js`, crea las rutas necesarias para implementar las operaciones CRUD relacionadas con los productos. Debes incluir las siguientes rutas:

- Ruta para obtener todos los productos
- Ruta para obtener un producto por su ID
- Ruta para crear un nuevo producto
- Ruta para actualizar un producto existente
- Ruta para eliminar un producto

## Paso 2: Implementar los controladores de productos

En el archivo `productosController.js`, implementa los controladores correspondientes a cada ruta creada en el paso anterior. Cada controlador debe manejar la lógica necesaria para llevar a cabo la operación correspondiente (obtener todos los productos, obtener un producto por su ID, crear un nuevo producto, actualizar un producto existente y eliminar un producto).

## Paso 3: Conectar las rutas y los controladores

En el archivo principal `app.js`, importa y utiliza las rutas de productos (`productosRoutes.js`). Asegúrate de configurar las rutas para que se correspondan con las rutas definidas en `productosRoutes.js` y los controladores en `productosController.js`.

## Paso 4: Crear las vistas necesarias

Crea las vistas necesarias utilizando el motor de plantillas EJS. Debes tener una vista para mostrar todos los productos, una vista para mostrar los detalles de un producto específico, una vista para crear un nuevo producto y una vista para editar un producto existente.

## Paso 5: Establecer las peticiones HTTP desde las vistas

Desde las vistas correspondientes, establece las peticiones HTTP adecuadas para interactuar con las rutas de productos. Asegúrate de enviar los datos necesarios para realizar las operaciones CRUD (crear, leer, actualizar y eliminar productos) utilizando formularios HTML o mediante solicitudes AJAX.

## Paso 6: Probar el CRUD de productos

Inicia el servidor y prueba el CRUD de productos en tu aplicación. Verifica si puedes realizar todas las operaciones CRUD correctamente: crear nuevos productos, leer la lista de productos, actualizar productos existentes y eliminar productos.

¡Felicitaciones! Has creado un CRUD básico para la gestión de productos en tu proyecto Express. Ahora puedes expandir y mejorar la funcionalidad según tus necesidades.