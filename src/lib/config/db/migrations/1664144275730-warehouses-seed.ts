import { MigrationInterface, QueryRunner } from 'typeorm';
import { warehousesSeed } from '../seed/warehousesSeed';
import { ComputerPartEntity } from '../../../entities/ComputerPartEntity';
import { WarehouseEntity } from '../../../entities/WarehouseEntity';

export class warehousesSeed1664144275730 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const inventories: number[] = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
    const warehouses: (part: ComputerPartEntity) => Partial<WarehouseEntity>[] = warehousesSeed(inventories);
    const parts: ComputerPartEntity[] = await queryRunner.manager.getRepository(ComputerPartEntity).find();

    await Promise.all(
      parts.map((part: ComputerPartEntity) => [
        queryRunner.manager.createQueryBuilder().insert().into('warehouse').values(warehouses(part)[0]).execute(),
        queryRunner.manager.createQueryBuilder().insert().into('warehouse').values(warehouses(part)[1]).execute(),
      ]),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.createQueryBuilder().delete().from('warehouse').execute();
  }
}
