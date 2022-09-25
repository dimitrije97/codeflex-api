import { Repository } from 'typeorm';

import { ComputerPartEntity } from '../entities/ComputerPartEntity';
import { getBaseRepository } from './BaseRepository';

export const getComputerPartRepository = async (): Promise<Repository<ComputerPartEntity>> => {
  return getBaseRepository().getRepository(ComputerPartEntity);
};
