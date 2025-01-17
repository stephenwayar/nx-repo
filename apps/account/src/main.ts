import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.ACCOUNT_PORT)

  await app.listen(port);
  Logger.log(`🚀 Account service running on: http://localhost:${port}`);
}

bootstrap();