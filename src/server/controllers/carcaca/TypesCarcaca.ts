import * as yup from "yup";
interface ICarcaca {
  NOME: string;
}

const bodyValidation: yup.Schema<ICarcaca> = yup.object().shape({
    NOME: yup.string().required().min(3),
  });

export { ICarcaca, bodyValidation };
