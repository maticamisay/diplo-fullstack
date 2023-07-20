# Consignas de Trabajo con MySQL Workbench

## Consigna 1: Crear la Base de Datos y Tablas

1. **Crear una base de datos llamada 'Productos'** - Pista: Usa `CREATE DATABASE`.

2. **Crear una tabla llamada 'Productos' con las columnas 'id', 'nombre', 'precio'** - Pista: Usa `CREATE TABLE` y define los campos con sus respectivos tipos de datos.

3. **Crear una tabla llamada 'Stock' con las columnas 'id', 'nombre_deposito', 'cantidad'** - Al igual que el paso anterior, utiliza `CREATE TABLE`.

4. **Crear una tabla llamada 'Categoria' con las columnas 'id', 'nombre_categoria'** - Utiliza `CREATE TABLE` nuevamente.

## Consigna 2: Inserción de Datos en las Tablas

5. **Inserta algunos datos en la tabla 'Productos'** - Pista: Usa `INSERT INTO`.

6. **Inserta algunos datos en la tabla 'Stock'** - Al igual que el paso anterior, utiliza `INSERT INTO`.

7. **Inserta algunos datos en la tabla 'Categoria'** - Utiliza `INSERT INTO` nuevamente.

## Consigna 3: Modificar Tablas para Establecer Relaciones

8. **Modificar la tabla 'Productos' para incluir 'categoria_id' y establecer una relación con la tabla 'Categoria'** - Pista: Usa `ALTER TABLE` y `ADD FOREIGN KEY`.

9. **Modificar la tabla 'Stock' para incluir 'producto_id' y establecer una relación con la tabla 'Productos'** - Al igual que el paso anterior, utiliza `ALTER TABLE` y `ADD FOREIGN KEY`.

## Consigna 4: Obtener Datos con una Consulta JOIN

10. **Realiza una consulta que combine información de la tabla 'Productos', 'Categoria' y 'Stock'** - Pista: Usa `SELECT` con `INNER JOIN` y asegúrate de unir las tablas en base a las claves foráneas correspondientes.

Recuerda, cada uno de estos pasos implicará la creación y ejecución de sentencias SQL. Asegúrate de verificar que cada paso se complete con éxito antes de pasar al siguiente, y no dudes en buscar más detalles sobre cada comando si tienes alguna duda.
