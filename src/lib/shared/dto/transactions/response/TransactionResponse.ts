import { Expose, Type } from 'class-transformer';
import { UserResponse } from '../../users';
import { ComputerPartResponse } from '../../computerParts/response';
import { TaxResponse } from '../../taxes/response';

export class TransactionResponse {
  @Expose()
  id!: string;

  @Expose()
  priceWithoutTax!: number;

  @Expose()
  priceWithTax!: number;

  @Expose()
  @Type(() => UserResponse)
  buyer!: UserResponse;

  @Expose()
  @Type(() => ComputerPartResponse)
  part!: ComputerPartResponse;

  @Expose()
  @Type(() => TaxResponse)
  tax!: TaxResponse;
}
