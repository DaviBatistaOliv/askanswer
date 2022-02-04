import { CreateAnswerInput } from './create-answer.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateAnswerInput extends PartialType(CreateAnswerInput) {
  @IsNotEmpty()
  @Field(() => ID)
  id: number;
}
