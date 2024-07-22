import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MailService {
  async sendAccountCreatedEmail(email: string) {
    Logger.log(`Mail to:${email}. Your account has been created`);
  }
}