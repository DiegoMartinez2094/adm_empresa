import express from "express";
import dotenv from "dotenv"

import appEmpleado from "../back/routes/empleados.js"
import appEstado_empleados from "../back/routes/estado_empleados.js";
import appCargo_empleados from "../back/routes/cargo_empleado.js";

dotenv.config();
const app = express();
app.use(express.json());

let config = JSON.parse(process.env.MY_CONFIG);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})

app.use("/empleados",appEmpleado);
app.use("/estadoEmpleado",appEstado_empleados);
app.use("/cargoEmpleado",appCargo_empleados);