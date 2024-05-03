import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardDto {
  @IsString()
  @ApiProperty({
    description: '게시글 제목',
    example: '객체지향의 사실과 오해',
  })
  readonly title: string;

  @IsString()
  @ApiProperty({
    description: '게시글 내용',
    example: '역할, 책임, 협력 관점에서 본 객체지향',
  })
  readonly content: string;
}
