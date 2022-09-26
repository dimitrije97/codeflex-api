import { sign } from 'jsonwebtoken';
import { environment } from '../../config/env';

export const generateToken = (id: string, email: string) => {
  return sign({ id, email }, environment.security.secret);
};
