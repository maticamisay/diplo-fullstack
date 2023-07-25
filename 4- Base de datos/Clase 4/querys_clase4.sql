# 1) CREAR BASE DE DATOS PRODUCTOS
# 2) CREAR TABLA DE PRODUCTOS CON ID, NOMBRE, PRECIO
# 3) CREAR TABLA DE STOCK CON ID, NOMBRE_DEPOSITO, CANTIDAD
# 4) CREAR TABLA DE CATEGORIAS CON ID, NOMBRE_CATEGORIA
# 5) INSERTAR AL MENOS DOS FILAS EN CADA TABLA

CREATE DATABASE ALMACEN;
USE ALMACEN;

CREATE TABLE productos (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255),
    precio DECIMAL(10 , 2 ),
    categoria_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE Stock (
    id INT AUTO_INCREMENT,
    nombre_deposito VARCHAR(255),
    cantidad INT,
    PRIMARY KEY(id)
);

CREATE TABLE Categoria (
    id INT AUTO_INCREMENT,
    nombre_categoria VARCHAR(255),
    PRIMARY KEY(id)
);

INSERT INTO Productos (nombre, precio) VALUES
('Coca Cola', 650),
('Aceite', 1000),
('Manteca', 800);

INSERT INTO Stock (nombre_deposito, cantidad) VALUES
('LOCAL', 100),
('DEPOSITO SANJUAN', 200);

INSERT INTO Categoria (nombre_categoria) VALUES
('Bebidas'),
('Comidas');

ALTER TABLE productos
ADD COLUMN categoria_id INT,
ADD FOREIGN KEY (categoria_id) REFERENCES Categoria(id);

# ALTER TABLE categorias, para agregar id_producto
ALTER TABLE categoria
ADD COLUMN producto_id INT,
ADD FOREIGN KEY (producto_id) REFERENCES Productos(id);

# ALTER TABLE stock, para agregar id_producto

UPDATE productos SET categoria_id = 1 WHERE id IN (1);
UPDATE productos SET categoria_id = 2 WHERE id IN (2,3);

SELECT * FROM productos INNER JOIN categoria ON productos.categoria_id=categoria.id;

