import { Repository } from 'typeorm';
import { User } from './user.interface';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(user: User): Promise<any>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    remove(id: string): Promise<void>;
}
