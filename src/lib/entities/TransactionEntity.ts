import { Column, Entity, ManyToOne } from 'typeorm';
import { Expose } from 'class-transformer';

import { BaseEntity } from './BaseEntity';
import { UserEntity } from './UserEntity';
import { TaxEntity } from './TaxEntity';
import { ComputerPartEntity } from './ComputerPartEntity';

@Entity({ name: 'transaction' })
export class TransactionEntity extends BaseEntity {
  @Expose()
  @ManyToOne(() => UserEntity, (buyer: UserEntity) => buyer.transactions, { onDelete: 'CASCADE' })
  buyer!: UserEntity;

  @Expose()
  @ManyToOne(() => ComputerPartEntity, (part: ComputerPartEntity) => part.transactions, { onDelete: 'CASCADE' })
  part!: ComputerPartEntity;

  @Expose()
  @ManyToOne(() => TaxEntity, (tax: TaxEntity) => tax.transactions, { onDelete: 'CASCADE' })
  tax!: TaxEntity;

  @Expose()
  @Column({ type: 'decimal' })
  priceWithoutTax!: number;

  @Expose()
  @Column({ type: 'decimal' })
  priceWithTax!: number;
}
