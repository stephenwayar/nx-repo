import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.GATEWAY_PORT || 8000;

  await app.listen(port);
  Logger.log(`🚀 API gateway running on: http://localhost:${port}`);
}

bootstrap();