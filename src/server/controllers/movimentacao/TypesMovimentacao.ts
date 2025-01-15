import * as yup from "yup";
interface IMovimentacao {
  ID_SETOR?: number;
  ID_FORNECEDOR?: number;
  ID_PRATELEIRA?: number;
  QUANDO: Date;
  ID_USUARIO: number;
  ID_MOTOR: number;
  OBS?: string;
}

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

const bodyValidation: yup.Schema<IMovimentacao> = yup.object().shape({
  ID_SETOR: yup.number().integer().positive(),
  ID_FORNECEDOR: yup.number().integer().positive(),
  ID_PRATELEIRA: yup.number().integer().positive(),
  QUANDO: yup.date().default(new Date()).required(),
  ID_USUARIO: yup.number().integer().positive().required(),
  ID_MOTOR: yup.number().integer().positive().required(),
  OBS: yup.string(),
});

const queryValidation: yup.Schema<IQueryProps> = yup.object().shape({
  page: yup.number().integer().positive(),
  limit: yup.number().integer().positive(),
  filter: yup.string().min(2),
});

export { IMovimentacao, bodyValidation, IQueryProps, queryValidation };
