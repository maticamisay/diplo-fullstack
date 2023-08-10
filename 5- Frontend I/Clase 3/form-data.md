# Explicación del Código: Extracción de Datos de Formularios

```js
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  form.reset();
});
```

El código anterior crea una nueva instancia del objeto `FormData`, que es un objeto incorporado en JavaScript que te permite construir fácilmente un conjunto de pares clave/valor que representan campos de formularios y sus valores. El objeto `FormData` se construye pasando una referencia al elemento de formulario HTML del que se desea extraer datos. En este caso, se supone que la variable `form` es una referencia a un elemento de formulario HTML.

Una vez creado el objeto `FormData`, el código utiliza el método `Object.fromEntries()` para convertir el objeto `FormData` en un objeto JavaScript simple. El método `Object.fromEntries()` es una adición relativamente nueva al lenguaje JavaScript, y te permite convertir fácilmente un array de pares clave/valor en un objeto. En este caso, el objeto `FormData` es esencialmente un array de pares clave/valor, donde las claves son los nombres de los campos del formulario y los valores son los valores de esos campos.

Al convertir el objeto `FormData` en un objeto JavaScript simple, el código ahora puede manipular fácilmente los datos del formulario usando métodos y sintaxis estándar de objetos JavaScript. Esto puede ser útil para realizar validaciones, formateo u otras operaciones en los datos del formulario antes de enviarlos a un servidor.

En resumen, este código es una forma concisa y efectiva de extraer datos de un formulario HTML y convertirlos en un objeto JavaScript simple. Sin embargo, vale la pena señalar que este código asume que los datos del formulario están bien formados y no realiza ninguna validación o manejo de errores. Además, el uso del método `Object.fromEntries()` puede no ser compatible en todos los navegadores, por lo que es importante probar este código a fondo en diferentes plataformas y entornos.

## Alternativa a new FormData(form)

```js
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombre = form.name.value;
  let password = form.password.value;
  let usuario = {
    nombre,
    password,
  };
  console.log(usuario);
  form.name.value = "";
  form.password.value = "";
});
```
