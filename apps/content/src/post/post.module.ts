import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RTC',
        transport: Transport.TCP,
        options: {
          port: Number(process.env.RTC_MICROSERVICE_PORT) 
        }
      }
    ])
  ],
  controllers: [PostController],
  providers: [PostService],
})

export class PostModule {}