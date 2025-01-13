import * as yup from "yup";
interface IMovimentacao {
    ID_SETOR?: number,
    ID_FORNECEDOR?: number,
    ID_PRATELEIRA?: number,
    QUANDO: Date,
    ID_USUARIO: number,
    ID_MOTOR: number,
    OBS?: string
}

const bodyValidation: yup.Schema<IMovimentacao> = yup.object().shape({
    ID_SETOR: yup.number().integer().positive(),
    ID_FORNECEDOR: yup.number().integer().positive(),
    ID_PRATELEIRA: yup.number().integer().positive(),
    QUANDO: yup.date().default(new Date()).required(),
    ID_USUARIO: yup.number().integer().positive().required(),
    ID_MOTOR: yup.number().integer().positive().required(),
    OBS: yup.string()
});

export { IMovimentacao, bodyValidation };
