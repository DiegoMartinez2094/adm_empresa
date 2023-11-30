import { Router } from "express"; 
import conexion  from "../db/conexionDB.js";

const appEmpleado = Router(); 

appEmpleado.post("/", (req, res) => { 
    conexion.query(
       `INSERT INTO empleados SET ?`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            console.table(data);
            console.log(fils);
            data.affectedRows+=200;
            let result = req.body;
            result.id= data.insertId;
            res.status(data.affectedRows).send(result);
        }
    );
})

appEmpleado.get("/", (req, res) => {
    conexion.query(
        /*sql*/ `SELECT * FROM empleados`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            console.log(data);
            console.log(fils);
            res.send(data)
        }
    );
})


export default  appEmpleado;