import { Column, Entity, OneToMany } from 'typeorm';
import { Expose } from 'class-transformer';

import { BaseEntity } from './BaseEntity';
import { TransactionEntity } from './TransactionEntity';

@Entity({ name: 'tax' })
export class TaxEntity extends BaseEntity {
  @Expose()
  @Column({ type: 'decimal', default: 23.5 })
  tax!: number;

  @Expose()
  @OneToMany(() => TransactionEntity, (transaction: TransactionEntity) => transaction.tax)
  transactions!: TransactionEntity[];
}
