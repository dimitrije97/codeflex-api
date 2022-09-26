import { Expose } from 'class-transformer';
import { PageableRequest } from '../../pagination';

export class GetComputerPartsRequest extends PageableRequest {
  @Expose()
  search?: string;

  @Expose()
  currency?: string;
}
