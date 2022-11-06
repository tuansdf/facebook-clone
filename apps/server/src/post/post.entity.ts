import { IPost } from 'shared-types';
import { Column, Entity, ManyToOne } from 'typeorm';
import { CommonEntity } from '/src/shared/common.entity';
import { User } from '/src/user/user.entity';

@Entity()
export class Post extends CommonEntity implements IPost {
  @Column()
  body: string;

  @Column({ default: 0 })
  likes: number;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
