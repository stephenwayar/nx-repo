import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { MailService } from './mail.service';

@Controller()
export class MailController {
  constructor(private readonly mailService: MailService) { }

  @EventPattern('account-created-email')
  async handleAccountCreated(data: { email: string }) {
    await this.mailService.sendAccountCreatedEmail(data.email);
  }
}