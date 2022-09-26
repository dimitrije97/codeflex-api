import {MigrationInterface, QueryRunner} from "typeorm";

export class currencies1664148829744 implements MigrationInterface {
    name = 'currencies1664148829744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "currency_code_enum" AS ENUM('USD', 'RSD', 'AUD', 'GBP', 'JPY')`);
        await queryRunner.query(`CREATE TABLE "currency" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "value" numeric NOT NULL DEFAULT '0', "code" "currency_code_enum" NOT NULL, CONSTRAINT "UQ_723472e41cae44beb0763f4039c" UNIQUE ("code"), CONSTRAINT "PK_3cda65c731a6264f0e444cc9b91" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."tax" ALTER COLUMN "tax" SET DEFAULT '23.5'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."tax" ALTER COLUMN "tax" SET DEFAULT 23.5`);
        await queryRunner.query(`DROP TABLE "currency"`);
        await queryRunner.query(`DROP TYPE "currency_code_enum"`);
    }

}
