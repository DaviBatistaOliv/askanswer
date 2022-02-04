import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class DeleteAnswerInput {
  @IsNotEmpty()
  @Field(() => ID)
  id: number;

  @IsNotEmpty()
  @Field(() => ID)
  userId: number;
}
