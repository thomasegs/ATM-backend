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
import { UsuarioController } from "../controllers/usuario";
import { SetorController } from "../controllers/setor";
import { UsuarioLotadoController } from "../controllers/usuario_lotado";
import { MovimentacaoController } from "../controllers/movimentacao";

const router = Router();

// Rota de teste sem uso por hora
router.get("/", (req, res) => {
  res.send("Olá mundo");
});

router.post(
  "/motores",
  MotoresController.createBodyValidation,
  MotoresController.create
);
router.post(
  "/marcas",
  MarcasController.createBodyValidation,
  MarcasController.create
);
router.post(
  "/estoque",
  EstoqueController.createBodyValidation,
  EstoqueController.create
);
router.post(
  "/carcaca",
  CarcacaController.createBodyValidation,
  CarcacaController.create
);
router.post(
  "/estado",
  EstadoController.createBodyValidation,
  EstadoController.create
);
router.post(
  "/cidade",
  CidadeController.createBodyValidation,
  CidadeController.create
);
router.post(
  "/bairro",
  BairroController.createBodyValidation,
  BairroController.create
);
router.post(
  "/enderecos",
  EnderecoController.createBodyValidation,
  EnderecoController.create
);
router.post(
  "/fornecedor",
  FornecedorController.createBodyValidation,
  FornecedorController.create
);
router.post(
  "/prateleira",
  PrateleiraController.createBodyValidation,
  PrateleiraController.create
);
router.post(
  "/usuario",
  UsuarioController.createBodyValidation,
  UsuarioController.create
);
router.post(
  "/setor",
  SetorController.createBodyValidation,
  SetorController.create
);
router.post(
  "/usuario_setor",
  UsuarioLotadoController.createBodyValidation,
  UsuarioLotadoController.create
);
router.post(
  "/movimentacao",
  MovimentacaoController.createBodyValidation,
  MovimentacaoController.create
);

export { router };
