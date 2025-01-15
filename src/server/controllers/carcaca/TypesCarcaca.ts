import * as yup from "yup";
interface ICarcaca {
  NOME: string;
}

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}


const bodyValidation: yup.Schema<ICarcaca> = yup.object().shape({
  NOME: yup.string().required().min(3),
});

const queryValidation: yup.Schema<IQueryProps> = yup.object().shape({
  page: yup.number().integer().positive(),
  limit: yup.number().integer().positive(),
  filter: yup.string().min(2),
});

export { ICarcaca, bodyValidation, IQueryProps, queryValidation };
