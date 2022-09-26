import { Application } from 'express';
import { computerPartRoutes } from '../../../api/computerParts/routes';
import { transactionRoutes } from '../../../api/transactions/routes';
import { paymentRoutes } from '../../../api/payment/routes';
import { currencyRoutes } from '../../../api/currencies/routes';

export const configureRoutes = (app: Application): void => {
  app.use('/api/parts', computerPartRoutes);
  app.use('/api/transactions', transactionRoutes);
  app.use('/api/payment', paymentRoutes);
  app.use('/api/currencies', currencyRoutes);
};
