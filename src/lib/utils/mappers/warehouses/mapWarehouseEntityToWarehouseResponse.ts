import { mapToClass } from '../ObjectMapper';
import { WarehouseEntity } from '../../../entities/WarehouseEntity';
import { WarehouseResponse } from '../../../shared/dto/warehouses/response';

export const mapWarehouseEntityToWarehouseResponse = (warehouse: WarehouseEntity): WarehouseResponse =>
  mapToClass<WarehouseResponse>(warehouse, WarehouseResponse);

export const mapWarehouseEntitiesToWarehouseResponses = (warehouses: WarehouseEntity[]): WarehouseResponse[] =>
  warehouses.map(mapWarehouseEntityToWarehouseResponse);
