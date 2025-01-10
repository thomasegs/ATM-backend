import { Router } from "express";

import { MarcasController, MotoresController } from "./../controllers";
import { EstoqueController } from "../controllers/estoque";
import { CarcacaController } from "../controllers/carcaca";

const router = Router();

//Rota de teste sem uso por hora
router.get("/", (req, res) => {
    res.send("Olá mundo");
  });

router.post("/motores", MotoresController.create);

router.post("/marcas", MarcasController.create);

router.post("/estoque", EstoqueController.create);

router.post("/carcaca", CarcacaController.create);


export { router };
