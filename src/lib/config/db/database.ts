import { Connection, createConnection } from 'typeorm';

import { ENTITIES } from '../../entities';
import { environment } from '../env';

let connection: Connection | null = null;

export const configureDatabase = async (): Promise<Connection> => {
  if (connection) {
    return connection;
  }

  connection = await createConnection({
    database: environment.database.name,
    entities: ENTITIES,
    host: environment.database.host,
    logging: false,
    migrationsRun: environment.env === 'test',
    name: 'codeflex',
    password: environment.database.password,
    port: environment.database.port,
    synchronize: environment.env === 'test',
    type: 'postgres',
    username: environment.database.user,
  });

  return connection;
};

export const closeConnection = async (): Promise<void> => {
  connection?.close().then(() => Promise.resolve());
};
