import { Application } from 'express';
import { computerPartRoutes } from '../../../api/computerParts/routes';

export const configureRoutes = (app: Application): void => {
  app.use('/api/parts', computerPartRoutes);
};
