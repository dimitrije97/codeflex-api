import { PageableItems } from '../../../lib/shared/dto/pagination';
import { getComputerPartRepository } from '../../../lib/repositories';
import { createPageableResponse } from '../../../lib/utils/mappers/pagination';
import { mapComputerEntitiesToComputerResponses } from '../../../lib/utils/mappers/computerParts';
import { GetComputerPartsRequest } from '../../../lib/shared/dto/computerParts/request';
import { ComputerPartResponse } from '../../../lib/shared/dto/computerParts/response';
import { CurrencyCodeEnum } from '../../../lib/shared/enums';

interface IComputerPartService {
  getComputerParts: (query: GetComputerPartsRequest) => Promise<PageableItems<ComputerPartResponse>>;
}

const getComputerParts = async (query: GetComputerPartsRequest): Promise<PageableItems<ComputerPartResponse>> => {
  const { offset, limit, page, search, currency } = query;

  const productRepository = await getComputerPartRepository();

  const [items, count] = await productRepository
    .createQueryBuilder('part')
    .leftJoinAndSelect('part.warehouses', 'warehouses')
    .skip(offset)
    .take(limit)
    .where(
      query.search
        ? 'LOWER(part.articleId) like :search OR LOWER(part.description) like :search OR LOWER(part.brand) like :search'
        : '1 = 1',
      {
        search: `%${search?.toLowerCase()}%`,
      },
    )
    .getManyAndCount();

  return createPageableResponse<ComputerPartResponse>(
    await mapComputerEntitiesToComputerResponses(items, currency ? CurrencyCodeEnum[currency] : undefined),
    limit,
    count,
    page,
  );
};

export const computerPartsService: IComputerPartService = {
  getComputerParts,
};
