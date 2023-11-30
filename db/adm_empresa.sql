-- Active: 1698620582911@@127.0.0.1@3306@adm_empresa
CREATE DATABASE adm_empresa;

CREATE TABLE empleados (
  cedula_empleado int(20) NOT NULL PRIMARY KEY ,
  nombre_empleado varchar(50) NOT NULL
);

INSERT INTO empleados (cedula_empleado, nombre_empleado) VALUES
  (1095821320,"Diego Fernando Martinez")
   
  
