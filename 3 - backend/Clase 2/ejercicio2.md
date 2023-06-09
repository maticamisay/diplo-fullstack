# Express.js y EJS: Lista de elementos

En este ejercicio, el objetivo es crear una vista EJS que muestre una lista de elementos utilizando un bucle `forEach`. Se pasará un array de elementos como dato en la renderización de la vista y se generarán los elementos de la lista dinámicamente.

## Pasos del ejercicio

1. Crea una vista EJS llamada `lista.ejs`.
2. En el archivo `app.js` de tu aplicación Express, define una ruta que renderice la vista `lista.ejs` y pase un array de elementos como dato en la renderización.
3. En la vista `lista.ejs`, utiliza un bucle `forEach` para iterar sobre el array de elementos y generar los elementos de la lista.

## Ejemplo de código

### Paso 1: Crear la vista `lista.ejs`

```html
<!-- lista.ejs -->
<ul>
  <% elementos.forEach(function(elemento) { %>
  <li><%= elemento %></li>
  <% }) %>
</ul>
```

En la vista `lista.ejs`, hemos creado una lista desordenada `<ul>`. Dentro del bucle `forEach`, generamos un elemento de lista `<li>` para cada elemento en el array `elementos`.

### Paso 2: Definir la ruta en `app.js`

```javascript
// app.js
app.get("/lista", (req, res) => {
  const elementos = ["Elemento 1", "Elemento 2", "Elemento 3"];
  res.render("lista", { elementos });
});
```

En el archivo `app.js`, hemos definido una ruta `/lista` que renderiza la vista `lista.ejs`. Pasamos un array de elementos ficticios en el objeto de datos `{ elementos }`.

### Paso 3: Ejecutar la aplicación

Al ejecutar la aplicación y acceder a la ruta `/lista`, la vista `lista.ejs` se renderizará y mostrará la lista de elementos generados por el bucle `forEach`.

## Conclusion

En este ejercicio, hemos utilizado Express y EJS para crear una vista que muestra una lista de elementos utilizando un bucle `forEach`. El array de elementos se pasó como dato en la renderización de la vista, permitiendo que los elementos se generen dinámicamente.

Este ejercicio les brinda a los alumnos la oportunidad de practicar la utilización de bucles en EJS y la renderización de datos dinámicos en vistas. Pueden personalizar la lista de elementos y experimentar con diferentes funcionalidades de EJS y Express.

¡Anima a tus alumnos a explorar más sobre el uso de EJS y cómo pueden aplicarlo en sus propias aplicaciones web!
