import { Repository } from 'typeorm';

import { getBaseRepository } from './BaseRepository';
import { TransactionEntity } from '../entities/TransactionEntity';

export const getTransactionRepository = async (): Promise<Repository<TransactionEntity>> => {
  return getBaseRepository().getRepository(TransactionEntity);
};
