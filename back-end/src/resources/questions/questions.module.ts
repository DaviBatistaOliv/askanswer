import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsResolver } from './questions.resolver';
import { Connection } from 'typeorm';
import { Question } from './entities/question.entity';
import { DatabaseModule } from 'src/database/database.module';

const QUESTION_REPOSITORY_PROVIDE = {
  provide: Question,
  useFactory: (connection: Connection) => connection.getRepository(Question),
  inject: ['DATABASE_CONNECTION'],
};

@Module({
  imports: [DatabaseModule],
  providers: [
    QuestionsResolver, //
    QuestionsService,
    QUESTION_REPOSITORY_PROVIDE,
  ],
})
export class QuestionsModule {}
