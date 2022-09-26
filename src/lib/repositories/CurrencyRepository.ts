import { Repository } from 'typeorm';

import { getBaseRepository } from './BaseRepository';
import { CurrencyEntity } from '../entities/CurrencyEntity';

export const getCurrencyRepository = async (): Promise<Repository<CurrencyEntity>> => {
  return getBaseRepository().getRepository(CurrencyEntity);
};
