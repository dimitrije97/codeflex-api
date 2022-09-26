import { Repository } from 'typeorm';

import { getBaseRepository } from './BaseRepository';
import { WarehouseEntity } from '../entities/WarehouseEntity';

export const getWarehouseRepository = async (): Promise<Repository<WarehouseEntity>> => {
  return getBaseRepository().getRepository(WarehouseEntity);
};
