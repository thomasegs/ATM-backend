import * as yup from "yup";
interface IForncedor {
  NOME: string;
  CNPJ: string;
  TELEFONE: string;
  TEL_MOVEL?: string;
  ID_ENDERECO: number;
}

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

interface IParamProps {
  ID?: number;
}

const bodyValidation: yup.Schema<IForncedor> = yup.object().shape({
  NOME: yup.string().required().min(3),
  CNPJ: yup.string().required().length(14),
  TELEFONE: yup.string().required(),
  TEL_MOVEL: yup.string(),
  ID_ENDERECO: yup.number().positive().integer().required(),
});

const queryValidation: yup.Schema<IQueryProps> = yup.object().shape({
  page: yup.number().integer().positive(),
  limit: yup.number().integer().positive(),
  filter: yup.string().min(2),
});

const paramValidation: yup.Schema<IParamProps> = yup.object().shape({
  ID: yup.number().required().positive().integer(),
});

export {
  IForncedor,
  bodyValidation,
  IQueryProps,
  queryValidation,
  IParamProps,
  paramValidation,
};
