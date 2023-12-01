-- Active: 1698620582911@@127.0.0.1@3306@adm_empresa
CREATE DATABASE adm_empresa;
USE adm_empresa;
CREATE TABLE empleados (
  cedula_empleado int(20) NOT NULL PRIMARY KEY ,
  nombre_empleado varchar(50) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  email_empleado varchar(20) NOT NULL,
  estado_empleado INT NOT NULL,
  cargo_empleado INT NOT NULL,
  telefono_empleado VARCHAR(30) NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE estado_empleados(
  id_estado_empleado INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre_estado VARCHAR(25)
)

CREATE TABLE cargo_empleados(
  id_cargo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre_cargo VARCHAR(30),
  roles_empleado VARCHAR(255)
)

ALTER TABLE empleados
ADD CONSTRAINT fk_estado_empleado
FOREIGN KEY (estado_empleado)
REFERENCES estado_empleados (id_estado_empleado),
ADD CONSTRAINT fk_cargo_empleado
FOREIGN KEY (cargo_empleado)
REFERENCES cargo_empleados (id_cargo);

CREATE TABLE proyectos(
  id_proyecto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre_proyecto VARCHAR(255) NOT NULL,
  contacto_proyecto VARCHAR(255) NOT NULL,
  direccion_proyecto VARCHAR(255) NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL
)

CREATE TABLE proyectos_empleados(
  proyecto_id INT NOT NULL,
  cedula_empleado INT NOT NULL
)

ALTER TABLE proyectos_empleados
ADD CONSTRAINT fk_a
FOREIGN KEY (proyecto_id)
REFERENCES proyectos (id_proyecto),
ADD CONSTRAINT fk_b
FOREIGN KEY (cedula_empleado)
REFERENCES empleados (cedula_empleado);



INSERT INTO cargo_empleados VALUES (1, "JEFE", "dirigir la empresa");
INSERT INTO estado_empleados VALUES (1, "ACTIVO");

INSERT INTO empleados (cedula_empleado, nombre_empleado,fecha_nacimiento,email_empleado,estado_empleado,cargo_empleado,telefono_empleado,fecha_creacion) VALUES
  (1095821320,"Diego Fernando Martinez",'2000-01-01', "DIEGO@GMAIL.COM", 1, 1, "6317080", LOCALTIME());

  