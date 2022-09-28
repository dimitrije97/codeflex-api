import { PageableItems, PageableRequest } from '../../../lib/shared/dto/pagination';
import { TransactionResponse } from '../../../lib/shared/dto/transactions/response';
import { getTransactionRepository } from '../../../lib/repositories';
import { TransactionEntity } from '../../../lib/entities/TransactionEntity';
import { Repository } from 'typeorm';
import { createPageableResponse } from '../../../lib/utils/mappers/pagination';
import { mapTransactionEntitiesToTransactionResponses } from '../../../lib/utils/mappers/transactions';

interface ITransactionService {
  getTransactionsByBuyer: (buyerId: string, query: PageableRequest) => Promise<PageableItems<TransactionResponse>>;
}

const getTransactionsByBuyer = async (
  buyerId: string,
  query: PageableRequest,
): Promise<PageableItems<TransactionResponse>> => {
  const transactionRepository: Repository<TransactionEntity> = await getTransactionRepository();

  const { offset, limit, page } = query;

  const [items, count] = await transactionRepository
    .createQueryBuilder('transaction')
    .leftJoinAndSelect('transaction.buyer', 'buyer')
    .leftJoinAndSelect('transaction.tax', 'tax')
    .leftJoinAndSelect('transaction.part', 'part')
    .skip(offset)
    .take(limit)
    .where('buyer.id = :buyerId', { buyerId })
    .getManyAndCount();

  return createPageableResponse<TransactionResponse>(
    mapTransactionEntitiesToTransactionResponses(items),
    limit,
    count,
    page,
  );
};

export const transactionService: ITransactionService = {
  getTransactionsByBuyer,
};
