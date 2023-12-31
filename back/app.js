import express from "express";
import dotenv from "dotenv"
import cors from 'cors';

import appEmpleado from "./routes/empleados.js"
import appEstado_empleados from "./routes/estado_empleados.js";
import appCargo_empleados from "./routes/cargo_empleado.js";
import appUsuarios from "./routes/usuarios.js";

dotenv.config();
const app = express();
app.use(express.json());

let config = JSON.parse(process.env.MY_CONFIG);
app.use(cors());
app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})

app.use("/empleados",appEmpleado);
app.use("/estadoEmpleado",appEstado_empleados);
app.use("/cargoEmpleado",appCargo_empleados);
app.use("/usuarios",appUsuarios);