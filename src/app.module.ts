import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [ENV == 'local' ? '.env.development.local' : (ENV == 'dev' ? '.env.development' : '.env.production')],
      isGlobal: true,
      load: [configuration]
    }),
    DatabaseModule, 
    AuthModule, 
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
