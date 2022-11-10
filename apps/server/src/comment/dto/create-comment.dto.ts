import { IsString } from 'class-validator';
import { ICreateCommentDto } from 'shared-types';

export class CreateCommentDto implements ICreateCommentDto {
  @IsString()
  text: string;
}
