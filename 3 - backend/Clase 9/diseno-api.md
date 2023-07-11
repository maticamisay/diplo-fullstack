# Diseño de API REST y mejores prácticas

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Principios de diseño de una API REST](#principios-de-diseño-de-una-api-rest)
3. [Mejores Prácticas de API REST](#mejores-prácticas-de-api-rest)
4. [Resumen](#resumen)
5. [Recursos Adicionales](#recursos-adicionales)

## Introducción

En el README anterior, hemos aprendido sobre el protocolo HTTP y las API REST. Ahora, vamos a profundizar en los principios de diseño y las mejores prácticas al crear API REST para que sean eficientes, seguras y fáciles de usar.

## Principios de diseño de una API REST

### Recursos

Las API REST se organizan alrededor de los recursos, que son cualquier objeto, entidad o cosa que la API puede proporcionar información sobre. Cada recurso tiene una URL única, y utilizamos los métodos HTTP para interactuar con ellos.

Por ejemplo, en una API para una aplicación de tareas, podríamos tener los siguientes recursos:

- `GET /tareas`: Devuelve una lista de todas las tareas.
- `POST /tareas`: Crea una nueva tarea.
- `GET /tareas/{id}`: Devuelve información sobre una tarea específica.
- `PUT /tareas/{id}`: Actualiza una tarea específica.
- `DELETE /tareas/{id}`: Elimina una tarea específica.

### Representación de los Recursos

En una API REST, cuando hacemos una solicitud a un recurso, lo que obtenemos a cambio es una representación de ese recurso, que es una instantánea del estado del recurso en ese momento. La representación de los recursos se realiza comúnmente en formato JSON.

## Mejores Prácticas de API REST

### Versionamiento

Es importante que las API sean versionadas para que puedan evolucionar sin romper las aplicaciones existentes. Una forma común de hacer esto es incluir la versión de la API en la URL, como `https://mi-api.com/v1/usuarios`.

### Paginación

Si un recurso puede devolver muchas entidades, es una buena práctica implementar la paginación para limitar el número de entidades devueltas en una sola solicitud.

### Uso de códigos de estado HTTP

Las API REST deben utilizar códigos de estado HTTP para indicar el resultado de una solicitud. Por ejemplo, una respuesta con código de estado 200 significa que la solicitud fue exitosa, mientras que una respuesta con código de estado 404 indica que el recurso solicitado no fue encontrado.

## Resumen

En este README, hemos explorado los principios de diseño de una API REST y algunas de las mejores prácticas para su creación. Al seguir estos principios y prácticas, podemos crear APIs que sean robustas, fáciles de usar y que se puedan mantener y escalar con el tiempo.

## Recursos Adicionales

- [Best practices for a pragmatic RESTful API](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
- [API design guide](https://cloud.google.com/apis/design)
- [Rest API Tutorial](https://restfulapi.net/)
