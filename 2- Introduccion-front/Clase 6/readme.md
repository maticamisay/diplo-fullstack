# Tablas en HTML

Las tablas HTML son una forma efectiva de presentar datos que se pueden organizar en filas y columnas, como hojas de cálculo o bases de datos. Para crear una tabla en HTML, usamos varias etiquetas relacionadas, incluyendo `<table>`, `<tr>`, `<th>` y `<td>`.

## Estructura básica de una tabla

La estructura básica de una tabla HTML es la siguiente:

```html
<table>
  <tr>
    <th>Encabezado 1</th>
    <th>Encabezado 2</th>
  </tr>
  <tr>
    <td>Dato 1</td>
    <td>Dato 2</td>
  </tr>
</table>
```

En este ejemplo:

- `<table>` es la etiqueta que crea la tabla.
- `<tr>` se usa para crear filas en la tabla.
- `<th>` se usa para crear celdas de encabezado, que suelen contener los títulos de las columnas.
- `<td>` se usa para crear celdas de datos, que contienen los datos de la tabla.

## Tablas complejas

Las tablas complejas pueden incluir elementos adicionales como `<thead>`, `<tbody>` y `<tfoot>` para la cabecera de la tabla, el cuerpo y el pie de tabla, respectivamente. También pueden usar el atributo `colspan` y `rowspan` en las celdas de la tabla para que una celda ocupe más de una celda horizontal o verticalmente.

```html
<table>
  <thead>
    <tr>
      <th>Encabezado 1</th>
      <th>Encabezado 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dato 1</td>
      <td>Dato 2</td>
    </tr>
    <tr>
      <td colspan="2">Dato 3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Pie de tabla</td>
    </tr>
  </tfoot>
</table>
```

# Propiedades CSS Avanzadas

CSS tiene una gran cantidad de propiedades que permiten personalizar completamente la apariencia de los elementos HTML, incluyendo tablas. Algunas propiedades avanzadas de CSS que pueden ser útiles incluyen `transform`, `transition`, `flex`, y `grid`.

## Transform

La propiedad `transform` se utiliza para modificar el espacio de coordenadas del modelo de formato visual CSS. Permite rotar, escalar, sesgar o trasladar un elemento. Por ejemplo:

```css
div {
  transform: rotate(30deg);
}
```

## Transition

La propiedad `transition` permite controlar la animación suave entre los estilos CSS. Puedes especificar la propiedad a animar, la duración, el método de temporización y el retraso. Por ejemplo:

```css
div {
  transition: background-color 2s ease-in-out 1s;
}
```

## Flex

Flexbox es un modelo de diseño CSS que permite manejar el espacio distribuido a lo largo de un eje flexible. Esto hace que Flex

box sea ideal para componentes de diseño de una dimensión. Por ejemplo:

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

## Grid

CSS Grid Layout es un sistema bidimensional de diseño CSS, lo que significa que puede manejar tanto columnas como filas. CSS Grid es ideal para diseños de componentes de dos dimensiones. Por ejemplo:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
```

