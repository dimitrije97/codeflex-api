import { expressjwt } from 'express-jwt';

import { Application } from 'express';
import { computerPartRoutes } from '../../../api/computerParts/routes';
import { transactionRoutes } from '../../../api/transactions/routes';
import { paymentRoutes } from '../../../api/payment/routes';
import { currencyRoutes } from '../../../api/currencies/routes';
import { authRoutes } from '../../../api/auth/routes';
import { environment } from '../env';

export const configureRoutes = (app: Application): void => {
  app.use(
    expressjwt({ secret: environment.security.secret, algorithms: ['HS256'] }).unless({
      path: ['/api/auth/login'],
    }),
  );

  app.use('/api/auth', authRoutes);
  app.use('/api/parts', computerPartRoutes);
  app.use('/api/transactions', transactionRoutes);
  app.use('/api/payment', paymentRoutes);
  app.use('/api/currencies', currencyRoutes);
};
