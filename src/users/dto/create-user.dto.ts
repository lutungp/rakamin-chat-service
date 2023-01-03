import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
    id: number
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    isActive: boolean;

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @Length(8, 10)
    password: string;
}