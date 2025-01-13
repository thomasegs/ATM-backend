import * as yup from "yup";

interface IBairro {
    NOME: string,
    ID_CIDADE: number
};

const bodyValidation: yup.Schema<IBairro> = yup.object().shape({
    NOME: yup.string().required().min(3),
    ID_CIDADE: yup.number().required().integer().positive()
  });

export { IBairro, bodyValidation};