import * as yup from "yup";
interface IMotor {
  ID_MARCA: number;
  POLOS?: number;
  POTENCIA?: number;
  ID_CARCACA: number;
  OBS?: string;
}

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

const bodyValidation: yup.Schema<IMotor> = yup.object().shape({
  ID_MARCA: yup.number().positive().integer().required(),
  POLOS: yup.number(),
  POTENCIA: yup.number(),
  ID_CARCACA: yup.number().positive().integer().required(),
  OBS: yup.string(),
});

const queryValidation: yup.Schema<IQueryProps> = yup.object().shape({
  page: yup.number().integer().positive(),
  limit: yup.number().integer().positive(),
  filter: yup.string().min(2),
});

export { IMotor, bodyValidation, IQueryProps, queryValidation};
