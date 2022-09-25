import { PageableItems } from '../../../lib/shared/dto/pagination';
import { ComputerPartResponse } from '../dto/response';
import { getComputerPartRepository } from '../../../lib/repositories';
import { createPageableResponse } from '../../../lib/utils/mappers/pagination';
import { mapComputerEntitiesToComputerResponses } from '../../../lib/utils/mappers/computerParts';
import { GetComputerPartsRequest } from '../dto/request';

interface IComputerPartService {
  getComputerParts: (query: GetComputerPartsRequest) => Promise<PageableItems<ComputerPartResponse>>;
}

const getComputerParts = async (query: GetComputerPartsRequest): Promise<PageableItems<ComputerPartResponse>> => {
  const { offset, limit, page, search } = query;

  const productRepository = await getComputerPartRepository();

  const [items, count] = await productRepository
    .createQueryBuilder('part')
    .skip(offset)
    .take(limit)
    .where(
      query.search
        ? 'part.articleId like :search OR part.description like :search OR part.brand like :search'
        : '1 = 1',
      {
        search: `%${query.search}%`,
      },
    )
    .getManyAndCount();

  return createPageableResponse<ComputerPartResponse>(
    mapComputerEntitiesToComputerResponses(items),
    limit,
    count,
    page,
  );
};

export const computerPartsService: IComputerPartService = {
  getComputerParts,
};
