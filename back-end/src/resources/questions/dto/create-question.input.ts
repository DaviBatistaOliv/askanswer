import { InputType, Int, Field, ID, HideField } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { Column } from 'typeorm';

@InputType()
export class CreateQuestionInput {
  @Field(() => ID)
  userId: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @HideField()
  @Column({ name: 'vote_count' })
  voteCount: number;

  @IsNotEmpty()
  @IsString()
  tags: string;
}
