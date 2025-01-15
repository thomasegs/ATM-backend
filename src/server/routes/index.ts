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
router.get(
  "/motores",
  MotoresController.createQueryValidation,
  MotoresController.getall
);

router.post(
  "/marcas",
  MarcasController.createBodyValidation,
  MarcasController.create
);
router.get(
  "/marcas",
  MarcasController.createQueryValidation,
  MarcasController.getall
);

router.post(
  "/estoque",
  EstoqueController.createBodyValidation,
  EstoqueController.create
);
router.get(
  "/estoque",
  EstoqueController.createQueryValidation,
  EstoqueController.getall
);

router.post(
  "/carcaca",
  CarcacaController.createBodyValidation,
  CarcacaController.create
);
router.get(
  "/carcaca",
  CarcacaController.createQueryValidation,
  CarcacaController.getall
);

router.post(
  "/estado",
  EstadoController.createBodyValidation,
  EstadoController.create
);
router.get(
  "/estado",
  EstadoController.createQueryValidation,
  EstadoController.getall
);

router.post(
  "/cidade",
  CidadeController.createBodyValidation,
  CidadeController.create
);
router.get(
  "/cidade",
  CidadeController.createQueryValidation,
  CidadeController.getall
);

router.post(
  "/bairro",
  BairroController.createBodyValidation,
  BairroController.create
);
router.get(
  "/bairro",
  BairroController.createQueryValidation,
  BairroController.getall
);

router.post(
  "/enderecos",
  EnderecoController.createBodyValidation,
  EnderecoController.create
);
router.get(
  "/enderecos",
  EnderecoController.createQueryValidation,
  EnderecoController.getall
);

router.post(
  "/fornecedor",
  FornecedorController.createBodyValidation,
  FornecedorController.create
);
router.get(
  "/fornecedor",
  FornecedorController.createQueryValidation,
  FornecedorController.getall
);

router.post(
  "/prateleira",
  PrateleiraController.createBodyValidation,
  PrateleiraController.create
);
router.get(
  "/prateleira",
  PrateleiraController.createQueryValidation,
  PrateleiraController.getall
);

router.post(
  "/usuario",
  UsuarioController.createBodyValidation,
  UsuarioController.create
);
router.get(
  "/usuario",
  UsuarioController.createQueryValidation,
  UsuarioController.getall
);

router.post(
  "/setor",
  SetorController.createBodyValidation,
  SetorController.create
);
router.get(
  "/setor",
  SetorController.createQueryValidation,
  SetorController.getall
);

router.post(
  "/usuario_setor",
  UsuarioLotadoController.createBodyValidation,
  UsuarioLotadoController.create
);
router.get(
  "/usuario_setor",
  UsuarioLotadoController.createQueryValidation,
  UsuarioLotadoController.getall
);

router.post(
  "/movimentacao",
  MovimentacaoController.createBodyValidation,
  MovimentacaoController.create
);
router.get(
  "/movimentacao",
  MovimentacaoController.createQueryValidation,
  MovimentacaoController.getall
);

export { router };
