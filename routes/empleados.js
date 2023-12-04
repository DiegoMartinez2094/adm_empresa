import { Router } from "express";
import conexion from "../back/db/conexionDB.js";
import { limitConsult } from "../back/middleware/limite_consulta.js";

const appEmpleado = Router();

appEmpleado.post("/", limitConsult(), (req, res) => {
  conexion.query(`INSERT INTO empleados SET ?`, req.body, (err, data, fils) => {
    if (err) {
      console.log(err);
    } else {
      let result = req.body;
      console.table(result);
      data.affectedRows += 200;
      res.status(data.affectedRows).send(result);
    }
  });
});

appEmpleado.get("/", limitConsult(), (req, res) => {
  if (!req.rateLimit) return;
  console.log(req.rateLimit);
  conexion.query(
    /*sql*/ `SELECT * FROM empleados`,
    req.body,
    (err, data, fils) => {
      if (err) {
        console.log(err);
      } else if (!data.length) {
        res.send("no hay Empleados registrados");
      } else {
        console.table(data);
        res.send(data);
      }
    }
  );
});

appEmpleado.get("/EstadoCargo", limitConsult(), (req, res) => {
  if (!req.rateLimit) return;
  console.log(req.rateLimit);
  conexion.query(
    /*sql*/ `SELECT
  cedula_empleado,
  nombre_empleado,
  (
    SELECT
      nombre_cargo
    FROM
      cargo_empleados
      WHERE
      cargo_empleados.id_cargo = empleados.cargo_empleado
  ) AS cargo_empleado,
  fecha_nacimiento,
  email_empleado,
  (
    SELECT
      nombre_estado
    FROM
      estado_empleados
    WHERE
      estado_empleados.id_estado_empleado = empleados.estado_empleado
  ) AS estado_empleado,
   razon_estado_empleado
FROM
  empleados;

`,
    req.body,
    (err, data, fils) => {
      if (err) {
        console.log(err);
      } else if (!data.length) {
        res.send("no hay Empleados registrados");
      } else {
        console.table(data);
        res.send(data);
      }
    }
  );
});

appEmpleado.get("/PorCedula", limitConsult(), (req, res) => {
  const cedula = req.body.cedula_empleado;
  if (cedula) {
    conexion.query(
      /*sql*/ `SELECT 
         cedula_empleado,
         nombre_empleado,
         (
          SELECT
            nombre_cargo
          FROM
            cargo_empleados
            WHERE
            cargo_empleados.id_cargo = empleados.cargo_empleado
        ) AS cargo_empleado
                FROM empleados
                WHERE cedula_empleado = '${cedula}'`,
      req.body,
      (err, data, fils) => {
        if (err) {
          console.log(err);
        } else if (!data.length) {
          res.send("Cédula no encontrada");
        } else {
          console.table(data);
          res.send(data);
        }
      }
    );
  } else {
    res.send("digite una cédula");
  }
});

appEmpleado.get("/PorCargo", limitConsult(), (req, res) => {
  const cargo = req.body.cargo_empleado;
  if (cargo) {
    conexion.query(
      /*sql*/ `SELECT *
      FROM empleados
      WHERE cargo_empleado IN (
        SELECT id_cargo
        FROM cargo_empleados
        WHERE nombre_cargo = "${cargo}"
      )`,
      req.body,
      (err, data, fils) => {
        if (err) {
          console.log(err);
        } else if (!data.length) {
          res.send("Cargo no encontrado");
        } else {
          console.table(data);
          res.send(data);
        }
      }
    );
  } else {
    res.send("digite una Cargo");
  }
});

appEmpleado.delete("/PorCedula", limitConsult(), (req, res) => {
  const cedula = req.body.cedula_empleado;

  conexion.query(
    `SELECT * FROM empleados WHERE cedula_empleado = '${cedula}'`,
    (err, data, fils) => {
      if (err) {
        res.status(500).send(err);
      } else if (!data.length) {
        res.status(404).send("Cédula no encontrada");
      } else {
        conexion.query(
          `DELETE FROM empleados WHERE cedula_empleado = '${cedula}'`,
          (err, data, fils) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send("Empleado eliminado");
            }
          }
        );
      }
    }
  );
});

export default appEmpleado;
