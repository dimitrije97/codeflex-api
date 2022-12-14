import { Column, Entity, OneToMany } from 'typeorm';
import { Expose } from 'class-transformer';

import { BaseEntity } from './BaseEntity';
import { TransactionEntity } from './TransactionEntity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Expose()
  @Column({ unique: true })
  email!: string;

  @Expose()
  @Column()
  password!: string;

  @Expose()
  @OneToMany(() => TransactionEntity, (transaction: TransactionEntity) => transaction.buyer)
  transactions!: TransactionEntity[];
}
