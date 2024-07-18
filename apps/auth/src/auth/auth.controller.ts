import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/api/auth') // Define base path for controller
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get('/signup') // Define endpoint path relative to base path
  signupUser() {
    return this.authService.signup();
  }

  @Get('/signin') // Define endpoint path relative to base path
  signinUser() {
    return this.authService.signin();
  }
}