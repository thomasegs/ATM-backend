import { Router } from "express";

const motores = Router();

motores.get("/motores", (req, res) =>{
    res.send("Motores funcionanado");
})

export { motores };