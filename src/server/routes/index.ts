import { Router } from "express";

import { EstoqueController } from "../controllers/estoque";
import { CarcacaController } from "../controllers/carcaca";
import { EstadoController } from "../controllers/estado";
import { CidadeController } from "../controllers/cidade";
import { BairroController } from "../controllers/bairro";
import { EnderecoController } from "../controllers/endereco";
import { MotoresController } from "../controllers/motores";
import { MarcasController } from "../controllers/marca_motor";
import { FornecedorController } from "../controllers/fornecedor";
import { PrateleiraController } from "../controllers/prateleira";

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

router.post("/enderecos", EnderecoController.create);

router.post("/fornecedor", FornecedorController.create);

router.post("/prateleira", PrateleiraController.create);

export { router };
