import * as dotenv from 'dotenv';
import { EnvType, ServiceEnvironmentType } from '../../shared/types';

dotenv.config({
  path: `${__dirname}/../../../../.env.${process.env.NODE_ENV}`,
});

export const environment: ServiceEnvironmentType = {
  env: (process.env.NODE_ENV as EnvType) || 'dev',
  port: +(process.env.SERVICE_PORT || 3010),
  serviceName: process.env.SERVICE_NAME || 'CodeFlex',
  database: {
    host: process.env.POSTGRES_HOST || 'localhost',
    name: process.env.POSTGRES_DB_NAME || 'Enter your DB name',
    password: process.env.POSTGRES_PASSWORD || 'Enter your DB password!',
    port: +(process.env.POSTGRES_PORT || 5432),
    user: process.env.POSTGRES_USER || 'Enter your DB username!',
  },
  csvFilePath: `${__dirname}/../../../../${process.env.CSV_FILE ?? 'Programming_Test_2_1.csv'}`,
  getCurrenciesApiUrl: process.env.GET_CURRENCIES_API_URL || 'Api key is missing!',
  currencyCronExpression: process.env.CURRENCY_CRON_EXPRESSION || '0 1 * * *',
  pagination: {
    limit: +(process.env.LIMIT || 8),
    offset: +(process.env.OFFSET || 0),
    page: +(process.env.PAGE || 1),
  },
  security: {
    salt: +(process.env.SALT || 10),
    secret: process.env.SECRET || 'Secret is missing',
  },
};
