# Trabajo Práctico: API REST para la Gestión de Productos - Parte 2

## Descripción

En este trabajo práctico, continuaremos modificando nuestra API pero en esta ocasión haremos un cambio de paradigma, en lugar de utilizar archivos JSON para almacenar los datos, utilizaremos una base de datos real. Para esto, utilizaremos el módulo `sequelize` para conectarnos a una base de datos MYSQL.

## Requisitos

- Node.js y Express.js deben estar instalados en tu máquina.
- Deberás utilizar el módulo `express-validator` para la validación de datos.
- La API deberá soportar operaciones de CRUD (Crear, Leer, Actualizar, Eliminar) para los productos.
- Deberás utilizar el módulo `sequelize` para conectarte a una base de datos MYSQL.
- Deberás utilizar el módulo `mysql2` para conectarte a una base de datos MYSQL.

## Instrucciones

1. **Configuración del Proyecto**: Inicia un nuevo proyecto de Node.js e instala Express.js y express-validator. Crea una carpeta llamada `public` para almacenar los archivos HTML y CSS de tu aplicación.

2. **Rutas y Controladores**: Divide tu aplicación en distintas rutas y controladores siguiendo el patrón de diseño MVC.

3. **Operaciones CRUD**: Implementa las operaciones CRUD en tus controladores. Las rutas y controladores que deberás crear son las siguientes:

   - **Crear (POST /productos)**: Debe validar los datos del producto utilizando `express-validator`. Si los datos son válidos, agrega el nuevo producto al archivo JSON.

   - **Leer (GET /productos y GET /productos/:id)**: Devuelve todos los productos o un producto específico basándose en su ID.

   - **Actualizar (PUT /productos/:id)**: Actualiza un producto existente. Debe validar los datos al igual que en la operación Crear.

   - **Eliminar (DELETE /productos/:id)**: Elimina un producto basándose en su ID.

4. **Middlewares**: Crea e implementa middlewares según sea necesario. Por ejemplo, puedes crear un middleware para manejar los errores de validación.

5. **OPCIONAL: Gestión de Sesiones y Cookies**: Aunque no es estrictamente necesario para la funcionalidad de la API, considera agregar gestión de sesiones y cookies para practicar estas habilidades, para esto puedes expandir tu proyecto con una seccion de rutas y controladores para la autenticación de usuarios.

## Evaluación

Tu trabajo será evaluado en base a los siguientes criterios:

- Correcta implementación de las operaciones CRUD.
- Uso correcto de `sequelize` y `mysql2` para conectarse a una base de datos MYSQL.
- Uso correcto de `express-validator` para validar datos.
- Organización del código en rutas y controladores.
- Uso correcto de middlewares.
- (Opcional) Implementación de la gestión de sesiones y cookies.

## Entrega

Sube tu proyecto a un repositorio en GitHub y comparte el enlace para su revisión.

¡Buena suerte!
