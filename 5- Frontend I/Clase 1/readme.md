# DOM, Document, Window y Selectores en JavaScript

## Tabla de Contenidos

1. [DOM (Modelo de Objetos del Documento)](#dom)
2. [Document](#document)
3. [Window](#window)
4. [Selectores](#selectores)

<a name="dom"></a>

## 1. DOM (Modelo de Objetos del Documento)

El DOM es una representación estructurada de un documento HTML o XML en forma de árbol. Permite a los programas y scripts acceder y modificar el contenido, estructura y estilo de las páginas web.

### Estructura del DOM

- **Document**: Representa toda la página o el documento completo.
- **Element**: Representa un elemento o etiqueta HTML.
- **Attr**: Representa un atributo de una etiqueta HTML.
- **Text**: Representa el texto contenido en un elemento HTML.

### Manipulación del DOM

Se puede acceder y modificar el DOM utilizando métodos y propiedades en JavaScript, como `getElementById`, `createElement`, `appendChild`, etc.

<a name="document"></a>

## 2. Document

El objeto `document` es una parte integral del DOM y representa todo el documento HTML. Proporciona métodos y propiedades para acceder y modificar elementos, atributos y estilos dentro de la página.

### Métodos comunes

- `getElementById(id)`: Obtiene un elemento por su ID.
- `getElementsByClassName(nombre)`: Obtiene elementos por su clase.
- `querySelector(selector)`: Obtiene el primer elemento que coincide con el selector.

<a name="window"></a>

## 3. Window

El objeto `window` representa la ventana que contiene un documento DOM. Proporciona métodos y propiedades para interactuar con el navegador y controlar aspectos como el tamaño de la ventana, eventos, temporizadores y más.

### Métodos comunes

- `alert(mensaje)`: Muestra una ventana emergente con un mensaje.
- `setTimeout(función, milisegundos)`: Establece un temporizador.
- `addEventListener(evento, función)`: Agrega un oyente de eventos.

<a name="selectores"></a>

## 4. Selectores

Los selectores son patrones que se utilizan para seleccionar elementos dentro del DOM. Se pueden utilizar con métodos como `querySelector` y `querySelectorAll`.

### Tipos comunes de selectores

- **Selector de ID**: `#id`
- **Selector de Clase**: `.clase`
- **Selector de Tipo**: `etiqueta`
- **Selector de Atributo**: `[atributo]`
- **Selector Descendiente**: `padre hijo`

### Ejemplo

```javascript
var elemento = document.querySelector("#miID .miClase etiqueta");
```
