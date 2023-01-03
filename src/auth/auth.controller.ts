import { Controller, Request, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { LoginUserDto } from '../users/dto/login-user.dto'
// import { CreateUserDto } from '../users/dto/create-user.dto'
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from '../users/dto/login-user.dto';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
        private readonly usersService: UsersService
    ) {

    }

    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto){
        return await this.authService.validateUserByPassword(loginUserDto);
    }

    @Post('register')
    async create(@Body() CreateUserDto: CreateUserDto){
        const register = await this.usersService.create(CreateUserDto);
        if (typeof register.driverError === 'undefined') {
            return { 'message' : 'Success' };    
        }

        return register;
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}