import { Router } from "express";
import conexion from "../db/conexionDB.js";
import { limitConsult } from "../middleware/limite_consulta.js";

const appUsuarios = Router();

appUsuarios.post("/verificarEmail", async (req, res) => {
  try {
    const { email_usuario } = req.body;

    // Consultar si el correo electrónico ya está registrado en la tabla usuarios
    const query = "SELECT * FROM usuarios WHERE email_usuario = ?";
    conexion.query(query, [email_usuario], (error, results) => {
      if (error) {
        console.error("Error al ejecutar la consulta:", error);
        res
          .status(500)
          .json({ message: "Error al verificar correo electrónico" });
      } else {
        if (results.length > 0) {
          // El correo electrónico ya está registrado
          res.status(200).json({ message: "Correo electrónico ya registrado" });
          console.log("ya existe el correo electrónico")
        } else {
          // El correo electrónico no está registrado
          res.status(404).json({ message: "Correo electrónico no registrado" });
          console.log("Correo electrónico no registrado")
        }
      }
    });
  } catch (error) {
    // Manejar errores, si los hay
    console.error("Error al verificar correo electrónico:", error);
    res.status(500).json({ message: "Error al verificar correo electrónico" });
  }
});

appUsuarios.post("/", limitConsult(), (req, res) => {
  conexion.query(`INSERT INTO usuarios SET ?`, req.body, (err, data, fils) => {
    if (err) {
      console.log(err);
    } else {
      let result = req.body;
      console.table(result);
      data.affectedRows += 200;
      res.status(200).send("usuario creado");
    }
  });
});

appUsuarios.get("/", limitConsult(), (req, res) => {
  if (!req.rateLimit) return;
  console.log(req.rateLimit);
  conexion.query(
    /*sql*/ `SELECT * FROM usuarios`,
    req.body,
    (err, data, fils) => {
      if (err) {
        console.log(err);
      } else if (!data.length) {
        res.send("no hay usuarios registrados");
      } else {
        console.table(data);
        res.send(data);
      }
    }
  );
});

appUsuarios.get("/PorCedula", limitConsult(), (req, res) => {
  const cedula = req.body.cedula_usuario;
  if (cedula) {
    conexion.query(
      /*sql*/ `SELECT 
         cedula_usuario,
         nombre_usuario
                FROM usuarios
                WHERE cedula_usuario = '${cedula}'`,
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

appUsuarios.post("/ingreso", limitConsult(), (req, res) => {
  const email = req.body.email_usuario;
  const contraseña = req.body.contraseña_usuario;
  if (!email || !contraseña) {
    res.status(400).json({ message: "informacion invalida" });
  } else {
    conexion.query(
      /*sql*/ `SELECT 
   email_usuario,
   contraseña_usuario
   FROM usuarios
   WHERE email_usuario = '${email}' AND contraseña_usuario = '${contraseña}'`,
      req.body,
      (err, data) => {
        if (err) {
          console.log(err);
        } else if (!data.length) {
          res.status(404).json({ message: "Usuario no encontrado" });
        } else {
          res
            .status(200)
            .json({ message: "Usuario autenticado correctamente" });
        }
      }
    );
  }
});

appUsuarios.delete("/PorCedula", limitConsult(), (req, res) => {
  const cedula = req.body.cedula_usuario;
  conexion.query(
    `SELECT * FROM usuarios WHERE cedula_usuario = '${cedula}'`,
    (err, data, fils) => {
      if (err) {
        res.status(500).send(err);
      } else if (!data.length) {
        res.status(404).send("Cédula no encontrada");
      } else {
        conexion.query(
          `DELETE FROM usuarios WHERE cedula_usuario = '${cedula}'`,
          (err, data, fils) => {
            if (err) {
              res.status(500).send(err);
            } else {
              res.status(200).send("usuario eliminado");
            }
          }
        );
      }
    }
  );
});

export default appUsuarios;
