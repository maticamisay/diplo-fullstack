# Proyecto Express - Ejs - Cookies & Sessions

## Proyecto de prueba para el manejo de cookies y sessions en Express

Crearemos un proyecto donde practicaremos el manejo de cookies y sessions en Express, con generación de vistas dinámicas con EJS, lectura y escritura de archivos JSON, validación de formularios con express-validator, y manejo de errores.

## Parte 1 - Creación de la estructura del proyecto

### Inicializacion e instalación

Instalamos los paquetes necesarios para el proyecto

```
npm init -y
npm install express express-session cookie-parser ejs express-validator
npm install nodemon -D
```

Configuramos el comando de desarrollo en el package.json

```
"scripts": {
    "dev": "nodemon app.js"
  },
```

### Estructura de carpetas y archivos

1. Creacion del archivo app, configuración de express y creación de servidor
2. Creación de carpeta views
3. Creación de carpeta routes y rutas principales del proyecto, tendremos que crear un archivo por cada ruta
4. Creación de carpeta controller y controladores principales del proyecto, tendremos que crear un archivo por cada controlador

## Parte 2 - Creación de las vistas

1. Creación de la vista principal
2. Creación de la vista de login
3. Creación de la vista de registro
4. Creación de la vista de perfil

## Parte 3 - Creación de las rutas y controladores

1. Creación de la ruta principal
2. Creación de la ruta de login
3. Creación de la ruta de registro
4. Creación de la ruta de perfil
5. Creación de los controladores de login, registro y perfil

## Parte 4 - REGISTER: Creación de las validaciones con express-validator

1. Creación de las validaciones de formulario de register
2. Agregar el middleware a la ruta de register
3. Renderizar los errores en la vista de register si los hay, sino redireccionar a la vista de perfil

## Archivo USUARIOS.JSON

Debe ser un array de objetos con la siguiente estructura:

```
[
    {
        "email": "example@gmail.com",
        "password": "$2b$10$UEhs00CicTlcIc3K3Zjf4uKqyvw4F/iSrbzfFntfIk/W5qDGPu.2O"
    },
     {
        "email": "example-two@gmail.com",
        "password": "$2b$10$UEhs00CicTlcIkg83Zjf4uKqyvw4F/iSrbzfFntfIk/W5qDGPu.2O"
    }
]
```


## Parte 5 - REGISTER: Creación de la lógica de register

1. Creación de la lógica de register, agregar bcrypt para encriptar la contraseña
2. Leer el archivo json de usuarios
3. Guardar en el json el nuevo usuario
4. Redireccionar a la vista de perfil

## Parte 6 - LOGIN: Creación de la lógica de login

1. Creación de la lógica de login, agregar bcrypt para comparar la contraseña
2. Leer el json para obtener la información del usuario que intenta loguearse
3. Iterar sobre el array de usuarios para encontrar el usuario que intenta loguearse
4. Si el usuario existe, comparar la contraseña
5. Si la contraseña es correcta, crear una session con la información del usuario logueado
6. Si la contraseña es incorrecta, renderizar la vista de login con el error
7. Si el usuario no existe, renderizar la vista de login con el error
8. Si el usuario existe y la contraseña es correcta, redireccionar a la vista de perfil


## Parte 7 - Añadir express-session y cookie-parser a LOGIN y REGISTER

1. Agregar express-session y cookie-parser para manejar las cookies y sessions
2. Crear una session con la información del usuario logueado
