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

export { IUsuario_Lotado, bodyValidation, IQueryProps, queryValidation };
