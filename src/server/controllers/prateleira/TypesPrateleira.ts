import * as yup from "yup";
interface IPrateleira {
    ID_ESTOQUE: number
};

const bodyValidation: yup.Schema<IPrateleira> = yup.object().shape({
    ID_ESTOQUE: yup.number().integer().positive().required(),
});

export { IPrateleira, bodyValidation };
