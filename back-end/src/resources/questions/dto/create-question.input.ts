import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateQuestionInput {
  @Field(() => ID)
  userId: number;

  title: string;

  content: string;

  @Column({ name: 'vote_count' })
  voteCount: number;

  tags: string;
}
