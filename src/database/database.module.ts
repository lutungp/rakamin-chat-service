
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '../config/configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration]
        }),
    ],
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {}