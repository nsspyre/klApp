import * as Yup from 'yup';

export const USERNAME = Yup.string()
    .required()

export const EMAIL = Yup.string()
    .email()
    .required()

export const PASSWORD = Yup.string()
    .matches(/^(?=\w*\d)(?=\w*[a-z])\S{8,16}$/)
    .min(8)
    .max(16)
    .required();
