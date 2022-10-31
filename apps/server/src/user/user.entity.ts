import { hash } from 'bcryptjs';
import { IUser } from 'shared-types';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
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
  password: string;

  @BeforeUpdate()
  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
