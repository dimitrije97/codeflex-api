import { MigrationInterface, QueryRunner } from 'typeorm';
import { usersSeed } from '../seed';
import { UserEntity } from '../../../entities/UserEntity';

export class usersSeed1664118921360 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const users: Partial<UserEntity>[] = await usersSeed();
    await queryRunner.manager.createQueryBuilder().insert().into('user', Object.keys(users[0])).values(users).execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.createQueryBuilder().delete().from('user').execute();
  }
}
