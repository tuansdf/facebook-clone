import { IComment } from "./comment";
import { ICommonEntity } from "./common";
import { IUser } from "./user";

export interface IPost extends ICommonEntity {
  body: string;
  numLikes: number;
  numComments: number;
  numShares: number;
  user?: IUser;
  comments?: IComment[];
}

export interface ICreatePostDto {
  body: string;
}
