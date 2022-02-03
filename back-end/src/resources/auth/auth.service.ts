import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginAuthInput } from './dto/login-auth.input';

import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser({ username, password }: LoginAuthInput) {
    const user = await this.usersService.repository.findOne({
      where: {
        username,
      },
    });

    if (user && user.password === password) {
      return this.login(user);
    }

    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: 'aaa',
    };
  }
}
