"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (configService) => new typeorm_1.DataSource({
            type: 'postgres',
            host: configService.get('DATABASE_HOST'),
            port: configService.get('DATABASE_PORT'),
            username: configService.get('DATABASE_USER'),
            password: configService.get('DATABASE_PASSWORD'),
            entities: [
                __dirname + "/entity/*.js"
            ],
            synchronize: true,
        }),
        inject: [config_1.ConfigService],
    }
];
//# sourceMappingURL=database.providers.js.map