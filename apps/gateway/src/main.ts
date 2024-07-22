import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app/app.module';
import { proxyMiddleware } from './middlewares/proxyMiddleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.GATEWAY_PORT 

  // Define middleware to handle routing to different services
  app.use((req, res, next) => {
    const { url } = req;

    if (url.startsWith('/auth/')) {
      Logger.log('Redirecting to auth service...');
      return proxyMiddleware(`http://localhost:${process.env.AUTH_PORT}`)(req, res, next);
    }

    if (url.startsWith('/account/')) {
      Logger.log('Redirecting to account service...');
      return proxyMiddleware(`http://localhost:${process.env.ACCOUNT_PORT}`)(req, res, next);
    }

    if (url.startsWith('/content/')) {
      Logger.log('Redirecting to content service...');
      return proxyMiddleware(`http://localhost:${process.env.CONTENT_PORT}`)(req, res, next);
    }

    if (url.startsWith('/admin/')) {
      Logger.log('Redirecting to admin service...');
      return proxyMiddleware(`http://localhost:${process.env.CONTENT_PORT}`)(req, res, next);
    }

    next();
  });

  await app.listen(port);
  Logger.log(`🚀 API gateway running on: http://localhost:${port}`);
}

bootstrap();