import * as yup from "yup";
interface IEstoque {
  NOME: string;
  OBS?: string;
}

const bodyValidation = yup.object().shape({
  NOME: yup.string().required().min(3),
  OBS: yup.string(),
});

export { IEstoque, bodyValidation };
