import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = app.get<AuthService>(AuthService);
  });

  describe('signup', () => {
    it('should return "Sign-up success"', () => {
      expect(service.signup()).toEqual({ 
        message: 'Sign-up success', 
        success: true 
      });
    });
  });
});