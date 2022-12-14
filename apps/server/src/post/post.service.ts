import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from '/src/post/post.entity';
import { UserService } from '/src/user/user.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly userService: UserService,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.user', 'post-user')
      .leftJoinAndSelect('post.comments', 'comment')
      .leftJoinAndSelect('comment.user', 'comment-user')
      .orderBy('post.created', 'DESC')
      .getMany();
  }

  async findOneById(postId: string): Promise<Post | null> {
    return this.postRepository.findOneBy({ id: postId });
  }

  async findOneByIdOrFail(postId: string): Promise<Post> {
    const post = await this.findOneById(postId);
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  async create(createPostDto: CreatePostDto, userId: string): Promise<Post> {
    const post = new Post();

    const savedUser = await this.userService.findOneByIdOrFail(userId);

    post.body = createPostDto.body;
    post.user = savedUser;

    const savedPost = await this.postRepository.save(post);

    return savedPost;
  }
}
