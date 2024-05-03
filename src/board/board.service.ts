import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  async create(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.prisma.board.create({
      data: {
        title: createBoardDto.title,
        content: createBoardDto.content,
      },
    });
  }

  async findAll(): Promise<Board[]> {
    return this.prisma.board.findMany();
  }

  async findOne(id: number): Promise<Board | null> {
    return this.prisma.board.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateBoardDto: UpdateBoardDto): Promise<Board> {
    // 게시글이 존재하는지 확인
    await this.checkExistBoard(id);

    return this.prisma.board.update({
      where: { id: id },
      data: {
        title: updateBoardDto.title,
        content: updateBoardDto.content,
      },
    });
  }

  async remove(id: number): Promise<Board> {
    await this.checkExistBoard(id);

    return this.prisma.board.delete({
      where: { id: id },
    });
  }

  /**
   * 게시글이 존재하는지 확인
   * @param id 게시글 ID
   * @private
   */
  private async checkExistBoard(id: number) {
    // 게시글이 존재하는지 확인
    const board = await this.findOne(id);
    if (!board) {
      throw new NotFoundException('존재하지 않는 게시글입니다.');
    }
  }
}
