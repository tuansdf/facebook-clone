import { IsEmail, IsNotEmpty } from 'class-validator';
import { ICreateUserDto } from 'shared-types';

export class CreateUserDto implements ICreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  password: string;
}
