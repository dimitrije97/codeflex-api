import { PageableItems, PageableRequest } from '../../../lib/shared/dto/pagination';
import { ComputerPartResponse } from '../dto/response';
import { getComputerPartRepository } from '../../../lib/repositories';
import { createPageableResponse } from '../../../lib/utils/mappers/pagination';
import { mapComputerEntitiesToComputerResponses } from '../../../lib/utils/mappers/computerParts/mapComputerEntityToComputerResponse';

interface IComputerPartService {
  getComputerParts: (query: PageableRequest) => Promise<PageableItems<ComputerPartResponse>>;
}

const getComputerParts = async (query: PageableRequest): Promise<PageableItems<ComputerPartResponse>> => {
  const { offset, limit, page } = query;

  const productRepository = await getComputerPartRepository();

  const [items, count] = await productRepository.createQueryBuilder().skip(offset).take(limit).getManyAndCount();

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
