import { Expose, Type } from 'class-transformer';
import { UserResponse } from '../../../../lib/shared/dto/users';

export class LoginResponse {
  @Expose()
  @Type(() => UserResponse)
  user!: UserResponse;

  @Expose()
  jwt!: string;
}
