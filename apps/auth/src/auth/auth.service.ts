import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(@Inject('NOTIFICATION') private readonly notificationClient: ClientProxy) { }

  signin(): { message: string, success: boolean } {
    this.notificationClient.emit('login-success-sms', { phone: '09090909090' })
    return { message: 'Sign-in success', success: true };
  }

  signup(): { message: string, success: boolean } {
    this.notificationClient.emit('account-created-email', { email: 'stephen@gmail.com' })
    return { message: 'Sign-up success', success: true };
  }
}