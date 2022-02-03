import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteAnswerInput {
  @Field(() => ID)
  id: number;

  @Field(() => ID)
  userId: number;
}
