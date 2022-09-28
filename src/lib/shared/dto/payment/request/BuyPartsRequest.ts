import { Expose } from 'class-transformer';

export class BuyPartsRequest {
  @Expose()
  articleId!: string;

  @Expose()
  warehouseId!: string;

  @Expose()
  amount!: number;
}
