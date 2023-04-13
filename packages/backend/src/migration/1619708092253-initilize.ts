import { MigrationInterface, QueryRunner } from 'typeorm'

export class initilize1619708092253 implements MigrationInterface {
  name = 'initilize1619708092253'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `users` (`created_at` int NOT NULL, `updated_at` int NOT NULL, `deleted_at` int NULL, `id` varchar(255) NOT NULL, `display_name` varchar(36) NOT NULL, `email` varchar(127) NOT NULL, UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`')
    await queryRunner.query('DROP TABLE `users`')
  }
}
