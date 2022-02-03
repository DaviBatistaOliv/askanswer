import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  access_token: string;
}
