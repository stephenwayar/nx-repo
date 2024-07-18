import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.NOTIFICATION_PORT

  await app.listen(port);
  Logger.log(`🚀 Notification service running on: http://localhost:${port}`);
}

bootstrap();