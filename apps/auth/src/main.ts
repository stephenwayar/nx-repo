import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.AUTH_PORT)

  await app.listen(port);
  Logger.log(`🚀 Auth service running on: http://localhost:${port}`);
}

bootstrap();