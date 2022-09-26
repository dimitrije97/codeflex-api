import { TransactionResponse } from '../../../lib/shared/dto/transactions/response';
import { BuyPartsRequest } from '../../../lib/shared/dto/payment/request';
import { Repository } from 'typeorm';
import { ComputerPartEntity } from '../../../lib/entities/ComputerPartEntity';
import {
  getComputerPartRepository,
  getTaxRepository,
  getTransactionRepository,
  getUserRepository,
  getWarehouseRepository,
} from '../../../lib/repositories';
import { TransactionEntity } from '../../../lib/entities/TransactionEntity';
import { WarehouseEntity } from '../../../lib/entities/WarehouseEntity';
import { UserEntity } from '../../../lib/entities/UserEntity';
import { TaxEntity } from '../../../lib/entities/TaxEntity';
import { mapTransactionEntityToTransactionResponse } from '../../../lib/utils/mappers/transactions';

interface IPaymentService {
  buyParts: (buyerId: string, request) => Promise<TransactionResponse>;
}

const buyParts = async (buyerId: string, request: BuyPartsRequest): Promise<TransactionResponse> => {
  const computerPartRepository: Repository<ComputerPartEntity> = await getComputerPartRepository();
  const transactionRepository: Repository<TransactionEntity> = await getTransactionRepository();
  const warehouseRepository: Repository<WarehouseEntity> = await getWarehouseRepository();
  const userRepository: Repository<UserEntity> = await getUserRepository();
  const taxRepository: Repository<TaxEntity> = await getTaxRepository();

  const buyer: UserEntity = await userRepository.findOneOrFail({ where: { id: buyerId } });
  // TODO: check if users exists
  const tax: TaxEntity = await taxRepository.findOneOrFail();
  // TODO: check if taxes exists
  const part: ComputerPartEntity = await computerPartRepository.findOneOrFail({
    where: { articleId: request.articleId },
    relations: ['warehouses'],
  });
  // TODO: check if part exists

  const warehouse: WarehouseEntity = part.warehouses.find(
    (warehouse: WarehouseEntity) => warehouse.id === request.warehouseId,
  )!;
  // TODO: check if warehouse exists

  if (warehouse.inventory - request.amount < 0) {
    throw new Error('Missing inventory'); // TODO: error handling
  }

  const priceWithoutTax: number = +part.price;
  const priceWithTax: number = +part.price + +(part.price * tax.tax) / 100;

  await warehouseRepository.update(warehouse.id, { inventory: warehouse.inventory - request.amount });
  // TODO: add transaction to revert warehouse update if something goes wrong with transaction saving
  return transactionRepository
    .save({
      part,
      buyer,
      tax,
      priceWithoutTax,
      priceWithTax,
    })
    .then(mapTransactionEntityToTransactionResponse);
};

export const paymentService: IPaymentService = {
  buyParts,
};
