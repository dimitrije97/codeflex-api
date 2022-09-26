import { mapToClass } from '../ObjectMapper';
import { TransactionEntity } from '../../../entities/TransactionEntity';
import { TransactionResponse } from '../../../shared/dto/transactions/response';

export const mapTransactionEntityToTransactionResponse = (transaction: TransactionEntity): TransactionResponse =>
  mapToClass<TransactionResponse>(transaction, TransactionResponse);

export const mapTransactionEntitiesToTransactionResponses = (
  transactions: TransactionEntity[],
): TransactionResponse[] => transactions.map(mapTransactionEntityToTransactionResponse);
