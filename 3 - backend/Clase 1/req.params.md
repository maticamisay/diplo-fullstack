# Express.js - req.params

El objeto `req.params` en Express.js se utiliza para acceder a los parámetros de ruta capturados en una URL. Cuando defines una ruta con parámetros dinámicos utilizando el formato `/:parametro`, Express captura los valores proporcionados en esa parte de la URL y los hace accesibles a través de `req.params`.

Por ejemplo, si tienes la siguiente ruta definida en tu aplicación Express:

```javascript
app.get("/usuario/:id", (req, res) => {
  const userId = req.params.id;
  // Resto del código...
});
```

Cuando se realiza una solicitud GET a "/usuario/123", `req.params.id` contendrá el valor "123". Puedes acceder a este valor y utilizarlo en tu código para realizar acciones específicas según el parámetro capturado.

Es importante tener en cuenta que `req.params` es un objeto que contiene todos los parámetros de ruta capturados en una solicitud. Si tienes más de un parámetro en tu ruta, puedes acceder a cada uno de ellos a través de sus respectivas claves en `req.params`.

Por ejemplo, si tienes la siguiente ruta definida:

```javascript
app.get("/usuario/:id/articulo/:articuloId", (req, res) => {
  const userId = req.params.id;
  const articleId = req.params.articuloId;
  // Resto del código...
});
```

Cuando se realiza una solicitud GET a "/usuario/123/articulo/456", `req.params.id` contendrá "123" y `req.params.articuloId` contendrá "456".

El uso de `req.params` es útil cuando necesitas capturar valores dinámicos en una URL y utilizarlos en la lógica de tu aplicación, como recuperar datos de una base de datos o generar respuestas personalizadas.

Recuerda que `req.params` solo está disponible en las rutas que capturan parámetros dinámicos. En otras rutas donde no hay parámetros, `req.params` estará vacío.

¡Experimenta con `req.params` en Express y aprovecha su capacidad para trabajar con rutas dinámicas en tus aplicaciones!