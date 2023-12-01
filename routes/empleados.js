import { Router } from "express";
import conexion from "../db/conexionDB.js";

const appEmpleado = Router();

appEmpleado.post("/", (req, res) => {
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

appEmpleado.get("/", (req, res) => {
  conexion.query(
    /*sql*/ `SELECT * FROM empleados`,
    req.body,
    (err, data, fils) => {
      if (err) {
        console.log(err);
      } else {
        console.table(data);
        res.send(data);
      }
    }
  );
});

appEmpleado.get("/empleadoPorCedula", (req, res) => {
  const cedula = req.body.cedula_empleado;
  if (cedula) {
    conexion.query(
      /*sql*/ `SELECT *
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

appEmpleado.delete("/empleadoPorCedula", (req, res) => {
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
