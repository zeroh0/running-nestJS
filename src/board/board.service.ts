import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  create(createBoardDto: CreateBoardDto) {
    return 'This action adds a new board';
  }

  async findAll(): Promise<Board[]> {
    return this.prisma.board.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} board`;
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
