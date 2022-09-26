import { Joi, Segments } from 'celebrate';

const loginSchema = {
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

export const authSchemas = {
  loginSchema,
};
