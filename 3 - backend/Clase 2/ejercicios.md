# Ejercicios EJS - Parte 1

## Ejercicio 1: Saludo personalizado

Crea una vista EJS que muestre un mensaje de saludo personalizado utilizando una variable. El mensaje debe incluir el nombre del usuario que se pasa como dato en la renderización. La variable nombre la obtendremos por params dinámicamente.

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