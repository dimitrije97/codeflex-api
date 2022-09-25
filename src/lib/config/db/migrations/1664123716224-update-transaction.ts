import { MigrationInterface, QueryRunner } from 'typeorm';

export class updateTransaction1664123716224 implements MigrationInterface {
  name = 'updateTransaction1664123716224';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."tax" ALTER COLUMN "tax" SET DEFAULT '23.5'`);
    await queryRunner.query(`ALTER TABLE "public"."transaction" DROP COLUMN "priceWithoutTax"`);
    await queryRunner.query(`ALTER TABLE "public"."transaction" ADD "priceWithoutTax" numeric NOT NULL`);
    await queryRunner.query(`ALTER TABLE "public"."transaction" DROP COLUMN "priceWithTax"`);
    await queryRunner.query(`ALTER TABLE "public"."transaction" ADD "priceWithTax" numeric NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."transaction" DROP COLUMN "priceWithTax"`);
    await queryRunner.query(`ALTER TABLE "public"."transaction" ADD "priceWithTax" integer NOT NULL`);
    await queryRunner.query(`ALTER TABLE "public"."transaction" DROP COLUMN "priceWithoutTax"`);
    await queryRunner.query(`ALTER TABLE "public"."transaction" ADD "priceWithoutTax" integer NOT NULL`);
    await queryRunner.query(`ALTER TABLE "public"."tax" ALTER COLUMN "tax" SET DEFAULT 23.5`);
  }
}
