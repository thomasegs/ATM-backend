import * as yup from "yup";

interface IUsuario {
  NOME: string;
  EMAIL: string;
  ID_ENDERECO: number;
  TELEFONE?: string;
  TEL_MOVEL?: string;
}

const bodyValidation: yup.Schema<IUsuario> = yup.object().shape({
  NOME: yup.string().required().min(3),
  EMAIL: yup.string().required().min(5),
  ID_ENDERECO: yup.number().integer().positive().required(),
  TELEFONE: yup.string(),
  TEL_MOVEL: yup.string(),
});

export { IUsuario, bodyValidation };
