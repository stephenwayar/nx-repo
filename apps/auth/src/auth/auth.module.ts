import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIFICATION',
        transport: Transport.TCP,
        options: {
          port: Number(process.env.NOTIFICATION_PORT) 
        }
      }
    ])
  ],
  controllers: [AuthController],
  providers: [AuthService],
})

export class AuthModule {}