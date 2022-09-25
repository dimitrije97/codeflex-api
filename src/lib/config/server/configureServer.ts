import express, { Express, json } from 'express';
import cors from 'cors';
import cron from 'node-cron';
import { CurrencyType } from '../../shared/types';
import { getCurrencies } from '../../utils/currency';
import { getCurrencyRepository } from '../../repositories';
import { environment } from '../env';

export const configureServer = (): Express => {
  const app: Express = express();

  cron.schedule(
    environment.currencyCronExpression,
    async () => {
      const currencies: CurrencyType[] = await getCurrencies();
      const currencyRepository = await getCurrencyRepository();
      await Promise.all(
        currencies.map((curr: CurrencyType) =>
          currencyRepository.createQueryBuilder('currency').update({ value: curr.value }).where({ code: curr.code }),
        ),
      );
    },
    {
      scheduled: true,
      timezone: 'UTC',
    },
  );

  app.use(cors());
  app.use(json());

  return app;
};
