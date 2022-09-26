import { mapToClass } from '../ObjectMapper';
import { CurrencyEntity } from '../../../entities/CurrencyEntity';
import { CurrencyResponse } from '../../../shared/dto/currencies/response';

export const mapCurrencyEntityToCurrencyResponse = (currency: CurrencyEntity): CurrencyResponse =>
  mapToClass<CurrencyResponse>(currency, CurrencyResponse);

export const mapCurrencyEntitiesToCurrencyResponses = (currencies: CurrencyEntity[]): CurrencyResponse[] =>
  currencies.map(mapCurrencyEntityToCurrencyResponse);
