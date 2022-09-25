import {MigrationInterface, QueryRunner} from "typeorm";

export class transactionsAndTaxes1664122701665 implements MigrationInterface {
    name = 'transactionsAndTaxes1664122701665'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tax" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "tax" numeric NOT NULL DEFAULT '23.5', CONSTRAINT "PK_2c1e62c595571139e2fb0e9c319" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transaction" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "priceWithoutTax" integer NOT NULL, "priceWithTax" integer NOT NULL, "buyerId" uuid, "partId" uuid, "taxId" uuid, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_2ef5d5742e52e2bca6d8798dda5" FOREIGN KEY ("buyerId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_ebdc0594e3e0cdd5cb0a03c3484" FOREIGN KEY ("partId") REFERENCES "computer_part"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_b9affc139a329f05e1cc1ed6813" FOREIGN KEY ("taxId") REFERENCES "tax"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_b9affc139a329f05e1cc1ed6813"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_ebdc0594e3e0cdd5cb0a03c3484"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_2ef5d5742e52e2bca6d8798dda5"`);
        await queryRunner.query(`DROP TABLE "transaction"`);
        await queryRunner.query(`DROP TABLE "tax"`);
    }

}
