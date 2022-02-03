import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { Connection } from 'typeorm';
import { User } from './entities/user.entity';
import { DatabaseModule } from 'src/database/database.module';

const USER_REPOSITORY_PROVIDE = {
  provide: User,
  useFactory: (connection: Connection) => connection.getRepository(User),
  inject: ['DATABASE_CONNECTION'],
};

@Module({
  imports: [DatabaseModule],
  providers: [UsersResolver, UsersService, USER_REPOSITORY_PROVIDE],
  exports: [UsersService],
})
export class UsersModule {}
