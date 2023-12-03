-- Active: 1698620582911@@127.0.0.1@3306@adm_empresa

INSERT INTO cargo_empleados VALUES
(1, "JEFE", "dirigir la empresa"),
(2, "GERENTE", "administrar la empresa"),
(3, "DIRECTOR DE PROYECTOS", "Manejar contacto directo con el contacto del proyecto"),
(4, "SUPERVISOR", "supervisar el trabajo de los empleados"),
(5, "EMPLEADO", "realizar tareas asignadas")
(6, "PRACTICANTE", "realizar tareas asignadas por Empleados");

INSERT INTO estado_empleados VALUES 
(1, "ACTIVO" ),
(2, "RETIRADO" ),
(3,"SUSPENDIDO");


INSERT INTO empleados VALUES
(1095821320,"Diego Fernando Martinez",'1994-20-10', "DIEGO@GMAIL.COM", 1, "sin novedad", 1, "6317080", LOCALTIME()),
(1095821321,"Juan Carlos Gomez",'1999-02-02', "JUAN@GMAIL.COM", 2, "jubilado", 2, "6317081", LOCALTIME()),
(1095821322,"Maria Fernanda Perez",'1998-03-03', "MARIA@GMAIL.COM", 3, "fallas injustificadas", 3, "6317082", LOCALTIME()),
(1095821323,"Luis Eduardo Sanchez",'1997-04-04', "LUIS@GMAIL.COM", 1, "en licencia", 4, "6317083", LOCALTIME()),
(1095821324,"Ana Maria Rodriguez",'1996-05-05', "ANA@GMAIL.COM", 1, "sin novedad", 5, "6317084", LOCALTIME()),
(1095821325,"David Alejandro Hernandez",'1995-06-06', "DAVID@GMAIL.COM", 1, "pasantias", 6, "6317085", LOCALTIME());

INSERT INTO proyectos VALUES
(1,"Madelena", "ing Carlos", "Bogota cll 123", LOCALTIME(), "2023-12-2", "2024-30-1"),
(2,"Remodelación", "ing Maria", "Medellín cll 456", LOCALTIME(), "2023-12-03", "2024-02-28"),
(3,"Construcción", "ing Juan", "Barranquilla cll 789", LOCALTIME(), "2023-12-04", "2024-03-31");

INSERT INTO dispositivos VALUES
(1, "Semsor", "SENSORES.SA.", LOCALTIME()),
(2, "Camara", "HIKVISION", LOCALTIME()),
(3, "Lampara", "FOCOS.LTD", LOCALTIME());

INSERT INTO dispositivos_bodega VALUES
(1, 50, 1095821324, LOCALTIME()),
(2, 100, 1095821324, LOCALTIME()),
(3, 200, 1095821324, LOCALTIME());

INSERT INTO avance_proyecto VALUES 
(1, 1, 1, 100, 0, 1095821324, LOCALTIME()),
(2, 1, 2, 50, 0,1095821324, LOCALTIME()),
(3, 1, 3, 20, 0, 1095821324, LOCALTIME());

INSERT INTO proyectos_empleados VALUES 
(1, 1095821320),
(1, 1095821324 ),
(1, 1095821325),
(2, 1095821320),
(2, 1095821323);


