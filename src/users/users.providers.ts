import { DataSource } from 'typeorm';

import { User } from './entities/user.entity';

export const userProviders = [{
  provide: 'UserRepositoryToken',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
  inject: ['DATABASE_CONNECTION'],
}];