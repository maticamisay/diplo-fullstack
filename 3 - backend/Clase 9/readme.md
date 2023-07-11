# Protocolo HTTP y API REST

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [HTTP](#http)
3. [API REST](#api-rest)
4. [Resumen](#resumen)
5. [Recursos Adicionales](#recursos-adicionales)

## Introducción

El protocolo HTTP (Protocolo de Transferencia de Hipertexto) es un conjunto de reglas para la transferencia de archivos (texto, imágenes, video, y otros multimedia) en la web. Es la base de cualquier intercambio de datos en la web y es un protocolo sin estado, lo que significa que cada solicitud HTTP se puede considerar independiente de las demás.

## HTTP

HTTP define un conjunto de métodos de petición que indican la acción deseada para un recurso dado. Aunque estos también pueden ser palabras, estos métodos son a menudo llamados HTTP verbs. Cada uno de ellos implementa una semántica diferente, pero algunos rasgos comunes son compartidos por un grupo de ellos. Por ejemplo:

- GET: Recupera datos de un recurso.
- POST: Envía datos para crear un recurso.
- PUT: Actualiza un recurso existente con datos nuevos.
- DELETE: Elimina un recurso.

Además, HTTP ofrece códigos de estado de respuesta para informar al cliente sobre el resultado de su petición. Algunos de los más comunes son:

- 200 OK: La petición ha tenido éxito.
- 404 Not Found: El servidor no puede encontrar el recurso solicitado.
- 500 Internal Server Error: El servidor ha encontrado una situación que no sabe cómo manejarla.

## API REST

Una API (Interfaz de Programación de Aplicaciones) es un conjunto de reglas que permite que diferentes programas de software interactúen entre sí. REST (Representational State Transfer) es un estilo arquitectónico que se utiliza para diseñar APIs de red. Las APIs REST se basan en HTTP, y utilizan sus métodos y códigos de estado.

En una API REST:

- Los datos se organizan en recursos, cada uno de los cuales se puede acceder a través de una URL única.
- Para realizar operaciones en los recursos, se utilizan los métodos HTTP (GET para recuperar un recurso, POST para crear un nuevo recurso, PUT para actualizar un recurso existente y DELETE para eliminar un recurso).
- Los datos pueden ser devueltos en diferentes formatos, pero el formato más común es JSON.

Un ejemplo de un endpoint de una API REST podría ser `http://mi-api.com/usuarios/1`, que devolvería los datos del usuario con el ID 1 en formato JSON.

## Resumen

En este README, hemos aprendido sobre el protocolo HTTP y las APIs REST. HTTP es la base de cualquier intercambio de datos en la web y proporciona un conjunto de métodos y códigos de estado para interactuar con los recursos. Las APIs REST son una forma de diseñar APIs basadas en HTTP y proporcionan una manera de interactuar con los datos de una manera estructurada y predecible.

## Recursos Adicionales

- [MDN Web Docs: HTTP](https://developer.mozilla.org/es/docs/Web/HTTP)
- [MDN Web Docs: REST](https://developer.mozilla.org/es/docs/Glossary/REST)
- [Diseño de APIs REST](https://www.youtube.com/watch?v=7YcW25PHnAA)
- [HTTP Status Codes](https://httpstatuses.com/)
- [README Diseño de API Rest](./diseno-api.md)
