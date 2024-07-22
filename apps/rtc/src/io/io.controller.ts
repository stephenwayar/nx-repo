import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { IoService } from './io.service';

@Controller()
export class IoController {
  constructor(private readonly ioService: IoService) { }

  @EventPattern('new-notification')
  async newNotification(data: { message: string }) {
    console.log('Received new Io from another microservice:', data);
    this.ioService.handleNewNotification(data);
  }
}