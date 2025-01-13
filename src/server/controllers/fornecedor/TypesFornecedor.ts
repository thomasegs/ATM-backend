import * as yup from "yup";
interface IForncedor {
    NOME: string, 
    CNPJ: string,
    TELEFONE: string,
    TEL_MOVEL?: string,
    ID_ENDERECO: number
};

const bodyValidation:yup.Schema<IForncedor> = yup.object().shape({
    NOME: yup.string().required().min(3),
    CNPJ: yup.string().required().length(14),
    TELEFONE: yup.string().required(),
    TEL_MOVEL: yup.string(),
    ID_ENDERECO: yup.number().required().positive(),
});

export { IForncedor, bodyValidation };
