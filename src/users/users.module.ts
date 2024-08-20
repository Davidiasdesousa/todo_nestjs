import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/db/entities/users.entity';

@Module({
  providers: [UsersService],
  imports:[TypeOrmModule.forFeature([UserEntity])],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
