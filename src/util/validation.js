import * as yup from 'yup';


export const todoValidationSchema = yup.object({
    text: yup
    .string()
    .required('Este campo es obligatorio')
    .max(50, 'La entrada no puede tener más 50 caracteres.'),

    details: yup
    .string()
    .required('Este campo es obligatorio'),

    priority: yup
    .number()
    .required('Este campo es obligatorio')
    .min(1)
    .max(5),


});
