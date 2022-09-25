import { Column, Entity } from 'typeorm';
import { Expose } from 'class-transformer';

import { BaseEntity } from './BaseEntity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Expose()
  @Column({ unique: true })
  email!: string;

  @Expose()
  @Column()
  password!: string;
}
