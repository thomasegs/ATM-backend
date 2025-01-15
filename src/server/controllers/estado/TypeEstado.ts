import * as yup from "yup";
interface IEstado {
  NOME: string;
  SIGLA: string;
}

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}


const bodyValidation: yup.Schema<IEstado> = yup.object().shape({
  NOME: yup.string().required().min(3),
  SIGLA: yup.string().required().length(2),
});

const queryValidation: yup.Schema<IQueryProps> = yup.object().shape({
  page: yup.number().integer().positive(),
  limit: yup.number().integer().positive(),
  filter: yup.string().min(2),
});

export { IEstado, bodyValidation, IQueryProps, queryValidation };
