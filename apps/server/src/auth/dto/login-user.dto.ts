import { IsEmail, IsNotEmpty } from 'class-validator';
import { ILoginUserDto } from 'shared-types';

export class LoginUserDto implements ILoginUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
