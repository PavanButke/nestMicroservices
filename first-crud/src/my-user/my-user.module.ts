import { Module } from '@nestjs/common';
import { MyUserService } from './my-user.service';
import { MyUserController } from './my-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyUser } from './entities/my-user.entity';
import { MyUserRepository } from './repository/my-user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MyUser])],
  controllers: [MyUserController],
  providers: [MyUserService],
})
export class MyUserModule {}
