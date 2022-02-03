import { InputType } from '@nestjs/graphql';
import { User } from 'src/resources/users/entities/user.entity';

@InputType()
export class LoginAuthInput implements Pick<User, 'username' | 'password'> {
  password: string;
  username: string;
}
