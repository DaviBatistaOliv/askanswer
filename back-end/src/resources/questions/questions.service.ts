import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateQuestionInput } from './dto/create-question.input';
import { DeleteQuestionInput } from './dto/delete-question.input';
import { UpdateQuestionInput } from './dto/update-question.input';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionsService {
  constructor(
    @Inject(Question)
    private repository: Repository<Question>,
  ) {}

  async create(input: CreateQuestionInput) {
    return this.repository.create(input);
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return this.repository.findOne(id);
  }

  async update(id: number, input: UpdateQuestionInput) {
    let toUpdate = await this.repository.findOne(id);

    let updated = Object.assign(toUpdate, input);
    return await this.repository.save(updated);
  }

  async remove(input: DeleteQuestionInput) {
    const question = await this.repository.findOne(input.id);

    if (!question || question.userId !== input.userId)
      throw new Error(
        'Question does not exists or you are not the Question author',
      );

    const copy = { ...question };

    await this.repository.remove(question);

    return copy;
  }
}
