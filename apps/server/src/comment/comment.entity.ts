import { IComment } from 'shared-types';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Post } from '/src/post/post.entity';
import { CommonEntity } from '/src/shared/common.entity';
import { User } from '/src/user/user.entity';

@Entity()
export class Comment extends CommonEntity implements IComment {
  @Column()
  text: string;

  @Column({ default: 0 })
  numLikes: number;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;
}
