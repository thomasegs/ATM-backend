import * as yup from "yup";

interface IUsuario_Lotado {
  ID_USUARIO: number;
  ID_SETOR: number;
  QUANDO: Date;
}

const bodyValidation: yup.Schema<IUsuario_Lotado> = yup.object().shape({
  ID_USUARIO: yup.number().integer().positive().required(),
  ID_SETOR: yup.number().integer().positive().required(),
  QUANDO: yup.date().default(new Date()),
});

export { IUsuario_Lotado, bodyValidation };
