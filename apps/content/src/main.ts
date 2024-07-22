import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.CONTENT_PORT) 

  await app.listen(port);
  Logger.log( `🚀 Content service running on: http://localhost:${port}}`);
}

bootstrap();