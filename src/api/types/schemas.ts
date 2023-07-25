import * as yup from 'yup'
export type RegisterFields = 'name' | 'surname' | 'login' | 'password' | 'repeatPassword' | 'tel'
export type IRegisterFields = {
  [K in RegisterFields]: string
} & {
  privacy_policy: boolean
  personal_data: boolean
}

const commonFields = {
  login: yup.string().required('Login is required'),
  password: yup.string().required('Password is required'),
}
export const registerSchemas = yup.object({
  ...commonFields,
  name: yup.string().required('Name is required'),
  surname: yup.string().required('Surname is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please, repeat password'),
  tel: yup.string().required('Tel or email is required'),
  privacy_policy: yup.boolean().required(),
  personal_data: yup.boolean().required(),
})

export interface ILoginFields extends Pick<IRegisterFields, 'login' | 'password'> {}
export const loginSchema = yup.object({
  ...commonFields,
})
