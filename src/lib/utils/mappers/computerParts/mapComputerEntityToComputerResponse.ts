import { mapToClass } from '../ObjectMapper';
import { ComputerPartEntity } from '../../../entities/ComputerPartEntity';
import { ComputerPartResponse } from '../../../shared/dto/computerParts/response';
import { mapWarehouseEntitiesToWarehouseResponses } from '../warehouses';
import { CurrencyCodeEnum } from '../../../shared/enums';
import { calculatePrice } from '../../currency';

export const mapComputerEntityToComputerResponse = async (
  part: ComputerPartEntity,
  currency?: CurrencyCodeEnum,
): Promise<ComputerPartResponse> => ({
  ...mapToClass<ComputerPartResponse>(part, ComputerPartResponse),
  warehouses: mapWarehouseEntitiesToWarehouseResponses(part.warehouses),
  price: await calculatePrice(part.price, currency),
});

export const mapComputerEntitiesToComputerResponses = async (
  parts: ComputerPartEntity[],
  currency?: CurrencyCodeEnum,
): Promise<ComputerPartResponse[]> =>
  Promise.all(parts.map((part: ComputerPartEntity) => mapComputerEntityToComputerResponse(part, currency)));
