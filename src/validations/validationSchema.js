import * as yup from 'yup'


export const loginValidationSchema = yup.object().shape({
    username: yup
        .string()
        .email("Email no es valido")
        .required("Email es requerido"),
    password: yup
        .string()
        .required("Contraseña es requerida")
})

export const registerValidationSchema = yup.object().shape({
    name: yup
        .string()
        .required(),
    email: yup
        .string()
        .email("Email no es valido")
        .required("Email es requerido"),
    password: yup
        .string()
        .required("Contraseña es requerida"),
})
