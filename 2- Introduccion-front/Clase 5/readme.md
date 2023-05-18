# Formularios en HTML

## ¿Qué es un formulario HTML?

Un formulario en HTML es una parte de una página web que permite al usuario ingresar datos y enviarlos al servidor. Los formularios pueden incluir diferentes tipos de elementos de entrada, como campos de texto, casillas de verificación, botones de radio y menús desplegables, entre otros.

## Estructura de un formulario

Para crear un formulario en HTML, se utiliza la etiqueta `<form>`. Dentro de la etiqueta `<form>`, se pueden agregar varios elementos de entrada, cada uno de los cuales está contenido dentro de una etiqueta `<input>`, `<textarea>`, `<select>` o `<button>`.

```html
<form action="/ruta_del_servidor" method="POST">
  <input type="text" name="nombre">
  <input type="submit" value="Enviar">
</form>
```

En el ejemplo anterior, el atributo `action` de la etiqueta `<form>` especifica la ruta del servidor donde se enviarán los datos del formulario. El atributo `method` especifica el método HTTP que se utilizará para enviar los datos (en este caso, POST).

## Elementos de un formulario

### Campos de texto

Los campos de texto permiten al usuario ingresar texto. Se crean con la etiqueta `<input>` y el atributo `type` igual a "text".

```html
<input type="text" name="nombre">
```

### Casillas de verificación

Las casillas de verificación permiten al usuario seleccionar una o más opciones de una lista. Se crean con la etiqueta `<input>` y el atributo `type` igual a "checkbox".

```html
<input type="checkbox" name="opcion1">
```

### Botones de radio

Los botones de radio permiten al usuario seleccionar una opción de una lista. Se crean con la etiqueta `<input>` y el atributo `type` igual a "radio".

```html
<input type="radio" name="opcion" value="opcion1">
```

### Menús desplegables

Los menús desplegables permiten al usuario seleccionar una opción de una lista. Se crean con la etiqueta `<select>` y las opciones se especifican con la etiqueta `<option>`.

```html
<select name="opcion">
  <option value="opcion1">Opción 1</option>
  <option value="opcion2">Opción 2</option>
</select>
```

## Estilo con CSS

El estilo de los formularios se puede personalizar con CSS. Los selectores de CSS se pueden usar para seleccionar elementos de formulario específicos y aplicar estilos a ellos.

```css
input[type="text"] {
  color: #333;
  border: 1px solid #ccc;
}
```

El ejemplo anterior selecciona todos los campos de texto del formulario y les aplica un color de texto de #333 y un borde de 1px y color #ccc.

## Diseño mobile-first utilizando Flexbox y Media Queries

La estrategia de diseño "mobile first" implica diseñar la versión móvil del sitio web antes de diseñar las versiones de escritorio o tablet. Esto se hace utilizando Media Queries para ajustar el diseño a medida que el tamaño de la pantalla aumenta.

Flexbox es una herramienta de CSS que permite un diseño flexible y receptivo. Se puede usar para controlar la disposición de los elementos de formulario en diferentes tamaños de pantalla.

Aquí hay un ejemplo de un formulario HTML con estilo CSS mobile-first usando Flexbox y Media Queries:

```

html
<form class="form" action="/ruta_del_servidor" method="POST">
  <input type="text" name="nombre" placeholder="Nombre">
  <input type="email" name="email" placeholder="Correo">
  <select name="opcion">
    <option value="opcion1">Opción 1</option>
    <option value="opcion2">Opción 2</option>
  </select>
  <input type="submit" value="Enviar">
</form>
```

```css
.form {
  display: flex;
  flex-direction: column;
}

input[type="text"],
input[type="email"],
select,
input[type="submit"] {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

@media (min-width: 600px) {
  .form {
    flex-direction: row;
  }

  input[type="text"],
  input[type="email"],
  select,
  input[type="submit"] {
    flex: 1;
    margin: 10px;
  }
}
```

En este ejemplo, el diseño del formulario cambia de una disposición en columna en móviles a una disposición en fila en pantallas más grandes gracias al uso de Flexbox y Media Queries.

## Conclusión

Los formularios HTML son una parte esencial de cualquier sitio web que requiere interacción del usuario. A través de la personalización de estos formularios utilizando CSS, y el uso de técnicas como Flexbox y Media Queries, podemos garantizar que nuestros formularios se vean y funcionen bien en cualquier tamaño de pantalla.
