import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateAnswerInput } from './dto/create-answer.input';
import { DeleteAnswerInput } from './dto/delete-answer.input';
import { UpdateAnswerInput } from './dto/update-answer.input';
import { Answer } from './entities/answer.entity';

@Injectable()
export class AnswersService {
  constructor(
    @Inject(Answer)
    private repository: Repository<Answer>,
  ) {}

  async create(input: CreateAnswerInput) {
    return this.repository.create(input);
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return this.repository.findOne(id);
  }

  async update(id: number, input: UpdateAnswerInput) {
    let toUpdate = await this.repository.findOne(id);

    let updated = Object.assign(toUpdate, input);
    return await this.repository.save(updated);
  }

  async remove(input: DeleteAnswerInput) {
    const answer = await this.repository.findOne(input.id);

    if (!answer || answer.userId !== input.userId)
      throw new Error(
        'Question does not exists or you are not the Question author',
      );

    const copy = { ...answer };

    await this.repository.remove(answer);

    return copy;
  }
}
