import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateAnswerInput {
  @IsNotEmpty()
  @Field(() => ID)
  userId: number;

  @IsNotEmpty()
  @Field(() => ID)
  questionId: number;

  @IsNotEmpty()
  @IsString()
  content: string;
}
