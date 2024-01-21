import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyUserModule } from './my-user/my-user.module';
import { join } from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CreateUserEvent } from './user/create-user.event';

@Module({
  imports: [BookModule ,MyUserModule, UserModule , AuthModule, DatabaseModule,
    TypeOrmModule.forRootAsync(
      {
        imports : [
          ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ".prod.env"
        })],

    
      useFactory: (configServ : ConfigService)=>({
        type: 'postgres',
        host: configServ.get('DB_HOST'),
        port: configServ.get<number>('DB_PORT'),
        username: configServ.get('DB_USERNAME'),
        password: configServ.get('DB_PASSWORD'),
        database: configServ.get('DB_DATABASE'),
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: configServ.get('DB_SYNC'),
        
      }),
      inject: [ConfigService]
  }),
    MyUserModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
