-- Active: 1698620582911@@127.0.0.1@3306@adm_empresa
CREATE DATABASE adm_empresa;

USE adm_empresa;
CREATE TABLE empleados (
  cedula_empleado int(20) NOT NULL PRIMARY KEY ,
  nombre_empleado varchar(50) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  email_empleado varchar(20) NOT NULL,
  estado_empleado INT NOT NULL,
  razon_estado_empleado VARCHAR(255),
  cargo_empleado INT NOT NULL,
  telefono_empleado VARCHAR(30) NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE estado_empleados(
  id_estado_empleado INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre_estado VARCHAR(25) NOT NULL
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

CREATE TABLE dispositivos(
  id_dispositivo INT NOT NULL PRIMARY KEY,
  nombre_dispositivo VARCHAR(255) NOT NULL,
  proveedor_dipositivo VARCHAR(255) NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE avance_proyecto(
  id_avance INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  proyecto_id INT NOT NULL,
  dispositivo_id INT NOT NULL,
  cantidad_dispositivos_por_instalar INT NOT NULL,
  cantidad_dispositivos_instalados INT NOT NULL,
  cedula_empleado INT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)


ALTER TABLE avance_proyecto
ADD CONSTRAINT fk_c
FOREIGN KEY (proyecto_id)
REFERENCES proyectos (id_proyecto),
ADD CONSTRAINT fk_d
FOREIGN KEY (dispositivo_id)
REFERENCES dispositivos (id_dispositivo),
ADD CONSTRAINT fk_cedulaa_trabajador
FOREIGN KEY (cedula_empleado)
REFERENCES empleados (cedula_empleado);

CREATE TABLE dispositivos_bodega(
  dispositivo_id INT NOT NULL,
  cantidad_dispositivos_bodega INT NOT NULL,
  cedula_empleado INT NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

ALTER TABLE dispositivos_bodega
ADD CONSTRAINT fk_dispositivooo_id
FOREIGN KEY (dispositivo_id)
REFERENCES dispositivos (id_dispositivo),
ADD CONSTRAINT fk_cedula_empleadoo
FOREIGN KEY (cedula_empleado)
REFERENCES empleados (cedula_empleado)

