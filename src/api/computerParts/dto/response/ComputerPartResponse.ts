import { Expose } from 'class-transformer';

export class ComputerPartResponse {
  @Expose()
  id!: string;

  @Expose()
  articleId!: string;

  @Expose()
  description!: string;

  @Expose()
  brand!: string;

  @Expose()
  color!: string;

  @Expose()
  price!: number;
}
