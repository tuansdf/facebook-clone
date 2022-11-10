import { hash } from 'bcryptjs';
import { Exclude } from 'class-transformer';
import { IUser } from 'shared-types';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';
import { Comment } from '/src/comment/comment.entity';
import { Post } from '/src/post/post.entity';
import { CommonEntity } from '/src/shared/common.entity';

@Entity()
export class User extends CommonEntity implements IUser {
  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  @Exclude()
  password: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @BeforeUpdate()
  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
