import { ICommonEntity } from "./common";
import { IUser } from "./user";

export interface IPost extends ICommonEntity {
  body: string;
  likes: number;
  user: IUser;
}

export interface ICreatePostDto {
  body: string;
}
