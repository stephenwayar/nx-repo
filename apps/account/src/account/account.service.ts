import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
  getLikes(): string[] {
    const likes = ['like1', 'like2', 'like3'];
    return likes;
  }
}