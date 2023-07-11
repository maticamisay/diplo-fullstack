## Consigna del ejercicio: Formulario de datos de usuario

El objetivo de este ejercicio es crear una aplicación web que permita ingresar los datos de un usuario en un formulario y luego mostrar esos datos en una vista diferente.

1. Crea una nueva carpeta para el proyecto y configura un nuevo proyecto de Node.js en ella.
2. Instala los paquetes necesarios: Express y EJS.
3. Crea un archivo `app.js` en la carpeta raíz del proyecto e inicializa una nueva aplicación Express.
4. Crea una vista EJS llamada `formulario.ejs` que contenga un formulario HTML con campos para ingresar los datos del usuario, como nombre, correo electrónico y fecha de nacimiento.
5. Define una ruta en Express (`GET`) para la ruta principal ("/") que renderice la vista `formulario.ejs`.
6. Define una ruta en Express (`POST`) para una ruta diferente ("/mostrar") que reciba los datos del formulario y los muestre en una nueva vista EJS llamada `mostrar.ejs`.
7. En la ruta `POST`, obtén los datos enviados desde el formulario utilizando el middleware `express.urlencoded()` y muestra los datos en la vista `mostrar.ejs`.
8. En la vista `mostrar.ejs`, muestra los datos recibidos del formulario en el formato deseado utilizando las etiquetas EJS `<%= %>`.
