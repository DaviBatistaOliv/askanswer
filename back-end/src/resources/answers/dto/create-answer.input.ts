import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAnswerInput {
  @Field(() => ID)
  userId: number;

  @Field(() => ID)
  questionId: number;

  content: string;
}
