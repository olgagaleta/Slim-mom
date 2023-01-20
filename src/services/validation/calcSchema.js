import * as yup from 'yup';
export const calcSchema = yup
  .object({
    height: yup
      .number()
      .typeError('Please, enter only numbers')
      .required()
      .positive()
      .integer()
      .min(100, 'Minimum 100 symbols must be used')
      .max(250, 'Maximum 250 symbols must be used'),
    age: yup
      .number()
      .typeError('Please, enter only numbers')
      .required()
      .positive('Must be a positive number')
      .integer()
      .min(18, 'Your age can not be less then 18')
      .max(100, 'Your age can not be more then 100'),
    weight: yup
      .number()
      .typeError('Please, enter only numbers')
      .required()
      .positive()
      .integer()
      .min(20, 'Your minimum weight must be 20')
      .max(500, 'Your maximum weight can not be more 500'),
    desiredWeight: yup
      .number()
      .typeError('you must write number')
      .required()
      .positive()
      .integer()
      .min(20, 'Your minimum desired weight must be 20')
      .max(500, 'Your maximum desired weight can not be more 500'),
    bloodType: yup.number().required().positive().integer().min(1).max(4),
  })
  .required();
