import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Expose } from 'class-transformer';
import { CurrencyCodeEnum } from '../shared/enums';

@Entity({ name: 'currency' })
export class CurrencyEntity extends BaseEntity {
  @Expose()
  @Column({ type: 'decimal', default: 0.0 })
  value!: number;

  @Expose()
  @Column({ type: 'enum', enum: CurrencyCodeEnum, unique: true })
  code!: CurrencyCodeEnum;
}
