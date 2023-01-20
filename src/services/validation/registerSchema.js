import * as yup from 'yup';
export const registerSchema = yup
  .object({
    username: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Your name can not include any symbols.'
      )
      .required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8, 'Your password can not be less then 8 symbols')
      .required(),
  })
  .required();
