import { Joi, Segments } from 'celebrate';

const queryPagination = {
  [Segments.QUERY]: Joi.object().keys({
    offset: Joi.string().optional().default('0'),
    limit: Joi.string().optional().default('8'),
    page: Joi.string().optional().default('1'),
  }),
};

const queryPaginationWithFilters = {
  [Segments.QUERY]: Joi.object().keys({
    offset: Joi.string().optional().default('0'),
    limit: Joi.string().optional().default('8'),
    page: Joi.string().optional().default('1'),
    search: Joi.string().optional(),
    currency: Joi.string().optional(),
  }),
};

export const queryPaginationSchemas = {
  queryPagination,
  queryPaginationWithFilters,
};
