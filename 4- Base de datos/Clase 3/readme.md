Aquí tenemos un ejercicio práctico.

1. **Creación de la tabla**.

   Imagina que queremos crear una tabla para registrar libros en una librería. La tabla `libros` necesita las siguientes columnas: `id`, `titulo`, `autor`, `anio_publicacion` y `precio`.

   ```sql
   CREATE TABLE libros (
       id INT PRIMARY KEY,
       titulo VARCHAR(255),
       autor VARCHAR(255),
       anio_publicacion INT,
       precio DECIMAL(5,2)
   );
   ```

2. **Inserción de datos**.

   Ahora vamos a insertar algunos libros en la tabla.

   ```sql
   INSERT INTO libros (id, titulo, autor, anio_publicacion, precio) VALUES
   (1, 'Don Quijote de la Mancha', 'Miguel de Cervantes', 1605, 19.99),
   (2, 'Cien años de soledad', 'Gabriel García Márquez', 1967, 22.50),
   (3, '1984', 'George Orwell', 1949, 18.00);
   ```

3. **Modificación de la tabla**.

   Supón que queremos añadir una nueva columna `editorial` a la tabla `libros`.

   ```sql
   ALTER TABLE libros ADD COLUMN editorial VARCHAR(255);
   ```

4. **Actualización de datos**.

   Añadamos información a la nueva columna `editorial`.

   ```sql
   UPDATE libros SET editorial = 'Planeta' WHERE id = 1;
   UPDATE libros SET editorial = 'Sudamericana' WHERE id = 2;
   UPDATE libros SET editorial = 'Secker & Warburg' WHERE id = 3;
   ```

Espero que esto te ayude. Recuerda que debes tener instalado un sistema de gestión de bases de datos como MySQL para ejecutar estos comandos.
