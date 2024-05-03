import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

  const config = new DocumentBuilder()
    .setTitle('running-nestJS API')
    .setDescription('running-nestJS API description')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
