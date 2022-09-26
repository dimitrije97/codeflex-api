import { Joi, Segments } from 'celebrate';

const buyPartSchema = {
  [Segments.BODY]: Joi.object().keys({
    articleId: Joi.string().required(),
    warehouseId: Joi.string().required(),
    amount: Joi.number().required(),
  }),
  [Segments.PARAMS]: Joi.object().keys({
    buyerId: Joi.string().uuid().required(),
  }),
};

export const paymentSchemas = {
  buyPartSchema,
};
