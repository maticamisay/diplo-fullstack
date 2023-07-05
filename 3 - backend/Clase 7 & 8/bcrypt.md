## Introducción a bcrypt, hashing y encriptación

### ¿Qué es el hashing?

El hashing es un proceso que convierte una entrada (como una contraseña) en una cadena de caracteres alfanuméricos de longitud fija. Esta cadena resultante se conoce como el "hash". Una característica importante del hashing es que es unidireccional, lo que significa que no se puede obtener la contraseña original a partir del hash. En resumen, el hashing se utiliza para proteger las contraseñas almacenadas en una base de datos.

### ¿Qué es bcrypt?

bcrypt es una biblioteca de hashing de contraseñas que proporciona un mecanismo seguro y eficiente para el hashing de contraseñas. Utiliza una combinación de técnicas criptográficas y de hashing para almacenar las contraseñas de manera segura.

### ¿Por qué usar bcrypt en lugar de funciones de hashing regulares?

En el pasado, se utilizaban funciones de hashing rápidas y sencillas como MD5 o SHA-1 para almacenar contraseñas. Sin embargo, estas funciones son vulnerables a ataques de fuerza bruta y de búsqueda de colisiones. En cambio, bcrypt utiliza un algoritmo más lento y deliberadamente costoso, lo que dificulta enormemente los ataques de fuerza bruta.

### Proceso de hashing con bcrypt

El proceso de hashing con bcrypt consta de los siguientes pasos:

1. **Generación de un salt**: El salt es un valor aleatorio que se agrega a la contraseña antes de aplicar el hashing. Ayuda a prevenir ataques de diccionario y de búsqueda de colisiones, ya que cada contraseña tendrá un salt único.

2. **Aplicación del hashing**: Bcrypt aplica una función de hashing segura que toma como entrada la contraseña y el salt. Este proceso genera un hash único y resistente a los ataques.

3. **Almacenamiento del hash y el salt**: El resultado del hashing (el hash) y el salt se almacenan en la base de datos. Es importante almacenar el salt junto con el hash para poder verificar las contraseñas en el futuro.

### Verificación de contraseñas

Cuando un usuario intenta iniciar sesión, se realiza el siguiente proceso de verificación de contraseñas:

1. Se obtiene la contraseña ingresada por el usuario.
2. Se recupera el hash y el salt almacenados en la base de datos para ese usuario.
3. Bcrypt aplica el proceso de hashing utilizando el salt almacenado y la contraseña ingresada.
4. El resultado del hashing se compara con el hash almacenado en la base de datos.
5. Si los hashes coinciden, la contraseña es válida. De lo contrario, la contraseña es incorrecta.

### Ventajas del hashing con bcrypt

- **Seguridad mejorada**: Bcrypt utiliza técnicas criptográficas sólidas y un proceso deliberadamente lento para proteger las contraseñas contra ataques de fuerza bruta y búsqueda de colisiones.
- **Flexibilidad y compatibilidad**: Bcrypt se ha convertido en un estándar en la industria y está disponible en varios lenguajes de programación, lo que facilita su integración en diferentes sistemas.
- **Actualizaciones sencillas**: Si se descubren vulnerabilidades en los algoritmos de hashing, bcrypt permite actualizar fácilmente los hashes existentes sin requerir que los usuarios cambien sus contraseñas.

### Encriptación vs. Hashing

Es importante tener en cuenta que la encriptación y el hashing son procesos diferentes:

- **Encriptación**: La encriptación es un proceso reversible que utiliza una clave para convertir datos en un formato cifrado. Se puede descifrar la información original utilizando la misma clave.
- **Hashing**: El hashing es un proceso unidireccional en el que los datos se convierten en un hash, pero no se pueden recuperar los datos originales a partir del hash.

En el contexto de las contraseñas, se prefiere el hashing en lugar de la encriptación, ya que no se necesita recuperar la contraseña original, solo se necesita verificar si coincide con la ingresada por el usuario.

En resumen, bcrypt es una biblioteca de hashing de contraseñas que utiliza un proceso seguro y costoso para proteger las contraseñas almacenadas en una base de datos. El hashing es un proceso unidireccional que convierte una contraseña en un hash irreversible. Esto garantiza la seguridad de las contraseñas incluso si la base de datos se ve comprometida.

## Link de npm

https://www.npmjs.com/package/bcrypt 