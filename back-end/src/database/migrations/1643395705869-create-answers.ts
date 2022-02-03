import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createAnswers1643395705869 implements MigrationInterface {
  private table = new Table({
    name: 'tb_answers',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true, // Auto-increment
        generationStrategy: 'increment',
      },
      {
        name: 'user_id',
        type: 'integer',
      },
      {
        name: 'question_id',
        type: 'integer',
      },
      {
        name: 'content',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'vote_count',
        type: 'integer',
        isNullable: true,
      },
      {
        name: 'created_at',
        type: 'timestamptz',
        isPrimary: false,

        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamptz',
        isPrimary: false,

        default: 'now()',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(this.table);
  }
}
