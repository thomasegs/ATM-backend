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
router.get(
  "/motores/:ID",
  MotoresController.createParamValidation,
  MotoresController.getbyid
);
router.put(
  "/motores/:ID",
  MotoresController.createParamValidation,
  MotoresController.createBodyValidation,
  MotoresController.updatebyid
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
router.get(
  "/marcas/:ID",
  MarcasController.createParamValidation,
  MarcasController.getbyid
);
router.put(
  "/marcas/:ID",
  MarcasController.createParamValidation,
  MarcasController.createBodyValidation,
  MarcasController.updatebyid
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
router.get(
  "/estoque/:ID",
  EstoqueController.createParamValidation,
  EstoqueController.getbyid
);
router.put(
  "/estoque/:ID",
  EstoqueController.createParamValidation,
  EstoqueController.createBodyValidation,
  EstoqueController.updatebyid
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
router.get(
  "/carcaca/:ID",
  CarcacaController.createParamValidation,
  CarcacaController.getbyid
);
router.put(
  "/carcaca/:ID",
  CarcacaController.createParamValidation,
  CarcacaController.createBodyValidation,
  CarcacaController.updatebyid
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
router.get(
  "/estado/:ID",
  EstadoController.createParamValidation,
  EstadoController.getbyid
);
router.put(
  "/estado/:ID",
  EstadoController.createParamValidation,
  EstadoController.createBodyValidation,
  EstadoController.updatebyid
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
router.get(
  "/cidade/:ID",
  CidadeController.createParamValidation,
  CidadeController.getbyid
);
router.put(
  "/cidade/:ID",
  CidadeController.createParamValidation,
  CidadeController.createBodyValidation,
  CidadeController.updatebyid
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
router.get(
  "/bairro/:ID",
  BairroController.createParamValidation,
  BairroController.getbyid
);
router.put(
  "/bairro/:ID",
  BairroController.createParamValidation,
  BairroController.createBodyValidation,
  BairroController.updatebyid
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
router.get(
  "/enderecos/:ID",
  EnderecoController.createParamValidation,
  EnderecoController.getbyid
);
router.put(
  "/enderecos/:ID",
  EnderecoController.createParamValidation,
  EnderecoController.createBodyValidation,
  EnderecoController.updatebyid
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
router.get(
  "/fornecedor/:ID",
  FornecedorController.createParamValidation,
  FornecedorController.getbyid
);
router.put(
  "/fornecedor/:ID",
  FornecedorController.createParamValidation,
  FornecedorController.createBodyValidation,
  FornecedorController.updatebyid
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
router.get(
  "/prateleira/:ID",
  PrateleiraController.createParamValidation,
  PrateleiraController.getbyid
);
router.put(
  "/prateleira/:ID",
  PrateleiraController.createParamValidation,
  PrateleiraController.createBodyValidation,
  PrateleiraController.updatebyid
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
router.get(
  "/usuario/:ID",
  UsuarioController.createParamValidation,
  UsuarioController.getbyid
);
router.put(
  "/usuario/:ID",
  UsuarioController.createParamValidation,
  UsuarioController.createBodyValidation,
  UsuarioController.updatebyid
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
router.get(
  "/setor/:ID",
  SetorController.createParamValidation,
  SetorController.getbyid
);
router.put(
  "/setor/:ID",
  SetorController.createParamValidation,
  SetorController.createBodyValidation,
  SetorController.updatebyid
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
router.get(
  "/usuario_setor/:ID",
  UsuarioLotadoController.createParamValidation,
  UsuarioLotadoController.getbyid
);
router.put(
  "/usuario_setor/:ID",
  UsuarioLotadoController.createParamValidation,
  UsuarioLotadoController.createBodyValidation,
  UsuarioLotadoController.updatebyid
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
router.get(
  "/movimentacao/:ID",
  MovimentacaoController.createParamValidation,
  MovimentacaoController.getbyid
);
router.put(
  "/movimentacao/:ID",
  MovimentacaoController.createParamValidation,
  MovimentacaoController.createBodyValidation,
  MovimentacaoController.updatebyid
);

export { router };