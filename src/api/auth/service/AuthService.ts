import * as bcrypt from 'bcryptjs';

import { getUserRepository } from '../../../lib/repositories';
import { LoginResponse } from '../dto/response';
import { mapToClass } from '../../../lib/utils/mappers/ObjectMapper';
import { LoginRequest } from '../dto/request';
import { generateToken } from '../../../lib/utils/jwt';
import { BadCredentialsException, ResourceNotFoundException } from '../../../lib/exceptions';

interface IAuthService {
  login: (loginRequest: LoginRequest) => Promise<LoginResponse>;
}

const login = async (loginRequest: LoginRequest): Promise<LoginResponse> => {
  const userRepository = await getUserRepository();

  const { email, password } = loginRequest;

  const user = await userRepository.findOne({ email });

  if (!user) {
    throw new ResourceNotFoundException();
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new BadCredentialsException();
  }

  const jwt = generateToken(user.id, user.email);

  return mapToClass({ jwt, user }, LoginResponse);
};

export const authService: IAuthService = {
  login,
};
