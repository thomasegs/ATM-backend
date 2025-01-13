import * as yup from "yup";
interface IMotor {
  ID_MARCA: number;
  POLOS?: number;
  POTENCIA?: number;
  ID_CARCACA: number;
  OBS?: string;
}

const bodyValidation: yup.Schema<IMotor> = yup.object().shape({
  ID_MARCA: yup.number().positive().integer().required(),
  POLOS: yup.number(),
  POTENCIA: yup.number(),
  ID_CARCACA: yup.number().positive().integer().required(),
  OBS: yup.string(),
});

export { IMotor, bodyValidation };
