import { Injectable } from '@nestjs/common';
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

  async findOne(id: number) {
    return this.prisma.board.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return this.prisma.board.update({
      where: { id: id },
      data: {
        title: updateBoardDto.title,
        content: updateBoardDto.content,
      },
    });
  }

  remove(id: number) {
    return this.prisma.board.delete({
      where: { id: id },
    });
  }
}
