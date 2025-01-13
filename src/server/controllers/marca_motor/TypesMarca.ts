import * as yup from "yup";
interface IMarca {
    NOME: string
}

const bodyValidation: yup.Schema<IMarca> = yup.object().shape({
    NOME: yup.string().required().min(2),
});

export {IMarca, bodyValidation};