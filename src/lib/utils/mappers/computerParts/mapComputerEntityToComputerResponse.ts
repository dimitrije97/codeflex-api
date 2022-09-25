import { mapToClass } from '../ObjectMapper';
import { ComputerPartEntity } from '../../../entities/ComputerPartEntity';
import { ComputerPartResponse } from '../../../../api/computerParts/dto/response';

export const mapComputerEntityToComputerResponse = (part: ComputerPartEntity): ComputerPartResponse =>
  mapToClass<ComputerPartResponse>(part, ComputerPartResponse);

export const mapComputerEntitiesToComputerResponses = (parts: ComputerPartEntity[]): ComputerPartResponse[] =>
  parts.map(mapComputerEntityToComputerResponse);
