import { CurrencyCodeEnum } from '../../shared/enums';
import { getCurrencyRepository } from '../../repositories';

export const calculatePrice = async (price: number, currency?: CurrencyCodeEnum): Promise<number> => {
  const currencyRepository = await getCurrencyRepository();

  return currency ? +((await currencyRepository.findOneOrFail({ where: { code: currency } })).value * price) : +price;
};
