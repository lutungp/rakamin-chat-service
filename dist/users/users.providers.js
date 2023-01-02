"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProviders = void 0;
const user_entity_1 = require("./entities/user.entity");
exports.userProviders = [{
        provide: 'UserRepositoryToken',
        useFactory: (dataSource) => dataSource.getRepository(user_entity_1.User),
        inject: ['DATABASE_CONNECTION'],
    }];
//# sourceMappingURL=users.providers.js.map