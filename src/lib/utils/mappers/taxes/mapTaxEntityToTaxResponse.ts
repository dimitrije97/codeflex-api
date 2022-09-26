import { TaxEntity } from '../../../entities/TaxEntity';
import { TaxResponse } from '../../../shared/dto/taxes/response';
import { mapToClass } from '../ObjectMapper';

export const mapTaxEntityToTaxResponse = (tax: TaxEntity): TaxResponse => mapToClass<TaxResponse>(tax, TaxResponse);
