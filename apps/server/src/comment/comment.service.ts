import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from '/src/comment/comment.entity';
import { PostService } from '/src/post/post.service';
import { UserService } from '/src/user/user.service';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    private readonly userService: UserService,
    private readonly postService: PostService,
  ) {}

  async findAll(): Promise<Comment[]> {
    return this.commentRepository
      .createQueryBuilder('comment')
      .leftJoinAndSelect('comment.user', 'user')
      .leftJoinAndSelect('comment.post', 'post')
      .orderBy('comment.created', 'DESC')
      .getMany();
  }

  async findOneByIdOrFail(commentId: string): Promise<Comment> {
    const comment = await this.commentRepository.findOneBy({ id: commentId });
    if (!comment) {
      throw new NotFoundException();
    }
    return comment;
  }

  async create(
    createCommentDto: CreateCommentDto,
    userId: string,
    postId: string,
  ): Promise<Comment> {
    const comment = new Comment();

    const [user, post] = await Promise.all([
      this.userService.findOneByIdOrFail(userId),
      this.postService.findOneByIdOrFail(postId),
    ]);
    comment.text = createCommentDto.text;
    comment.user = user;
    comment.post = post;

    const savedComment = await this.commentRepository.save(comment);
    return savedComment;
  }
}
