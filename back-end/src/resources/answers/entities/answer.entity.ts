import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Question } from 'src/resources/questions/entities/question.entity';
import { User } from 'src/resources/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'tb_answers' })
export class Answer {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'question_id' })
  questionId: number;

  @Column()
  content: string;

  @Column({ name: 'vote_count' })
  voteCount?: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field(() => User)
  user: User;

  @Field(() => Question)
  question: Question;

  // Associations
  @JoinColumn({ name: 'question_id' })
  @ManyToOne(() => Question, (question) => question.userConnection, {
    primary: true,
  })
  questionConnection: Promise<Question[]>;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User, (user) => user.questionConnection, {
    primary: true,
  })
  userConnection: Promise<User[]>;
}
