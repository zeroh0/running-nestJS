import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // 유효하지 않은 속성 자동 제거
      whitelist: true,
      // 전송된 데이터 자동으로 타입 변환
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
