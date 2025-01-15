import * as yup from "yup";
interface ICidade {
  NOME: string;
  ID_ESTADO: number;
}

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

interface IParamProps {
  ID?: number;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  NOME: yup.string().required().min(3),
  ID_ESTADO: yup.number().integer().required().positive(),
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
  ICidade,
  bodyValidation,
  IQueryProps,
  queryValidation,
  IParamProps,
  paramValidation,
};
