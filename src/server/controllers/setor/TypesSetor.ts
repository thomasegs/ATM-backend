import * as yup from "yup";
interface ISetor {
  NOME: string;
  ID_USUARIO: number;
}

const bodyValidation: yup.Schema<ISetor> = yup.object().shape({
  NOME: yup.string().required().min(3),
  ID_USUARIO: yup.number().integer().positive().required(),
});

export { ISetor, bodyValidation };
