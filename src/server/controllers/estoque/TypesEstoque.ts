import * as yup from "yup";
interface IEstoque {
  NOME: string;
  OBS?: string;
}

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

const bodyValidation = yup.object().shape({
  NOME: yup.string().required().min(3),
  OBS: yup.string(),
});

const queryValidation: yup.Schema<IQueryProps> = yup.object().shape({
  page: yup.number().integer().positive(),
  limit: yup.number().integer().positive(),
  filter: yup.string().min(2),
});

export { IEstoque, bodyValidation, IQueryProps, queryValidation };
