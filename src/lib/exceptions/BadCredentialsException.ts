import { BAD_CREDENTIALS, BAD_REQUEST } from '../utils/constants/ErrorMessages';
import { BaseException } from './BaseException';

export class BadCredentialsException extends BaseException {
  constructor() {
    super(BAD_REQUEST, BAD_CREDENTIALS);

    Object.setPrototypeOf(this, BadCredentialsException.prototype);
  }
}
