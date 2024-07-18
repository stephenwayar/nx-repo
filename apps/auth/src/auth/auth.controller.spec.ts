import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();
  });

  describe('signup', () => {
    it('should return "Sign-up success"', () => {
      const authController = app.get<AuthController>(AuthController);
      expect(authController.signupUser()).toEqual({
        message: 'Sign-up success',
        success: true
      });
    });
  });
});