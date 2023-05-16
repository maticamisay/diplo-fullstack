# Selectores CSS: `:root`, `html`, `body`, `*`

Este documento describe la diferencia entre los selectores `:root`, `html`, `body` y `*` en CSS.

## Selector `:root`

El selector `:root` es una pseudo-clase que selecciona el elemento raíz de un documento. En un documento HTML, el elemento raíz es `<html>`. La ventaja de usar `:root` sobre `html` es que `:root` tiene una especificidad más alta. Es especialmente útil para definir variables CSS, ya que las variables definidas en `:root` son accesibles globalmente en todo el documento.

## Selector `html`

El selector `html` selecciona el elemento `<html>`, que es el elemento raíz de un documento HTML. Los estilos aplicados a `html` se heredan en todo el documento, a menos que se anulen en elementos descendientes.

## Selector `body`

El selector `body` selecciona el elemento `<body>`. Este selector se utiliza normalmente para estilizar el contenido visible de la página. Aunque el `<body>` es un descendiente del `<html>`, en la práctica, muchos navegadores tienen reglas específicas que pueden hacer que algunos estilos se apliquen de manera diferente cuando se colocan en `body` en lugar de `html`.

## Selector `*`

El selector `*` es el selector universal en CSS. Selecciona todos los elementos en la página. Usar `*` puede ser costoso en términos de rendimiento, especialmente en documentos grandes, ya que el navegador tiene que comprobar cada elemento individualmente. También puede tener efectos no deseados al aplicar estilos a elementos que no quieres estilizar, a menos que se anulen explícitamente en otro lugar.

**Nota:** Los estilos en CSS se aplican en orden, y los estilos posteriores pueden anular los estilos anteriores si tienen la misma especificidad. Por lo tanto, la ubicación y el orden de estos selectores en tu hoja de estilos también pueden afectar cómo se aplican los estilos.
