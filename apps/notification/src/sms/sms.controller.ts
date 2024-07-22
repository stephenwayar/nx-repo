import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { SmsService } from './sms.service';

@Controller()
export class SmsController {
  constructor(private readonly smsService: SmsService) { }

  @EventPattern('login-success-sms')
  async handleLoginSuccess(data: { phone: string }) {
    await this.smsService.sendLoginSuccessSMS(data.phone);
  }
}