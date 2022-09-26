import { Expose } from 'class-transformer';

export class TaxResponse {
  @Expose()
  id!: string;

  @Expose()
  tax!: number;
}
