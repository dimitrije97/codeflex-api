import { Repository } from 'typeorm';

import { getBaseRepository } from './BaseRepository';
import { TaxEntity } from '../entities/TaxEntity';

export const getTaxRepository = async (): Promise<Repository<TaxEntity>> => {
  return getBaseRepository().getRepository(TaxEntity);
};
