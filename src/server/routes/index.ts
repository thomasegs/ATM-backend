import { Router } from "express";

import { MarcasController, MotoresController } from "./../controllers";
import { EstoqueController } from "../controllers/estoque";
import { CarcacaController } from "../controllers/carcaca";
import { EstadoController } from "../controllers/estado";
import { CidadeController } from "../controllers/cidade";
import { BairroController } from "../controllers/bairro";

const router = Router();

//Rota de teste sem uso por hora
router.get("/", (req, res) => {
    res.send("Olá mundo");
  });

router.post("/motores", MotoresController.create);

router.post("/marcas", MarcasController.create);

router.post("/estoque", EstoqueController.create);

router.post("/carcaca", CarcacaController.create);

router.post("/estado", EstadoController.create);

router.post("/cidade", CidadeController.create);

router.post("/bairro", BairroController.create);


export { router };
