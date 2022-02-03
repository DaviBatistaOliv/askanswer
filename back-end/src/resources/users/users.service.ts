import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(User)
    readonly repository: Repository<User>,
  ) {}

  async create(input: CreateUserInput) {
    const data = {
      email: input.email.toLowerCase().trim(),
      username: input.username.toLowerCase().trim(),
      password: input.password.toLowerCase().trim(),
    };

    let user = await this.repository.findOne({
      where: [
        { email: data.email }, //
        { username: data.username },
      ],
    });

    if (user) {
      if (data.email === user.email) {
        throw new InternalServerErrorException('Ja existe esse email cadastro');
      }

      if (data.username === user.username) {
        throw new InternalServerErrorException(
          'username ja está sendo utilizado',
        );
      }
    }

    user = this.repository.create(data);

    await this.repository.save(user);

    return user;
  }

  async findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return this.repository.findOne(id);
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    let toUpdate = await this.repository.findOne(id);

    let updated = Object.assign(toUpdate, updateUserInput);
    return await this.repository.save(updated);
  }

  async remove(id: number) {
    return this.repository.delete(id);
  }
}
