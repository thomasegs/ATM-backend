import * as yup from "yup";
interface ICidade {
  NOME: string;
  ID_ESTADO: number;
}

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  NOME: yup.string().required().min(3),
  ID_ESTADO: yup.number().integer().required().positive(),
});

const queryValidation: yup.Schema<IQueryProps> = yup.object().shape({
  page: yup.number().integer().positive(),
  limit: yup.number().integer().positive(),
  filter: yup.string().min(2),
});

export { ICidade, bodyValidation, IQueryProps, queryValidation };
