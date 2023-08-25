import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  model: yup.string().required(),
  brand: yup.string().required(),
  color: yup.string().required(),
  year: yup.number().integer().required(),
  price_per_day: yup.number().integer().required(),
  organization_id: yup.string().nullable().required(),
});
