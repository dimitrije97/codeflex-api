import { NextFunction, Request, Response, Router } from 'express';
import { currencyService } from '../service';
import { CurrencyResponse } from '../../../lib/shared/dto/currencies/response';

const router = Router();

router.get('/', (req: Request<{}, any, {}>, res: Response, next: NextFunction) => {
  currencyService
    .getAvailableCurrencies()
    .then((currencies: CurrencyResponse[]) => res.send(currencies))
    .catch(next);
});

export default router;
