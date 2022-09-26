import { MigrationInterface, QueryRunner } from 'typeorm';
import { CurrencyType } from '../../../shared/types';
import { getCurrencies } from '../../../utils/currency';

export class currenciesSeed1664148913820 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const currencies: CurrencyType[] = await getCurrencies();

    await Promise.all(
      currencies.map((curr: CurrencyType) =>
        queryRunner.manager.createQueryBuilder().insert().into('currency').values(curr).execute(),
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
