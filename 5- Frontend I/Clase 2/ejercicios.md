# Ejercicios de Práctica: Manipulación del DOM y Manejo de Eventos

## Tabla de Contenidos

1. [Mostrar información del producto al pasar el mouse](#ejercicio-1)
2. [Evitar la propagación del evento en un elemento padre](#ejercicio-2)
3. [Mostrar la lista de estudiantes](#ejercicio-3)

<a name="ejercicio-1"></a>

## 1. Mostrar información del producto al pasar el mouse

**Consigna**:  
Dentro de un elemento `<article>`, tienes un título, un precio y un botón. El objetivo es mostrar los detalles del producto (su precio) en un alerta cuando el usuario pase el mouse sobre el botón "Ver Detalles".

**Pistas**:

- Utiliza el método `querySelector` para seleccionar el botón dentro del `<article>`.
- Agrega un evento "mouseover" al botón.
- Utiliza `parentNode` para acceder al nodo padre del botón y `querySelector` para obtener el precio del producto.
- Usa `alert` para mostrar el precio.

<a name="ejercicio-2"></a>

## 2. Evitar la propagación del evento en un elemento padre

**Consigna**:  
Tienes tres elementos anidados: un abuelo, un padre y un nieto. El objetivo es que, al hacer clic en el padre, se muestre un mensaje en la consola, pero este clic no debe afectar al abuelo. Si haces clic en el nieto, se debe mostrar otro mensaje, y si haces clic en el abuelo, un tercer mensaje.

**Pistas**:

- Utiliza el método `querySelector` para seleccionar cada elemento.
- Agrega un evento "click" a cada elemento.
- Utiliza `event.stopPropagation()` en el padre para evitar que el evento se propague al abuelo.

<a name="ejercicio-3"></a>

## 3. Mostrar la lista de estudiantes

**Consigna**:  
Tienes un array de estudiantes y un elemento `<div>` vacío en tu HTML. El objetivo es renderizar una lista (`<ul>`) de estudiantes dentro de ese `<div>` usando JavaScript.

**Pistas**:

- Utiliza el método `querySelector` para seleccionar el `<div>`.
- Usa un bucle `forEach` para recorrer el array de estudiantes.
- Para cada estudiante, crea un elemento `<li>`, establece su contenido de texto y añádelo a un elemento `<ul>`.
- Finalmente, añade el elemento `<ul>` al `<div>`.
