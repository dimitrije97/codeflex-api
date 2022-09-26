import { MigrationInterface, QueryRunner } from 'typeorm';

export class wherehouses1664144263174 implements MigrationInterface {
  name = 'wherehouses1664144263174';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "warehouse" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "country" character varying NOT NULL, "city" character varying NOT NULL, "inventory" integer NOT NULL, "partId" uuid, CONSTRAINT "PK_965abf9f99ae8c5983ae74ebde8" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "public"."tax" ALTER COLUMN "tax" SET DEFAULT '23.5'`);
    await queryRunner.query(
      `ALTER TABLE "warehouse" ADD CONSTRAINT "FK_8aab4a2948b67717380f268c1b5" FOREIGN KEY ("partId") REFERENCES "computer_part"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "warehouse" DROP CONSTRAINT "FK_8aab4a2948b67717380f268c1b5"`);
    await queryRunner.query(`ALTER TABLE "public"."tax" ALTER COLUMN "tax" SET DEFAULT 23.5`);
    await queryRunner.query(`DROP TABLE "warehouse"`);
  }
}
