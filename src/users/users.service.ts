import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.interface';

@Injectable()
export class UsersService {
    constructor( @Inject('UserRepositoryToken') private readonly userRepository: Repository<User>) { }

    async create(user: User) {
        try {
            return await this.userRepository.save(user);
        } catch (err) {
            return err;
        }
      }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id });
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}