import * as yup from "yup";
interface ISetor {
  NOME: string;
  ID_USUARIO: number;
}

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

interface IParamProps {
  ID?: number;
}

const bodyValidation: yup.Schema<ISetor> = yup.object().shape({
  NOME: yup.string().required().min(3),
  ID_USUARIO: yup.number().integer().positive().required(),
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
  ISetor,
  bodyValidation,
  IQueryProps,
  queryValidation,
  IParamProps,
  paramValidation,
};
