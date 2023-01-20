import * as yup from 'yup';

export const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8, 'Your password can not be less then 8 symbols')
      .required(),
  })
  .required();
