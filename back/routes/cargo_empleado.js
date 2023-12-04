import { Router } from "express";
import conexion from "../db/conexionDB.js";
import { limitConsult } from "../middleware/limite_consulta.js";

const appCargo_empleados = Router();

appCargo_empleados.post("/", limitConsult(), (req, res) => {
    if (!req.rateLimit) return;
    console.log(req.rateLimit);
  conexion.query(`INSERT INTO cargo_empleados SET ?`, req.body, (err, data, fils) => {
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

appCargo_empleados.get("/", limitConsult(), (req, res) => {
    if (!req.rateLimit) return;
    console.log(req.rateLimit);
    conexion.query(
      /*sql*/ `SELECT * FROM cargo_empleados`,
      req.body,
      (err, data, fils) => {
        if (err) {
          console.log(err);
        } else if (!data.length) {
          res.send("no hay cargo_empleados registrados");
        } else {
          console.table(data);
          res.send(data);
        }
      }
    );
  });

appCargo_empleados.delete("/nombreCargo", limitConsult(), (req, res) => {
    if (!req.rateLimit) return;
    console.log(req.rateLimit);
    const nombre_cargo = req.body.nombre_cargo;
    conexion.query(
      `SELECT * FROM cargo_empleados WHERE nombre_cargo = '${nombre_cargo}'`,
      (err, data, fils) => {
        if (err) {
          res.status(500).send(err);
        } else if (!data.length) {
          res.status(404).send("nombre cargo no encontrada");
        } else {
          conexion.query(
            `DELETE FROM cargo_empleados WHERE nombre_cargo = '${nombre_cargo}'`,
            (err, data, fils) => {
              if (err) {
                res.status(500).send(err);
              } else {
                res.status(200).send("cargo eliminado");
              }
            }
          );
        }
      }
    );
  });

export default appCargo_empleados;
