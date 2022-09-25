import { Column, Entity, OneToMany } from 'typeorm';
import { Expose } from 'class-transformer';

import { BaseEntity } from './BaseEntity';
import { TransactionEntity } from './TransactionEntity';

@Entity({ name: 'computer_part' })
export class ComputerPartEntity extends BaseEntity {
  @Expose()
  @Column({ unique: true })
  articleId!: string;

  @Expose()
  @Column()
  description!: string;

  @Expose()
  @Column()
  brand!: string;

  @Expose()
  @Column()
  color!: string;

  @Expose()
  @Column({ type: 'decimal', default: 0.0 })
  price!: number;

  @Expose()
  @OneToMany(() => TransactionEntity, (transaction: TransactionEntity) => transaction.part)
  transactions!: TransactionEntity[];
}
