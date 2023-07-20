#BORRAR BASE DE DATOS
DROP DATABASE biblioteca

#CREAR BASE DE DATOS
CREATE DATABASE biblioteca;

#SELECCIONAR BASE DE DATOS
USE biblioteca;

#CREAMOS UNA TABLA
CREATE TABLE libros(
id_libro INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(255),
autor VARCHAR(255),
anio_publicacion INT,
precio DECIMAL(5,2)
);

#INSERTAMOS VALORES EN LA TABLA
INSERT INTO libros 
(id_libro, titulo, autor, anio_publicacion, precio) VALUES 
(1, 'Don Quijote de la Mancha', 'Miguel de Cervantes', 1605, 19.99),
(2, 'Cien años de soledad', 'Gabriel García Márquez', 1967, 22.50),
(3, '1984', 'George Orwell', 1949, 18.00);

#OBTENEMOS TODOS LOS LIBROS CREADOS
SELECT * FROM libros;

#MODIFICAR UNA TABLA
ALTER TABLE libros ADD editorial VARCHAR(255);

#ACTUALIZAR LOS DATOS
UPDATE libros SET editorial = 'Planeta' WHERE id_libro = 1;

INSERT INTO libros 
(titulo, autor, anio_publicacion, precio,editorial) VALUES 
('Principito', 'Antoine', 1960, 25.00, 'Gran Travesía');

#OBTENEMOS TODOS LOS LIBROS CREADOS
SELECT * FROM libros;
