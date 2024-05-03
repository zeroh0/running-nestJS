import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('board')
@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  @ApiOperation({ summary: '게시글 생성', description: '게시글 생성' })
  create(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.create(createBoardDto);
  }

  @Get()
  @ApiOperation({
    summary: '게시글 전체 조회',
    description: '게시글 전체 조회',
  })
  findAll() {
    return this.boardService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: '게시글 상세 조회',
    description: '게시글 상세 조회',
  })
  @ApiParam({ name: 'id', description: '게시글 ID' })
  findOne(@Param('id') id: number) {
    return this.boardService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '게시글 수정', description: '게시글 수정' })
  @ApiParam({ name: 'id', description: '게시글 ID' })
  update(@Param('id') id: number, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(id, updateBoardDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '게시글 삭제', description: '게시글 삭제' })
  @ApiParam({ name: 'id', description: '게시글 ID' })
  remove(@Param('id') id: number) {
    return this.boardService.remove(id);
  }
}
