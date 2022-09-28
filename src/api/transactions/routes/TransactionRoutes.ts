import { NextFunction, Request, Response, Router } from 'express';
import { celebrate } from 'celebrate';

import { transactionService } from '../service';
import { queryPaginationSchemas } from '../../../lib/utils/validation/pagination';
import { QueryParamsPaginationType } from '../../../lib/shared/types';
import { createPageableRequest } from '../../../lib/utils/mappers/pagination/createPageableRequest';
import { PageableItems } from '../../../lib/shared/dto/pagination';
import { TransactionResponse } from '../../../lib/shared/dto/transactions/response';

const router = Router();

router.get(
  '/:buyerId/user',
  [celebrate(queryPaginationSchemas.queryPagination)],
  (req: Request<{ buyerId: string }, any, {}, QueryParamsPaginationType>, res: Response, next: NextFunction) => {
    const { query, params } = req;
    transactionService
      .getTransactionsByBuyer(params.buyerId, createPageableRequest(query))
      .then((transactions: PageableItems<TransactionResponse>) => res.send(transactions))
      .catch(next);
  },
);

export default router;
