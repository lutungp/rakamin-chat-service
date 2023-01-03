import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.interface';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor( @Inject('UserRepositoryToken') private readonly userRepository: Repository<User>) { }

    async create(createUserDto: CreateUserDto) {
        try {
            const salt = await bcrypt.genSalt();
            createUserDto.password = await bcrypt.hash(createUserDto.password, salt);
            return await this.userRepository.save(createUserDto);
        } catch (err) {
            return err;
        }
    }

    async findOneByEmail(email: string, password: boolean): Promise<User> {
        let select: any[] = password ? ["id", "firstName", "lastName", "isActive", "email", "password"] : ["id", "firstName", "lastName", "isActive", "email"];
        return await this.userRepository.findOne({
            where : {
                email: email
            },
            select: select
        });

    }
}