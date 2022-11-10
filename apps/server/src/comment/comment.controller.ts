import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtAuthGuard } from '/src/auth/passport/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('comment')
@UseGuards(JwtAuthGuard)
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOneByIdOrFail(id);
  }

  @Post()
  create(
    @Body() createCommentDto: CreateCommentDto,
    @Req() req: any,
    @Query('postId', ParseUUIDPipe) postId: string,
  ) {
    return this.commentService.create(createCommentDto, req.user.id, postId);
  }
}
