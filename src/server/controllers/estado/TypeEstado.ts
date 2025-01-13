import * as yup from "yup";
interface IEstado {
    NOME: string,
    SIGLA: string
}

const bodyValidation: yup.Schema<IEstado> = yup.object().shape({
    NOME: yup.string().required().min(3),
    SIGLA: yup.string().required().length(2),
});

export { IEstado, bodyValidation };
