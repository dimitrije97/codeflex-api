import { getManager } from 'typeorm';

export const getBaseRepository = () => getManager('codeflex');
