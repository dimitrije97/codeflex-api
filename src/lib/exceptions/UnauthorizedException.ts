import { AUTHENTICATION_FAILED, UNAUTHORIZED } from '../utils/constants/ErrorMessages';
import { BaseException } from './BaseException';

export class UnauthorizedException extends BaseException {
  constructor() {
    super(UNAUTHORIZED, AUTHENTICATION_FAILED);

    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}
