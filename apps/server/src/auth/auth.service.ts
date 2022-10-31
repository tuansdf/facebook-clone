import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcryptjs';
import { IJwtPayload, IJwtResponse } from 'shared-types';
import { CreateUserDto } from '/src/user/dto/create-user.dto';
import { User } from '/src/user/user.entity';
import { UserService } from '/src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findOneByEmail(email);

    if (!user || !this.validatePassword(user.password, password)) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async validatePassword(
    password: string,
    toValidate: string,
  ): Promise<boolean> {
    return compareSync(toValidate, password);
  }

  login(user: User): IJwtResponse {
    const payload = this.createPayload(user);
    return {
      ...payload,
      accessToken: this.jwtService.sign(payload),
    };
  }

  createPayload(user: User): IJwtPayload {
    return {
      id: user.id,
      email: user.email,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
    };
  }

  async register(createUserDto: CreateUserDto): Promise<IJwtResponse> {
    const user = await this.userService.create(createUserDto);
    return this.login(user);
  }
}
