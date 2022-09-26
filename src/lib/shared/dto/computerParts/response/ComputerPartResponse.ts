import { Expose, Type } from 'class-transformer';
import { WarehouseResponse } from '../../warehouses/response';

export class ComputerPartResponse {
  @Expose()
  id!: string;

  @Expose()
  articleId!: string;

  @Expose()
  description!: string;

  @Expose()
  brand!: string;

  @Expose()
  color!: string;

  @Expose()
  price!: number;

  @Expose()
  @Type(() => WarehouseResponse)
  warehouses!: WarehouseResponse[];
}
