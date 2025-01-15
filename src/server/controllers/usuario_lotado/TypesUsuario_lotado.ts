import * as yup from "yup";

interface IUsuario_Lotado {
  ID_USUARIO: number;
  ID_SETOR: number;
  QUANDO: Date;
}

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

interface IParamProps {
  ID?: number;
}

const bodyValidation: yup.Schema<IUsuario_Lotado> = yup.object().shape({
  ID_USUARIO: yup.number().integer().positive().required(),
  ID_SETOR: yup.number().integer().positive().required(),
  QUANDO: yup.date().default(new Date()),
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
  IUsuario_Lotado,
  bodyValidation,
  IQueryProps,
  queryValidation,
  IParamProps,
  paramValidation,
};
