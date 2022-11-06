import { ICommonEntity } from "./common";
import { IPost } from "./post";

export interface IUser extends ICommonEntity {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  posts: IPost[];
}

export interface ICreateUserDto {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
}
