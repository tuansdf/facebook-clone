import { IUser } from 'shared-types';
import { Column, Entity } from 'typeorm';
import { CommonEntity } from '../shared/common.entity';

@Entity()
export class User extends CommonEntity implements IUser {
  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  password: string;
}
