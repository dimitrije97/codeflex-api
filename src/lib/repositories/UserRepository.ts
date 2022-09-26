import { Repository } from 'typeorm';

import { getBaseRepository } from './BaseRepository';
import { UserEntity } from '../entities/UserEntity';

export const getUserRepository = async (): Promise<Repository<UserEntity>> => {
  return getBaseRepository().getRepository(UserEntity);
};
