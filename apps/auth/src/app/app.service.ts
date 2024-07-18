import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiStatus(): { message: string; success: boolean } {
    return { message: 'Auth Service', success: true };
  }
}