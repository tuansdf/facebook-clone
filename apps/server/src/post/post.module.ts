import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { AuthModule } from '/src/auth/auth.module';
import { Post } from '/src/post/post.entity';
import { UserModule } from '/src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), AuthModule, UserModule],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
