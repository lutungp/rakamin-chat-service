import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { LoginUserDto } from '../users/dto/login-user.dto';
// import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    // constructor(private usersService: UsersService, private jwtService: JwtService){

    // }

    // async validateUserByPassword(loginAttempt: LoginUserDto) {

    //     // This will be used for the initial login
    //     let userToAttempt = await this.usersService.findOneByEmail(loginAttempt.email);

    //     if (userToAttempt == null) {
    //         return { status: 401 };
    //     }        

    //     const state = await this.checkPassword(loginAttempt.password, userToAttempt);

    //     const promise: any = await new Promise(async resolve => {
    //         const state = await this.checkPassword(loginAttempt.password, userToAttempt);
    //         if (state) {
    //             resolve(this.createJwtPayload(userToAttempt));
    //         } else {
    //             resolve({ status: 401 });
    //         }
    //     });

    //     return promise;
    // }

    // async validateUserByJwt(payload: JwtPayload) { 
        
    //     // This will be used when the user has already logged in and has a JWT
    //     let user = await this.usersService.findOneByEmail(payload.email);

    //     if(user){
    //         return user;
    //     } else {
    //         throw new UnauthorizedException();
    //     }

    // }

    // createJwtPayload(user){

    //     let data: JwtPayload = {
    //         email: user.email
    //     };

    //     let jwt = this.jwtService.sign(data);

    //     return {
    //         expiresIn: 3600,
    //         token: jwt            
    //     }

    // }

    // async checkPassword(password: string, user): Promise<boolean> {
    //     return new Promise(async resolve => {
    //         await bcrypt.compare(password, user.password, async (err, isMatch) => {
    //             if (err) {
    //                 return err;
    //             }
    //             resolve(isMatch);
    //         });
    //     });
    // }

}
