import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteQuestionInput {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  userId: number;
}
