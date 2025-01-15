import * as yup from "yup";
interface IEndereco {
  RUA: string;
  NUMERO?: number;
  COMPLEMENTO?: string;
  ID_BAIRRO: number;
}

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

const bodyValidation: yup.Schema<IEndereco> = yup.object().shape({
  RUA: yup.string().required().min(3),
  NUMERO: yup.number().integer().positive(),
  COMPLEMENTO: yup.string(),
  ID_BAIRRO: yup.number().required().integer().positive(),
});

const queryValidation: yup.Schema<IQueryProps> = yup.object().shape({
  page: yup.number().integer().positive(),
  limit: yup.number().integer().positive(),
  filter: yup.string().min(2),
});

export { IEndereco, bodyValidation, IQueryProps, queryValidation };
