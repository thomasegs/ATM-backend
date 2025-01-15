import * as yup from "yup";

interface IUsuario {
  NOME: string;
  EMAIL: string;
  ID_ENDERECO: number;
  TELEFONE?: string;
  TEL_MOVEL?: string;
}

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

interface IParamProps {
  ID?: number;
}

const bodyValidation: yup.Schema<IUsuario> = yup.object().shape({
  NOME: yup.string().required().min(3),
  EMAIL: yup.string().required().min(5),
  ID_ENDERECO: yup.number().integer().positive().required(),
  TELEFONE: yup.string(),
  TEL_MOVEL: yup.string(),
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
  IUsuario,
  bodyValidation,
  IQueryProps,
  queryValidation,
  IParamProps,
  paramValidation,
};
