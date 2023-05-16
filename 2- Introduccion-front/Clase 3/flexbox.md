# Flexbox

Flexbox es una técnica de diseño CSS que permite la creación de diseños flexibles y adaptables a diferentes tamaños de pantalla y dispositivos.

En un diseño flexbox, se define un contenedor (parent) y dentro de este se colocan los elementos que se quieren distribuir de manera flexible (children).

Para utilizar flexbox, se debe establecer en el contenedor la propiedad `display` con el valor `flex` o `inline-flex`, dependiendo del comportamiento deseado.

## Propiedades del contenedor

### display

La propiedad `display` se utiliza para definir el tipo de visualización del contenedor. Para utilizar flexbox, se debe establecer `display: flex` o `display: inline-flex` en el contenedor.

### flex-direction

La propiedad `flex-direction` se utiliza para definir la dirección en la que los elementos se distribuyen dentro del contenedor. Los valores posibles son `row`, `column`, `row-reverse` y `column-reverse`.

### justify-content

La propiedad `justify-content` se utiliza para alinear los elementos en el eje principal (main axis) del contenedor. Los valores posibles son `flex-start`, `flex-end`, `center`, `space-between` y `space-around`.

### align-items

La propiedad `align-items` se utiliza para alinear los elementos en el eje secundario (cross axis) del contenedor. Los valores posibles son `flex-start`, `flex-end`, `center`, `stretch` y `baseline`.

### flex-wrap

La propiedad `flex-wrap` se utiliza para especificar si los elementos deben colocarse en una sola línea o en varias líneas dentro del contenedor. Los valores posibles son `nowrap`, `wrap` y `wrap-reverse`.

### align-content

La propiedad `align-content` se utiliza para alinear las líneas de elementos en el eje secundario (cross axis) cuando estos se distribuyen en varias líneas. Los valores posibles son `flex-start`, `flex-end`, `center`, `space-between`, `space-around` y `stretch`.

## Propiedades de los elementos

### order

La propiedad `order` se utiliza para definir el orden en que se muestran los elementos dentro del contenedor. El valor predeterminado es `0`.

### flex-grow

La propiedad `flex-grow` se utiliza para definir la capacidad de crecimiento de un elemento dentro del contenedor en relación con los demás elementos. El valor predeterminado es `0`.

### flex-shrink

La propiedad `flex-shrink` se utiliza para definir la capacidad de encogimiento de un elemento dentro del contenedor en relación con los demás elementos. El valor predeterminado es `1`.

### flex-basis

La propiedad `flex-basis` se utiliza para definir el tamaño base de un elemento antes de aplicar la distribución de espacio disponible en el contenedor.

### flex

La propiedad `flex` es una abreviatura de las propiedades `flex-grow`, `flex-shrink` y `flex-basis`, en ese orden.

### align-self

La propiedad `align-self` se utiliza para sobrescribir la alineación establecida por la propiedad `align-items` en un elemento específico. Los valores posibles son los mismos que para `align-items`.

## Conclusión

Flexbox es una técnica de diseño CSS muy útil para la creación de diseños flexibles y adaptables. Con su uso se puede lograr una mayor facilidad en el diseño y distribución de elementos dentro de un sitio web.
