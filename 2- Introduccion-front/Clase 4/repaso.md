# Repaso de HTML y CSS

En este ejercicio práctico, repasaremos los conceptos básicos de HTML y CSS, así como algunos aspectos clave del diseño y la adaptabilidad en la web. A continuación, se detallan las consignas para cada sección:

## HTML

### ¿Qué es HTML?

En esta sección, brindaremos una breve explicación sobre qué es HTML y su importancia en la construcción de sitios web.

### Estructura básica de un documento HTML

En esta parte del ejercicio, solicitamos crear la estructura básica de un documento HTML, incluyendo las etiquetas `<html>`, `<head>` y `<body>`. También se debe añadir un título utilizando la etiqueta `<title>`.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Título de la página</title>
  </head>
  <body>
    <!-- Contenido de la página -->
  </body>
</html>
```

### Etiquetas de texto

Aquí, se pide utilizar las etiquetas de texto más comunes, como `<h1>`, `<p>`, `<strong>`, `<em>`, `<a>`, entre otras. Se debe crear un párrafo y aplicar diferentes estilos utilizando estas etiquetas.

```html
<p>Este es un párrafo de ejemplo.</p>
<h1>Título de ejemplo</h1>
<strong>Texto en negrita</strong>
<em>Texto en cursiva</em>
<a href="#">Enlace de ejemplo</a>
```

### Etiquetas de lista

En esta consigna, se solicita utilizar las etiquetas de lista (`<ul>`, `<ol>`, `<li>`) para crear una lista de elementos. Puede ser una lista ordenada o desordenada, y se deben añadir al menos cinco elementos.

```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>Elemento 4</li>
  <li>Elemento 5</li>
</ul>
```

### Ejemplos prácticos

En esta última parte del repaso de HTML, se pide aplicar los conceptos previamente aprendidos para crear ejemplos prácticos. Esto puede incluir la creación de encabezados, párrafos, enlaces, listas, etc. La creatividad está permitida para demostrar el conocimiento adquirido.

```html
<h1>Título de página</h1>
<p>Este es un párrafo de ejemplo que contiene <a href="#">un enlace</a>.</p>
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
```

## CSS

### ¿Qué es CSS?

Aquí, se dará una breve explicación sobre qué es CSS y su papel en el diseño de sitios web.

### Sintaxis básica de CSS

En esta sección, se debe explicar la sintaxis básica de CSS, incluyendo cómo se seleccionan los elementos HTML y cómo se aplican las propiedades.

```css
selector {
  propiedad: valor;
}
```

### Propiedades CSS básicas

En esta consigna, se solicita utilizar las propiedades CSS básicas como `color`, `background-color`, `font-size` y `font-family`. Se debe aplicar cada una de estas propiedades a diferentes elementos HTML.

```css
p {
  color: blue;
  background-color: yellow;
  font-size: 16px;
  font-family: Arial, sans-serif;
}
```

### Modelo caja

El modelo de caja en CSS describe cómo se representa un elemento HTML en la página, y está compuesto por cuatro áreas principales: el contenido, el padding, el border y el margin.

## Ejemplos prácticos

### Navbar y Footer con Flexbox

Ejemplo de estilos de una barra de navegación

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Navbar y Footer con Flexbox</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <nav class="navbar">
      <a href="#" class="navbar__logo">Logo</a>
      <ul class="navbar__menu">
        <li class="navbar__item">
          <a href="#" class="navbar__link">Inicio</a>
        </li>
        <li class="navbar__item">
          <a href="#" class="navbar__link">Acerca</a>
        </li>
        <li class="navbar__item">
          <a href="#" class="navbar__link">Servicios</a>
        </li>
        <li class="navbar__item">
          <a href="#" class="navbar__link">Contacto</a>
        </li>
      </ul>
    </nav>

    <div class="content">
      <h1>Bienvenido</h1>
      <p>Contenido de la página...</p>
    </div>

    <footer class="footer">
      <p>© 2023 - Todos los derechos reservados</p>
    </footer>
  </body>
</html>
```

