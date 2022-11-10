import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { AuthModule } from '/src/auth/auth.module';
import { Comment } from '/src/comment/comment.entity';
import { PostModule } from '/src/post/post.module';
import { UserModule } from '/src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment]),
    UserModule,
    PostModule,
    AuthModule,
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
