import * as yup from "yup";
interface ICidade {
    NOME: string,
    ID_ESTADO: number
};

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    NOME: yup.string().required().min(3),
    ID_ESTADO: yup.number().integer().required().positive()
});

export { ICidade, bodyValidation };
