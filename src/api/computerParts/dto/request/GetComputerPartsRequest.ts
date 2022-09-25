import { PageableRequest } from '../../../../lib/shared/dto/pagination';
import { Expose } from 'class-transformer';

export class GetComputerPartsRequest extends PageableRequest {
  @Expose()
  search?: string;
}
