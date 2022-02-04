import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Answer } from 'src/resources/answers/entities/answer.entity';
import { Question } from 'src/resources/questions/entities/question.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'tb_users' })
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Associations
  @OneToMany(() => Question, (question) => question.userConnection)
  questionConnection: Promise<Question[]>;

  @OneToMany(() => Answer, (answer) => answer.userConnection)
  answerConnection: Promise<Answer[]>;
}
