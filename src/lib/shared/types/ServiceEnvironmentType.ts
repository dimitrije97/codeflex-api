export type EnvType = 'dev' | 'prod' | 'test';

export type ServiceEnvironmentType = {
  port: number;
  env: EnvType;
  serviceName: string;
  database: {
    name: string;
    host: string;
    password: string;
    user: string;
    port: number;
  };
  csvFilePath: string;
  getCurrenciesApiUrl: string;
  currencyCronExpression: string;
  pagination: {
    limit: number;
    offset: number;
    page: number;
  };
  security: {
    salt: number;
    secret: string;
  };
};
