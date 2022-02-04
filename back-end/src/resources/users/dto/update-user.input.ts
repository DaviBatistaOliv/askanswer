import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;
}
