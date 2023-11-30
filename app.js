import express from "express";
import dotenv from "dotenv"

dotenv.config();
const app = express();
app.use(express.json());

let config = JSON.parse(process.env.MY_CONFIG);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
})

app.use("/",(req, res)=>{
    res.send("hola")
})