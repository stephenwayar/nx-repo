import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiStatus(): { message: string, success: boolean } {
    return { message: 'Account service', success: true };
  }
}