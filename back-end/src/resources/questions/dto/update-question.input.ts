import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CreateQuestionInput } from './create-question.input';

@InputType()
export class UpdateQuestionInput extends PartialType(CreateQuestionInput) {
  @IsNotEmpty()
  @Field(() => ID)
  id: number;
}
