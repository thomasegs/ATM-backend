import * as yup from "yup";

interface IBairro {
  NOME: string;
  ID_CIDADE: number;
}

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}


const bodyValidation: yup.Schema<IBairro> = yup.object().shape({
  NOME: yup.string().required().min(3),
  ID_CIDADE: yup.number().required().integer().positive(),
});

const queryValidation: yup.Schema<IQueryProps> = yup.object().shape({
  page: yup.number().integer().positive(),
  limit: yup.number().integer().positive(),
  filter: yup.string().min(2),
});

export { IBairro, bodyValidation, IQueryProps, queryValidation };
