import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const httpPort = Number(process.env.RTC_HTTP_PORT)
  const microservicePort = Number(process.env.RTC_MICROSERVICE_PORT)

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: microservicePort
    }
  });

  await app.startAllMicroservices();
  await app.listen(httpPort);
  Logger.log(`🚀 RTC service running on: http://localhost:${httpPort}`);
}

bootstrap();