import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from '/src/auth/auth.service';
import { LoginUserDto } from '/src/auth/dto/login-user.dto';
import { LocalAuthGuard } from '/src/auth/passport/local-auth.guard';
import { CreateUserDto } from '/src/user/dto/create-user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: LoginUserDto })
  @Post('login')
  login(@Req() req: any) {
    return this.authService.login(req.user);
  }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }
}
