import { MigrationInterface, QueryRunner } from 'typeorm';
import csvConverter from 'csvtojson';

import { environment } from '../../env';
import { ComputerPartEntity } from '../../../entities/ComputerPartEntity';

type CsvRowType = { id: string; description: string; brand: string; color: string; price: string };

const mapCsvRowToComputerPart = (row: CsvRowType): Partial<ComputerPartEntity> => ({
  articleId: row.id,
  description: row.description,
  brand: row.brand,
  color: row.color,
  price: +row.price,
});

export class computerParts1664038105955 implements MigrationInterface {
  name = 'computerParts1664038105955';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "computer_part" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "articleId" character varying NOT NULL, "description" character varying NOT NULL, "brand" character varying NOT NULL, "color" character varying NOT NULL, "price" numeric NOT NULL DEFAULT '0', CONSTRAINT "UQ_0d1b12d6798ae5a307e3a5a3984" UNIQUE ("articleId"), CONSTRAINT "PK_df521d237652bf3c37ad9993fc0" PRIMARY KEY ("id"))`,
    );

    const csvRows: CsvRowType[] = await csvConverter().fromFile(environment.csvFilePath);

    const parts: Partial<ComputerPartEntity>[] = csvRows.map((row: CsvRowType) => mapCsvRowToComputerPart(row));

    await Promise.all(
      parts
        .map((part: Partial<ComputerPartEntity>) =>
          queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('computer_part', Object.keys(part))
            .values(part)
            .returning('id')
            .execute(),
        ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "computer_part"`);
  }
}
