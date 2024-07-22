import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmsModule } from '../sms/sms.module';
import { MailModule } from '../mail/mail.module';

@Module({
  imports: [SmsModule, MailModule],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule {}