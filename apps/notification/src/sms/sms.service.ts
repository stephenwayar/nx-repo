import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SmsService {
  async sendLoginSuccessSMS(phone: string) {
    Logger.log(`SMS to:${phone}. Someone just logged into your account.`);
  }
}