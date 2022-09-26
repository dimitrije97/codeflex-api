import { NextFunction, Request, Response, Router } from 'express';
import { celebrate } from 'celebrate';

import { TransactionResponse } from '../../../lib/shared/dto/transactions/response';
import { paymentSchemas } from './PaymentSchemas';
import { BuyPartsRequest } from '../../../lib/shared/dto/payment/request';
import { paymentService } from '../service';

const router = Router();

router.post(
  '/:buyerId/user',
  [celebrate(paymentSchemas.buyPartSchema)],
  (req: Request<{ buyerId: string }, any, BuyPartsRequest>, res: Response, next: NextFunction) => {
    const { body, params } = req;
    paymentService
      .buyParts(params.buyerId, body as BuyPartsRequest)
      .then((transaction: TransactionResponse) => res.send(transaction))
      .catch(next);
  },
);

export default router;
