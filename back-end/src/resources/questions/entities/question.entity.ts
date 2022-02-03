import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Answer } from 'src/resources/answers/entities/answer.entity';
import { User } from 'src/resources/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'tb_questions' })
export class Question {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ name: 'vote_count' })
  voteCount: number;

  @Column()
  tags?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field(() => User)
  user: User;

  // Associations
  @ManyToOne(() => User, (user) => user.questionConnection, {
    primary: true,
  })
  @JoinColumn({ name: 'user_id' })
  userConnection: Promise<User[]>;
  // Associations
  @OneToMany(() => Answer, (answer) => answer.questionConnection)
  questionConnection: Promise<User[]>;
}
