import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  joined_at: yup.date().required(),
  left_at: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
