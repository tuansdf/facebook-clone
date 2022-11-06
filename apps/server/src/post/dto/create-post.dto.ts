import { IsString } from 'class-validator';
import { ICreatePostDto } from 'shared-types';

export class CreatePostDto implements ICreatePostDto {
  @IsString()
  body: string;
}
