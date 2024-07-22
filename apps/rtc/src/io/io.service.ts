import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { IoGateway } from './io.gateway';

@Injectable()
export class IoService {
  constructor(
    @Inject(forwardRef(() => IoGateway))
    private readonly ioGateway: IoGateway,
  ) {}

  getNotifications(userId: string): { message: string; notifications: { message: string }[] } {
    const notifications = [{ message: 'Notification 1' }, { message: 'Notification 2' }];

    return {
      message: `Notifications for ${userId}`,
      notifications
    };
  }

  async handleNewNotification(data: { message: string }) {
    this.ioGateway.emitNotification(data);
  }
}