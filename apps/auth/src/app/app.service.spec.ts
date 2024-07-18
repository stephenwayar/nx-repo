import { Test } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('api status', () => {
    it('should return "Auth Service"', () => {
      expect(service.getApiStatus()).toEqual({ message: 'Auth Service', success: true });
    });
  });
});