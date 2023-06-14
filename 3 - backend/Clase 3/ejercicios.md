# Ejercicios EJS - Parte 2

## Ejercicio 2: Lista de elementos

Crea una vista EJS que muestre una lista de elementos utilizando un bucle. Pasa un array de elementos como dato en la renderización y genera los elementos de la lista utilizando un bucle `forEach` en la vista.

```html
<!-- lista.ejs -->
<ul>
  <% elementos.forEach(function(elemento) { %>
  <li><%= elemento %></li>
  <% }) %>
</ul>
```

```javascript
// app.js
app.get("/lista", (req, res) => {
  const elementos = ["Elemento 1", "Elemento 2", "Elemento 3"];
  res.render("lista", { elementos });
});
```

En este ejercicio, estamos pasando un array de elementos y utilizando un bucle `forEach` en la vista para generar una lista con los elementos.

## Ejercicio 3

En este ejercicio, el objetivo es crear una aplicación web simple que muestre una lista de productos. Cada producto tendrá un nombre, una descripción y un precio.

### Pasos del ejercicio

1. Crea una nueva carpeta para el proyecto y configura un nuevo proyecto de Node.js en ella.
2. Instala los paquetes necesarios: Express y EJS.
3. Crea un archivo `app.js` en la carpeta raíz del proyecto e inicializa una nueva aplicación Express.
4. Define un array de objetos de productos ficticios en el archivo `app.js`. Cada objeto de producto debe tener propiedades `nombre`, `descripcion` y `precio`.
5. Crea una ruta en Express para la ruta (`/productos`) que renderice una vista EJS llamada `productos.ejs` y pase el array de productos como dato para la renderización.
6. Crea la vista `productos.ejs` y muestra la lista de productos en forma de lista. La lista debe mostrar el `nombre`, la `descripcion` y el `precio` de cada producto.
7. Utiliza una estructura de control en la vista para generar dinámicamente las listas.
8. Ejecuta la aplicación y verifica que la lista de productos se muestre correctamente en el navegador.

## Ejercicio 4: Filtrar productos por ID

En este ejercicio, el objetivo es crear una funcionalidad en la aplicación web para filtrar y mostrar un producto específico según su ID. Se utilizará un array de productos ya definido al inicio del código.

1. Dentro del archivo `app.js`, crea una nueva ruta en Express que reciba un parámetro de ruta correspondiente al ID del producto. Por ejemplo, puedes utilizar la ruta `/productos/:id`.
2. En la función de controlador de la ruta, utiliza el parámetro `id` recibido para buscar el producto correspondiente en el array de productos. Puedes utilizar métodos de array como `find` o `filter` para realizar la búsqueda.
3. Renderiza una vista EJS llamada `detalleProducto.ejs` y pasa el producto encontrado como dato para la renderización.
4. Crea la vista `detalleProducto.ejs` y muestra los detalles del producto, como el nombre, la descripción y el precio.
5. Asegúrate de utilizar etiquetas EJS `<%= %>` para imprimir correctamente los valores de los atributos del producto dentro de las etiquetas HTML correspondientes.
6. Ejecuta la aplicación y verifica que al acceder a la ruta `/productos/:id` se muestren los detalles del producto correspondiente al ID proporcionado.