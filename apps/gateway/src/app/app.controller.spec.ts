import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('api status', () => {
    it('should return "API Gateway"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getApiStatus()).toEqual({message: 'API Gateway', success: true});
    });
  });
});