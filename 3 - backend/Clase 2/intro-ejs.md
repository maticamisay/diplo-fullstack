  # Express.js y EJS: Plantillas dinámicas para aplicaciones web

  Express.js es un framework web popular y flexible para Node.js, mientras que EJS (Embedded JavaScript) es un motor de plantillas que se integra con Express para generar contenido dinámico en las aplicaciones web. En este archivo, exploraremos en detalle cómo utilizar EJS con Express, incluyendo ejemplos, estructura de archivos, formas de uso y más.

  ## ¿Qué es EJS?

  EJS es un motor de plantillas que permite combinar HTML y JavaScript para generar contenido dinámico en el lado del servidor. A diferencia de HTML estático, las plantillas EJS pueden incluir lógica y variables, lo que facilita la generación de páginas web personalizadas basadas en datos dinámicos.

  ## Instalación de EJS

  Para comenzar a utilizar EJS en tu proyecto Express, debes instalarlo como una dependencia. Ejecuta el siguiente comando en tu terminal:

  ```bash
  npm install ejs
  ```

  ## Configuración de EJS en Express

  Para utilizar EJS como motor de plantillas en tu aplicación Express, debes configurarlo en el archivo principal de tu aplicación (por ejemplo, `app.js` o `index.js`). Asegúrate de requerir EJS y configurarlo como el motor de plantillas predeterminado de Express:

  ```javascript
  const express = require("express");
  const app = express();
  const ejs = require("ejs");

  // Configuración del motor de plantillas EJS
  app.set("view engine", "ejs");
  ```

  En el código anterior, hemos requerido el módulo EJS y configurado Express para usarlo como motor de plantillas predeterminado.

  ## Estructura de archivos y directorios

  La estructura de archivos y directorios para trabajar con EJS en Express puede variar según tus necesidades y preferencias. Sin embargo, aquí hay una estructura básica comúnmente utilizada:

  ```
  - proyecto-express
    - node_modules
    - public
      - css
      - js
      - images
    - views
      - partials
      - pages
    - app.js
    - package.json
  ```

  En esta estructura, el directorio `public` almacena archivos estáticos como hojas de estilo CSS, archivos JavaScript e imágenes. El directorio `views` contiene las plantillas EJS, que se dividen en subdirectorios como `partials` (para componentes reutilizables) y `pages` (para las páginas específicas).

  ## Uso de EJS en Express

  Una vez que has configurado EJS y la estructura de archivos, puedes comenzar a utilizarlo para generar contenido dinámico en tus vistas.

  ### Renderización de vistas

  Para renderizar una vista EJS y enviarla como respuesta al cliente, utiliza el método `render` en tu ruta correspondiente. Pasa el nombre de la plantilla EJS (sin la extensión `.ejs`) y un objeto de datos como argumentos.

  ```javascript
  app.get("/", (req, res) => {
    const data = { name: "John Doe", age: 30 };
    res.render("index", { data });
  });
  ```

  En el ejemplo anterior, estamos renderizando la vista `index.ejs` y pasando un objeto `data` como contexto.

  ### Uso de variables en plantillas EJS

  Dentro de las plantillas EJS, puedes acceder a los datos pasados ​​y utilizar variables para generar contenido dinámico. Utiliza la sintaxis `<

  %= variable %>` para imprimir el valor de una variable.

  ```html
  <h1>Bienvenido <%= data.name %>!</h1>
  <p>Tu edad es <%= data.age %> años.</p>
  ```

  En este ejemplo, estamos imprimiendo los valores de las variables `name` y `age` en la vista EJS.

  ### Lógica condicional y bucles en plantillas EJS

  EJS también admite lógica condicional y bucles para controlar el flujo y la generación de contenido dinámico en las vistas. Puedes utilizar las estructuras de control `if`, `else if`, `else` y los bucles `for` o `forEach`.

  ```html
  <% if (data.age >= 18) { %>
  <p>Eres mayor de edad.</p>
  <% } else { %>
  <p>Eres menor de edad.</p>
  <% } %>

  <ul>
    <% for (let i = 0; i < data.items.length; i++) { %>
    <li><%= data.items[i] %></li>
    <% } %>
  </ul>
  ```

  En el ejemplo anterior, estamos utilizando una declaración `if` para mostrar diferentes mensajes según la edad y un bucle `for` para generar una lista de elementos.

  ### Partials en EJS

  Los partials en EJS son componentes reutilizables que se pueden incluir en varias vistas. Puedes crear archivos parciales en el directorio `partials` y luego incluirlos en tus vistas utilizando la etiqueta `<%- include('partials/nombre-partial') %>`. Por ejemplo:

  ```html
  <!-- partial.ejs -->
  <p>Este es un partial.</p>

  <!-- index.ejs -->
  <h1>Página principal</h1>
  <%- include('partials/partial') %>
  ```

  En este ejemplo, hemos creado un partial llamado `partial.ejs` y lo hemos incluido en la vista `index.ejs`.

  ## Conclusion

  En este archivo, hemos explorado el uso de EJS en Express para generar contenido dinámico en aplicaciones web. Hemos aprendido cómo configurar EJS en Express, estructurar archivos y directorios, y utilizar EJS para renderizar vistas, utilizar variables, lógica condicional, bucles y partials.

  EJS es una poderosa herramienta para generar contenido dinámico en el lado del servidor y personalizar las vistas en función de los datos. Continúa explorando y experimentando con EJS para aprovechar al máximo su potencial en tus aplicaciones web con Express.

  ¡Disfruta de la generación de contenido dinámico con EJS y Express!
