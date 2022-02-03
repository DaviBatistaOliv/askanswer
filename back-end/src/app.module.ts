import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnswersModule } from './resources/answers/answers.module';
import { QuestionsModule } from './resources/questions/questions.module';
import { UsersModule } from './resources/users/users.module';
import { AuthModule } from './resources/auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      installSubscriptionHandlers: true,
      // context,
      context: ({ req }) => {
        return { req };
      },
      debug: process.env.NODE_ENV !== 'production',
      cors: {
        credentials: true,
        origin: true,
      },
    }),
    UsersModule,
    AnswersModule,
    QuestionsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
