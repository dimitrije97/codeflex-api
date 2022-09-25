import { WarehouseEntity } from '../../../entities/WarehouseEntity';
import { ComputerPartEntity } from '../../../entities/ComputerPartEntity';

export const warehousesSeed =
  (inventories: number[]) =>
  (part: ComputerPartEntity): Partial<WarehouseEntity>[] =>
    [
      {
        country: 'Serbia',
        city: 'Novi Sad',
        inventory: inventories[0],
        part,
      },
      {
        country: 'Netherlands',
        city: 'Eindhoven',
        inventory: inventories[1],
        part,
      },
    ];
