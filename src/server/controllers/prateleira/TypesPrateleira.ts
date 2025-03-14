import * as yup from "yup";
interface IPrateleira {
  ID_ESTOQUE: number;
}

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

interface IParamProps {
  ID?: number;
}

const bodyValidation: yup.Schema<IPrateleira> = yup.object().shape({
  ID_ESTOQUE: yup.number().integer().positive().required(),
});

const queryValidation: yup.Schema<IQueryProps> = yup.object().shape({
  page: yup.number().integer().positive(),
  limit: yup.number().integer().positive(),
  filter: yup.string().min(2),
});

const paramValidation: yup.Schema<IParamProps> = yup.object().shape({
  ID: yup.number().required().positive().integer(),
});

export {
  IPrateleira,
  bodyValidation,
  IQueryProps,
  queryValidation,
  IParamProps,
  paramValidation,
};
