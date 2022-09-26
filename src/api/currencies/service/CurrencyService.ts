import { CurrencyResponse } from '../../../lib/shared/dto/currencies/response';
import { Repository } from 'typeorm';
import { CurrencyEntity } from '../../../lib/entities/CurrencyEntity';
import { getCurrencyRepository } from '../../../lib/repositories';
import { mapCurrencyEntitiesToCurrencyResponses } from '../../../lib/utils/mappers/currencies';

interface ICurrencyService {
  getAvailableCurrencies: () => Promise<CurrencyResponse[]>;
}

const getAvailableCurrencies = async (): Promise<CurrencyResponse[]> => {
  const currencyRepository: Repository<CurrencyEntity> = await getCurrencyRepository();
  // TODO: check if currency exists
  return currencyRepository.find().then(mapCurrencyEntitiesToCurrencyResponses);
};

export const currencyService: ICurrencyService = {
  getAvailableCurrencies,
};
