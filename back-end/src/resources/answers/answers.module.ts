import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersResolver } from './answers.resolver';
import { Connection } from 'typeorm';
import { Answer } from './entities/answer.entity';
import { DatabaseModule } from 'src/database/database.module';

const ANSWERS_REPOSITORY_PROVIDE = {
  provide: Answer,
  useFactory: (connection: Connection) => connection.getRepository(Answer),
  inject: ['DATABASE_CONNECTION'],
};

@Module({
  imports: [DatabaseModule],
  providers: [AnswersResolver, AnswersService, ANSWERS_REPOSITORY_PROVIDE],
})
export class AnswersModule {}
