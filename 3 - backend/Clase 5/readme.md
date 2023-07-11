# Middlewares, Función `next()` y Validación en Express.js

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Función `next()`](#función-next)
3. [Express-validator](#express-validator)
4. [Resumen](#resumen)
5. [Recursos Adicionales](#recursos-adicionales)

## Introducción

Un middleware en Express.js es una función que tiene acceso al objeto de solicitud (request), al objeto de respuesta (response) y a la función de middleware siguiente en el ciclo de solicitud/respuesta de la aplicación, denotada comúnmente como `next`.

Los middleware pueden realizar las siguientes tareas:

- Ejecutar cualquier código.
- Hacer cambios en la solicitud y los objetos de respuesta.
- Terminar el ciclo de solicitud/respuesta.
- Llamar al siguiente middleware en la pila.

Un middleware se define en una aplicación Express utilizando el método `use()` del objeto de aplicación, o como parte de la definición de una ruta.

## Función `next()`

La función `next()` es una función que se pasa como argumento a cada middleware y que, cuando se llama, pasa el control al siguiente middleware en la pila. Si el middleware actual no termina el ciclo de solicitud/respuesta, debe llamar a `next()` para pasar el control al siguiente middleware. De lo contrario, la solicitud quedará colgada.

Un ejemplo de middleware en Express.js sería:

```javascript
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next(); // Pasando el control al siguiente middleware
});
```

Este middleware se ejecuta en cada solicitud y registra la fecha y hora actual en la consola. Luego, llama a `next()` para pasar el control al siguiente middleware en la pila.

## Express-validator

Express-validator es un conjunto de middlewares que se utilizan para validar y sanear datos en una aplicación Express.js.

Para usar express-validator, primero debes instalarlo con npm:

```
npm install --save express-validator
```

Luego, puedes importarlo en tu archivo y usarlo para validar los datos de la solicitud:

```javascript
const { body, validationResult } = require("express-validator");

app.post(
  "/user",
  // Usando express-validator para validar el campo "email"
  body("email").isEmail(),

  // Usando express-validator para validar el campo "password"
  body("password").isLength({ min: 5 }),

  (req, res, next) => {
    // Obteniendo los resultados de la validación
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // Si hay errores de validación, envía una respuesta con los errores
      return res.status(400).json({ errors: errors.array() });
    }

    // Si no hay errores de validación, pasa el control al siguiente middleware
    next();
  }
);
```

En este caso, el middleware de express-validator se utiliza para validar que el campo 'email' en el cuerpo de la solicitud es un correo electrónico válido y que el campo 'password' tiene al menos 5 caracteres de longitud.

## Resumen

En este README, hemos aprendido sobre los middlewares en Express.js, la función `next()`, y cómo se pueden utilizar para validar y sanear datos con express-validator. Los middlewares y la función `next()` son una parte esencial de Express.js que te permiten añadir funcionalidades personalizadas y reutilizables a tus aplicaciones.

## Recursos Adicionales

Link hacia las instrucciones de la aplicacion de productos:

1. [Instrucciones aplicacion productos](./instrucciones.md)
