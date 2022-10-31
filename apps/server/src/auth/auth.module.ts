import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from '/src/auth/auth.controller';
import { AuthService } from '/src/auth/auth.service';
import { JwtStrategy } from '/src/auth/passport/jwt.strategy';
import { LocalStrategy } from '/src/auth/passport/local.strategy';
import { UserModule } from '/src/user/user.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '30d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
