import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PostService {
  constructor(@Inject('RTC') private readonly rtcClient: ClientProxy) { }

  newPost(): { message: string } {
    this.rtcClient.emit('new-notification', { message: 'Notification 3' })
    return { message: 'Notification 3'};
  }
}