import { BAD_REQUEST, MISSING_INVENTORY } from '../utils/constants/ErrorMessages';
import { BaseException } from './BaseException';

export class MissingInventoryException extends BaseException {
  constructor() {
    super(BAD_REQUEST, MISSING_INVENTORY);

    Object.setPrototypeOf(this, MissingInventoryException.prototype);
  }
}
