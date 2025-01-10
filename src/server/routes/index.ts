import { Router } from "express";

import { MarcasController, MotoresController } from "./../controllers";

const router = Router();

//Rota de teste sem uso por hora
router.get("/", (req, res) => {
    res.send("Olá mundo");
  });

router.post("/motores", MotoresController.create);

router.post("/marcas", MarcasController.create);


export { router };
