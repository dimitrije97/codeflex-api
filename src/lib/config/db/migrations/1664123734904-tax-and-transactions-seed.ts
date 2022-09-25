import { MigrationInterface, QueryRunner } from 'typeorm';
import { UserEntity } from '../../../entities/UserEntity';
import { ComputerPartEntity } from '../../../entities/ComputerPartEntity';
import { TaxEntity } from '../../../entities/TaxEntity';

export class taxAndTransactionsSeed1664123734904 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.createQueryBuilder().insert().into('tax').values({}).execute();
    const buyer: UserEntity = await queryRunner.manager.getRepository(UserEntity).findOneOrFail();
    const part: ComputerPartEntity = await queryRunner.manager.getRepository(ComputerPartEntity).findOneOrFail();
    const tax: TaxEntity = await queryRunner.manager.getRepository(TaxEntity).findOneOrFail();
    const priceWithoutTax: number = part.price;
    const priceWithTax: number = +part.price + +(part.price * tax.tax) / 100;

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('transaction')
      .values({
        buyer,
        part,
        tax,
        priceWithoutTax,
        priceWithTax,
      })
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.createQueryBuilder().delete().from('tax').execute();
  }
}
