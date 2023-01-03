import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProviders } from './users.providers';
import { DatabaseModule } from '../database/database.module';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        DatabaseModule,
        PassportModule.register({ defaultStrategy: 'jwt', session: false })
    ],
    providers: [
        ...userProviders, 
        UsersService
    ],
    controllers: [UsersController],
    exports: [UsersService],
})
export class UsersModule {}