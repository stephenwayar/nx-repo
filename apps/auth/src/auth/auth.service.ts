import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin(): { message: string, success: boolean } {
    return { message: 'Sign-in success', success: true };
  }

  signup(): { message: string, success: boolean } {
    return { message: 'Sign-up success', success: true };
  }
}