```css
/* styles.css */

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: white;
  padding: 10px;
}

.navbar__logo {
  color: white;
  font-size: 24px;
  text-decoration: none;
}

.navbar__menu {
  display: flex;
  list-style: none;
}

.navbar__item {
  margin-right: 10px;
}

.navbar__link {
  color: white;
  text-decoration: none;
}

.content {
  padding: 20px;
}

h1 {
  font-size: 32px;
}

p {
  font-size: 16px;
}

.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
}
```

En este ejemplo, hemos creado un navbar utilizando Flexbox. La barra de navegación (nav.navbar) utiliza display: flex para alinear los elementos horizontalmente y justify-content: space-between para distribuirlos de manera equitativa en el espacio disponible. Los enlaces del menú (ul.navbar**menu y li.navbar**item) se muestran en línea y se les da un margen derecho para separarlos.

El estilo general del navbar incluye un fondo de color de fondo (background-color: #333) y texto blanco (color: white). Los estilos de fuente y espaciado se definen para el logo (a.navbar**logo) y los enlaces (a.navbar**link).

En el contenido de la página (div.content), se han aplicado estilos básicos para el título (h1) y el párrafo (p).

El footer (footer.footer) utiliza estilos similares al navbar, incluyendo un fondo de color de fondo (background-color: #333), texto blanco (color: white) y un área de padding (padding: 10px) para separarlo del contenido.

Recuerda vincular el archivo CSS (styles.css) al archivo HTML para que se apliquen los estilos correctamente.

Este es solo un ejemplo básico de cómo se pueden crear un navbar y un footer utilizando Flexbox. Puedes personalizar los estilos y la disposición según tus necesidades.

### Ejemplo de Cards de Productos con Flexbox y Media Queries

Aquí tienes un ejemplo de cómo colocar 3 cards de productos utilizando Flexbox y Media Queries para hacerlos responsivos:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Cards de Productos</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="card">
      <img src="https://placehold.co/600x400" alt="Producto 1">
      <h3>Producto 1</h3>
      <p>Descripción del Producto 1.</p>
    </div>
    <div class="card">
      <img src="https://placehold.co/600x400" alt="Producto 2">
      <h3>Producto 2</h3>
      <p>Descripción del Producto 2.</p>
    </div>
    <div class="card">
      <img src="https://placehold.co/600x400" alt="Producto 3">
      <h3>Producto 3</h3>
      <p>Descripción del Producto 3.</p>
    </div>
  </div>
</body>
</html>
```

```css
/* styles.css */

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.card {
  flex-basis: calc(33.33% - 20px);
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f4f4f4;
  box-sizing: border-box;
}

.card img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

@media screen and (max-width: 768px) {
  .card {
    flex-basis: calc(50% - 20px);
  }
}

@media screen and (max-width: 480px) {
  .card {
    flex-basis: 100%;
  }
}
```

En este ejemplo, hemos creado un contenedor (`div.container`) que utiliza Flexbox para alinear las 3 cards de productos. Las cards (`div.card`) tienen un ancho flexible utilizando `flex-basis` y se les aplica un margen inferior (`margin-bottom`) y un espaciado interno (`padding`).

Las imágenes de los productos (`img`) se ajustan automáticamente utilizando un ancho del 100% y una altura automática.

Hemos agregado media queries para hacer que las cards sean responsivas en diferentes tamaños de pantalla. En una pantalla con un ancho máximo de 768px, las cards se ajustarán a un ancho del 50% del contenedor (`flex-basis: calc(50% - 20px)`). En una pantalla con un ancho máximo de 480px, las cards se ajustarán a un ancho del 100% del contenedor (`flex-basis: 100%`).

Recuerda reemplazar las imágenes de ejemplo (`product1.jpg`, `product2.jpg`, `product3.jpg`) con las imágenes reales de los productos.

Este es solo un ejemplo básico de cómo utilizar Flexbox y Media Queries para crear cards de productos responsivos. Puedes personalizar los estilos y la disposición según tus necesidades y agregar más detalles a las cards según tus requisitos de diseño.