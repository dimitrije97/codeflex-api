import { CurrencyType } from '../../shared/types';
import axios from 'axios';
import { environment } from '../../config/env';

export const getCurrencies = async (): Promise<CurrencyType[]> => {
  const { data } = await axios.get(environment.getCurrenciesApiUrl);
  return Object.values(data.data).map((el) => ({
    // @ts-ignore
    code: el.code,
    // @ts-ignore
    value: el.value,
  }));
};
