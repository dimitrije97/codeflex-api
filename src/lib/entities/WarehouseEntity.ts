import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Expose } from 'class-transformer';
import { ComputerPartEntity } from './ComputerPartEntity';

@Entity({ name: 'warehouse' })
export class WarehouseEntity extends BaseEntity {
  @Expose()
  @Column()
  country!: string;

  @Expose()
  @Column()
  city!: string;

  @Expose()
  @Column()
  inventory!: number;

  @Expose()
  @ManyToOne(() => ComputerPartEntity, (part: ComputerPartEntity) => part.warehouses, { onDelete: 'CASCADE' })
  part!: ComputerPartEntity;
}
