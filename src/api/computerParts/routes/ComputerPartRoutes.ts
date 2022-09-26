import { NextFunction, Request, Response, Router } from 'express';
import { celebrate } from 'celebrate';

import { computerPartsService } from '../service';
import { queryPaginationSchemas } from '../../../lib/utils/validation/pagination';
import { QueryParamsPaginationType } from '../../../lib/shared/types';
import { createPageableRequest } from '../../../lib/utils/mappers/pagination/createPageableRequest';
import { PageableItems } from '../../../lib/shared/dto/pagination';
import { ComputerPartResponse } from '../../../lib/shared/dto/computerParts/response';

const router = Router();

router.get(
  '/',
  [celebrate(queryPaginationSchemas.queryPaginationWithFilters)],
  (
    req: Request<{}, any, {}, QueryParamsPaginationType & { search?: string; currency?: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    const { query } = req;
    computerPartsService
      .getComputerParts({ ...createPageableRequest(query), search: query.search, currency: query.currency })
      .then((parts: PageableItems<ComputerPartResponse>) => res.send(parts))
      .catch(next);
  },
);

export default router;
