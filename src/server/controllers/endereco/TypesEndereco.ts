import * as yup from "yup";
interface IEndereco {
  RUA: string;
  NUMERO?: number;
  COMPLEMENTO?: string;
  ID_BAIRRO: number;
}

const bodyValidation: yup.Schema<IEndereco> = yup.object().shape({
  RUA: yup.string().required().min(3),
  NUMERO: yup.number().integer().positive(),
  COMPLEMENTO: yup.string(),
  ID_BAIRRO: yup.number().required().integer().positive(),
});

export { IEndereco, bodyValidation };
