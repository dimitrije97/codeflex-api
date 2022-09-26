import { Expose } from 'class-transformer';
import { CurrencyCodeEnum } from '../../../enums';

export class CurrencyResponse {
  @Expose()
  code!: CurrencyCodeEnum;

  @Expose()
  value!: number;
}
