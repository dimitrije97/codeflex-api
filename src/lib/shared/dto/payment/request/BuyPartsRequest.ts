import { Expose } from 'class-transformer';

export class BuyPartsRequest {
  @Expose()
  articleId!: string;

  warehouseId!: string;

  amount!: number;
}
