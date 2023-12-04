import { Router } from "express";
import conexion from "../db/conexionDB.js";
import { limitConsult } from "../middleware/limite_consulta.js";

const appEstado_empleados = Router();

appEstado_empleados.post("/", limitConsult(), (req, res) => {
  conexion.query(`INSERT INTO estado_empleados SET ?`, req.body, (err, data, fils) => {
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

appEstado_empleados.get("/", limitConsult(), (req, res) => {
    if (!req.rateLimit) return;
    console.log(req.rateLimit);
    conexion.query(
      /*sql*/ `SELECT * FROM estado_empleados`,
      req.body,
      (err, data, fils) => {
        if (err) {
          console.log(err);
        } else if (!data.length) {
          res.send("no hay estado_empleados registrados");
        } else {
          console.table(data);
          res.send(data);
        }
      }
    );
  });

appEstado_empleados.delete("/PorNombreEstado", limitConsult(), (req, res) => {
    const nombre_estado = req.body.nombre_estado;
  
    conexion.query(
      `SELECT * FROM estado_empleados WHERE nombre_estado = '${nombre_estado}'`,
      (err, data, fils) => {
        if (err) {
          res.status(500).send(err);
        } else if (!data.length) {
          res.status(404).send("Estado no encontrada");
        } else {
          conexion.query(
            `DELETE FROM estado_empleados WHERE nombre_estado = '${nombre_estado}'`,
            (err, data, fils) => {
              if (err) {
                res.status(500).send(err);
              } else {
                res.status(200).send("Estado empleado eliminado");
              }
            }
          );
        }
      }
    );
  });

export default appEstado_empleados;
