import { Controller, Request, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { LoginUserDto } from '../users/dto/login-user.dto'
// import { CreateUserDto } from '../users/dto/create-user.dto'
import { JwtAuthGuard } from './guards/jwt-auth.guard';
// import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {

    // constructor(
    //     private authService: AuthService,
    //     private readonly usersService: UsersService
    // ) {

    // }

    // @Post('login')
    // async login(@Body() loginUserDto: LoginUserDto){
    //     return await this.authService.validateUserByPassword(loginUserDto);
    // }

    // @Post('register')
    // async create(@Body() CreateUserDto: CreateUserDto){
    //     return await this.usersService.create(CreateUserDto);
    // }

    // @UseGuards(JwtAuthGuard)
    // @Get('profile')
    // getProfile(@Request() req) {
    //     return req.user;
    // }
}