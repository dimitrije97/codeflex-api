import { Expose } from 'class-transformer';

export class WarehouseResponse {
    @Expose()
    id!: string;

    @Expose()
    country!: string;

    @Expose()
    city!: string;

    @Expose()
    inventory!: number;
}
