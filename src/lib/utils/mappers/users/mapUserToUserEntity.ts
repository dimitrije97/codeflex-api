import { mapToClass } from '../ObjectMapper';
import { UserEntity } from '../../../entities/UserEntity';
import { UserResponse } from '../../../shared/dto/users';

export const mapUserEntityToUserResponse = (user: UserEntity): UserResponse =>
  mapToClass<UserResponse>(user, UserResponse);

export const mapUserEntitiesToUserResponses = (users: UserEntity[]): UserResponse[] =>
  users.map(mapUserEntityToUserResponse);
