import * as yup from 'yup'


export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email no es valido")
        .required("Email es requerido"),
    password: yup
        .string()
        .required("Contraseña es requerida")
})

export const RegisterValidationSchema = yup.object().shape({
    username: yup
        .string()
        .required(),
    email: yup
        .string()
        .email("Email no es valido")
        .required("Email es requerido"),
    password: yup
        .string()
        .required("Contraseña es requerida"),
    confirmPassword: yup
        .string()
        .required("Contraseña es requerida")
        .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
})
