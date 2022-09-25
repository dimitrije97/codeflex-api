import * as bcrypt from 'bcryptjs';
import { UserEntity } from '../../../entities/UserEntity';
import { environment } from '../../env';

const hashPassword = async (password: string): Promise<string> =>
  bcrypt.genSalt(environment.salt).then((salt: string) => bcrypt.hash(password, salt));

export const usersSeed = async (): Promise<Partial<UserEntity>[]> => {
  const password = await hashPassword('user1');
  return [
    {
      email: 'user1@gmail.com',
      password,
    },
  ];
};
