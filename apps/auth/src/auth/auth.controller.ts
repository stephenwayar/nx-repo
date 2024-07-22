import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signupUser() {
    return this.authService.signup();
  }

  @Post('/signin')
  signinUser() {
    return this.authService.signin();
  }
}