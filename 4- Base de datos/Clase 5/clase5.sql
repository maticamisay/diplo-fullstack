/*
1) Crear base de datos para el ecommerce
2) Crear tabla productos
3) Insertar al menos 5 una fila en tabla productos
4) Crear tabla usuarios
5) Insertar al menos una fila en tabla usuarios
6) Opcional: Crear una tabla que se pueda relacionar con algunas de las dos, para agregar una clave foranea
*/
CREATE DATABASE COMERCIO;
USE COMERCIO;

CREATE TABLE productos (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255),
    precio DECIMAL(10 , 2 ),
    PRIMARY KEY (id)
);

CREATE TABLE categoria (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE usuario (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    email VARCHAR(255),
    PRIMARY KEY (id)
);

ALTER TABLE productos
ADD COLUMN categoria_id INT,
ADD FOREIGN KEY (categoria_id) REFERENCES categoria(id);

INSERT INTO categoria (nombre) VALUES
('Ropa'),
('Calzado'),
('Accesorios');

INSERT INTO productos (nombre, precio, categoria_id) VALUES
('Remera', 1000, 1),
('Pantalon', 2000, 1),
('Zapatillas', 3000, 2),
('Campera', 4000, 3),
('Buzo', 5000, 3);

SELECT 
	productos.id,
    productos.nombre AS nombre_prod,
    precio,
    categoria.id AS id_cat,
    categoria.nombre AS nombre_cat
FROM
    productos
        JOIN
    categoria ON productos.categoria_id = categoria.id;