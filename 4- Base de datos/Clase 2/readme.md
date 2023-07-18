# Tipos de datos en MySQL

MySQL soporta varios tipos de datos en varias categorías: tipos numéricos, de fecha y hora, de cadena (carácter y byte) y espaciales.

## Tipos de datos numéricos

- **INT**: Un número entero. Su tamaño es normalmente de 11 dígitos.
- **TINYINT**: Un número entero muy pequeño. Normalmente de 4 dígitos.
- **SMALLINT**: Un número entero pequeño. Normalmente de 6 dígitos.
- **MEDIUMINT**: Un número entero mediano. Normalmente de 9 dígitos.
- **BIGINT**: Un número entero grande. Normalmente de 20 dígitos.
- **FLOAT**: Un número de punto flotante pequeño.
- **DOUBLE**: Un número de punto flotante grande.
- **DECIMAL**: Un número de punto flotante exacto, la precisión y escala se puede especificar.

## Tipos de fecha y hora

- **DATE**: Formato de fecha, 'YYYY-MM-DD'.
- **TIME**: Formato de hora, 'HH:MM:SS'.
- **DATETIME**: Combinación de fecha y hora, 'YYYY-MM-DD HH:MM:SS'.
- **TIMESTAMP**: Un sello de tiempo. Almacenado como el número de segundos desde la 'Época Unix': '1970-01-01 00:00:00' UTC.
- **YEAR**: Formato de año, 'YYYY'.

## Tipos de datos de cadena

- **CHAR**: Un string fijo de longitud normal.
- **VARCHAR**: Un string de longitud variable.
- **BINARY**: Similar a CHAR, pero almacena datos binarios.
- **VARBINARY**: Similar a VARCHAR, pero almacena datos binarios.
- **BLOB**: Una colección de datos binarios como imágenes, audio, etc.
- **TEXT**: Para texto largo, almacena hasta 65,535 caracteres.
- **ENUM**: String de objeto que puede tener un solo valor, elegido de una lista de valores posibles predefinidos.
- **SET**: String de objeto que puede tener cero o más valores, elegidos de una lista de valores posibles predefinidos.

## Ejemplos de uso al crear una tabla

Aquí están algunos ejemplos de cómo usar estos tipos de datos al crear tablas:

```sql
CREATE TABLE empleados (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    fecha_nacimiento DATE,
    salario DECIMAL(8, 2)
);
```

## Tipos de datos espaciales

MySQL también soporta tipos de datos espaciales para almacenar datos geoespaciales como la ubicación GPS, Polígonos etc. Algunos de los tipos de datos espaciales son `GEOMETRY`, `POINT`, `LINESTRING`, `POLYGON`, `MULTIPOINT`, `MULTILINESTRING`, `MULTIPOLYGON` y `GEOMETRYCOLLECTION`.

Por favor, consulta la [documentación oficial de MySQL](https://dev.mysql.com/doc/refman/8.0/en/data-types.html) para obtener más detalles y para entender cómo cada tipo de dato se comporta en diferentes contextos.
